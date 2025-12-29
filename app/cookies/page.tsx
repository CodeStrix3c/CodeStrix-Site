'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiFileText } from 'react-icons/fi'

export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="section hero-gradient grid-overlay">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <Link href="/" className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-8">
                <FiArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <FiFileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold font-heading">
                    Cookie <span className="gradient-text">Policy</span>
                  </h1>
                  <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">1. What Are Cookies</h2>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">3. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Session Cookies</h3>
                    <p className="text-gray-700">Temporary cookies that are deleted when you close your browser.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Persistent Cookies</h3>
                    <p className="text-gray-700">Cookies that remain on your device for a set period or until you delete them.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">4. Managing Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies. However, disabling cookies may impact your experience on our website.
                </p>
                <p className="text-gray-700">
                  You can manage cookie preferences through your browser settings or by using our cookie consent tool.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">5. Third-Party Cookies</h2>
                <p className="text-gray-700">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, so please check the third-party websites for more information about their cookies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:Info@codestrix.com" className="text-primary hover:underline">
                    Info@codestrix.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

