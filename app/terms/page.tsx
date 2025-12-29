'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiFileText } from 'react-icons/fi'

export default function TermsPage() {
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
                    Terms of <span className="gradient-text">Service</span>
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
                <h2 className="text-3xl font-bold mb-4 font-heading">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing and using the Codestrix website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">2. Use License</h2>
                <p className="text-white mb-4">
                  Permission is granted to temporarily download one copy of the materials on Codestrix's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-700">This license shall automatically terminate if you violate any of these restrictions.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">3. Services</h2>
                <p className="text-white mb-4">
                  Codestrix provides software development, consulting, and related services. All services are subject to separate service agreements.
                </p>
                <p className="text-gray-700">
                  We reserve the right to modify or discontinue any service at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">4. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content, features, and functionality of this website are owned by Codestrix and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">5. Limitation of Liability</h2>
                <p className="text-gray-700">
                  In no event shall Codestrix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Codestrix's website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">6. Revisions</h2>
                <p className="text-gray-700">
                  Codestrix may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 font-heading">7. Contact Information</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at{' '}
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

