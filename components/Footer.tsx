'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiCode } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { label: 'Web Development', href: '/services#web' },
    { label: 'Mobile Apps', href: '/services#mobile' },
    { label: 'Cloud Solutions', href: '/services#cloud' },
    { label: 'AI & Machine Learning', href: '/services#ai' },
  ]

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
  ]

  const legal = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ]

  const social = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/images/codestrix-logo.png" 
                alt="Codestrix Logo" 
                width={140} 
                height={100}
                className="transition-transform duration-300 group-hover:scale-105 object-contain"
              />
            </Link>
            <p className="text-gray-700 mb-6 max-w-md">
              Transforming businesses through innovative software solutions. 
              We build scalable, secure, and cutting-edge technology products.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:Info@codestrix.com" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FiMail className="w-5 h-5" />
                </div>
                <span>Info@codestrix.com</span>
              </a>
              <a href="tel:+919419616168" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FiPhone className="w-5 h-5" />
                </div>
                <span>+91 9419616168 / +91 9419616130</span>
              </a>
              <div className="flex items-start gap-3 text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <span>Sidco Complex Near IT Tower Rangreth Budgam, 19007</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4 font-heading">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-heading">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 font-heading">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-2 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-700 text-sm">
            © {currentYear} Codestrix. All rights reserved. Built with 💙 by our team.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white hover:bg-primary/10 border border-gray-300 hover:border-primary/30 rounded-lg flex items-center justify-center text-gray-700 hover:text-primary transition-all group shadow-sm"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

