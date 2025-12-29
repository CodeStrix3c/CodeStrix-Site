import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavigationLoader from '@/components/NavigationLoader'

export const metadata: Metadata = {
  title: 'Codestrix - Premium Software & IT Solutions',
  description: 'Leading software development company specializing in web development, mobile apps, AI/ML, cloud solutions, and digital transformation. Transform your business with cutting-edge technology.',
  keywords: 'software development, web development, mobile apps, AI ML, cloud solutions, custom software, IT consulting, digital transformation, Codestrix',
  authors: [{ name: 'Codestrix' }],
  openGraph: {
    title: 'Codestrix - Premium Software & IT Solutions',
    description: 'Transform your business with cutting-edge technology solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationLoader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#1f2937',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            },
          }}
        />
      </body>
    </html>
  )
}

