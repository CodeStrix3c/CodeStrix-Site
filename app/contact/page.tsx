'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiGlobe } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        toast.success(data.message || 'Message sent! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        // Check if it's a configuration error
        if (data.error && data.error.includes('not configured')) {
          toast.error('Email service not configured. Please contact us directly at Info@codestrix.com', {
            duration: 6000
          })
        } else {
          toast.error(data.error || data.message || 'Failed to send message. Please try again.')
        }
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge mb-6">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                Let's Build <span className="gradient-text">Something</span> Amazing
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Have a project in mind? We'd love to hear from you. Let's discuss how we can help.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                Whether you need a custom web application, mobile app, cloud solution, or AI integration, 
                our team is ready to turn your vision into reality. Get in touch and let's start your digital transformation journey.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                Our team is here to answer your questions, provide expert consultation, and help you understand 
                how our services can benefit your business. We offer free initial consultations to discuss 
                your project requirements and provide tailored solutions that align with your goals and budget.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">Fast</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-accent mb-2">Free</div>
                  <div className="text-sm text-gray-600">Consultation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="card">
              <h2 className="text-3xl font-bold mb-6 font-heading">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-900 mb-2">Your Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input" required />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input" required />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Company (Optional)</label>
                  <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="input" />
                </div>
                <div>
                  <label className="block text-gray-900 mb-2">Message</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="textarea" required />
                </div>
                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                  <FiSend className="w-5 h-5" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-heading">Contact Information</h2>
                <p className="text-gray-700 mb-8">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <div className="card group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FiMail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:Info@codestrix.com" className="text-gray-700 hover:text-primary transition-colors">Info@codestrix.com</a>
                    </div>
                  </div>
                </div>

                <div className="card group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FiPhone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+919419616168" className="text-gray-700 hover:text-primary transition-colors">+91 9419616168 / +91 9419616130</a>
                    </div>
                  </div>
                </div>

                <div className="card group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FiMapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-700">Sidco Complex Near IT Tower<br />Rangreth Budgam, 19007</p>
                    </div>
                  </div>
                </div>

                <div className="card group hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FiClock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

