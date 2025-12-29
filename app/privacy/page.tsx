'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiShield } from 'react-icons/fi'

export default function PrivacyPage() {
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
                  <FiShield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold font-heading">
                    Privacy <span className="gradient-text">Policy</span>
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
                <h2 className="text-3xl font-bold mb-4 font-heading">1. Introduction</h2>
                <p className="text-gray-700">
                  Codestrix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">2. Information We Collect</h2>
                <p className="text-white mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Personal information you provide (name, email, company)</li>
                  <li>Information automatically collected (IP address, browser type, device information)</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">3. How We Use Your Information</h2>
                <p className="text-white mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">4. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">5. Your Rights</h2>
                <p className="text-white mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions about this Privacy Policy, please contact us at{' '}
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

