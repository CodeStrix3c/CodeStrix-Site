'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './Loader'

export default function NavigationLoader() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const prevPathnameRef = useRef(pathname)

  useEffect(() => {
    // Only show loader if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      setIsLoading(true)
      prevPathnameRef.current = pathname

      // Hide loader after a short delay to allow page to render
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [pathname])

  // Intercept link clicks to show loader immediately
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href)
        // Only show loader for internal navigation
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          setIsLoading(true)
        }
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100]"
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

