'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMapPin, FiClock, FiArrowRight, FiBriefcase } from 'react-icons/fi'

export default function CareersPage() {
  const benefits = [
    { title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { title: 'Office Environment', description: 'Collaborative workspace with modern facilities' },
    { title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { title: 'Flexible Hours', description: 'Work-life balance is important to us' },
    { title: 'Team Events', description: 'Regular team building activities' },
  ]

  const openings = [
    { title: 'QA Testers', location: 'Work from office', type: 'Full-time' },
    { title: 'AI/ML Interns', location: 'Work from office', type: 'Internship' },
    { title: 'Angular Developer', location: 'Work from office', type: 'Full-time' },
    { title: 'Cloud', location: 'Work from office', type: 'Full-time' },
    { title: 'Full Stack Interns', location: 'Work from office', type: 'Internship' },
    { title: 'DevOps Interns', location: 'Work from office', type: 'Internship' },
  ]

  return (
    <div className="pt-20">
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge mb-6">Join Our Team</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                Build Your <span className="gradient-text">Career</span> With Us
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Join a team of passionate innovators creating the future of software.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                At Codestrix, we believe in nurturing talent and providing opportunities for growth. 
                Work on exciting projects, learn cutting-edge technologies, and be part of a culture 
                that values innovation, collaboration, and excellence.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                We offer a dynamic work environment where your ideas matter, your skills are valued, 
                and your career growth is our priority. From interns to senior developers, everyone 
                contributes to building solutions that make a real impact. Join us and be part of 
                something extraordinary.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-gray-600">Open Positions</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">Office</div>
                  <div className="text-sm text-gray-600">Work Location</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-accent mb-2">Growth</div>
                  <div className="text-sm text-gray-600">Career Path</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Why Work at <span className="gradient-text">Codestrix</span>?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              At Codestrix, we believe in creating an environment where talent thrives, innovation flourishes, 
              and careers grow. We're not just building software—we're building the future, and we want you to be part of it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover">
                <h3 className="text-xl font-bold mb-2 font-heading">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Open Positions</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Current <span className="gradient-text">Opportunities</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              We're looking for passionate individuals who are ready to make an impact. Join our team and work on 
              exciting projects that challenge you to grow while contributing to innovative solutions.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2"><FiMapPin className="w-4 h-4" />{job.location}</span>
                      <span className="flex items-center gap-2"><FiClock className="w-4 h-4" />{job.type}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn btn-primary whitespace-nowrap">
                    Apply Now <FiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

