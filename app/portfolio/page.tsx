'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI/ML']

  const projects = [
    { title: 'Process Model', category: 'Web', image: 'https://ui-avatars.com/api/?name=Process+Model&size=600&background=6366f1&color=fff&bold=true', description: 'Advanced process modeling and workflow management system', tech: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Zirrat Agri App', category: 'Mobile', image: 'https://ui-avatars.com/api/?name=Zirrat+Agri&size=600&background=10b981&color=fff&bold=true', description: 'Agricultural management mobile application for farmers', tech: ['React Native', 'Firebase'] },
    { title: 'AI Kitchen Visualisation', category: 'AI/ML', image: 'https://ui-avatars.com/api/?name=AI+Kitchen&size=600&background=f43f5e&color=fff&bold=true', description: 'AI-powered kitchen design and visualization tool', tech: ['Python', 'TensorFlow', '3D Rendering'] },
    { title: 'Ecommerce', category: 'Web', image: 'https://ui-avatars.com/api/?name=Ecommerce&size=600&background=0ea5e9&color=fff&bold=true', description: 'Full-featured e-commerce platform with payment integration', tech: ['Next.js', 'Stripe', 'PostgreSQL'] },
    { title: 'Inventory Management', category: 'Web', image: 'https://ui-avatars.com/api/?name=Inventory&size=600&background=8b5cf6&color=fff&bold=true', description: 'Comprehensive inventory tracking and management system', tech: ['React', 'Node.js', 'MySQL'] },
    { title: 'Expenses Manager', category: 'Mobile', image: 'https://ui-avatars.com/api/?name=Expenses&size=600&background=f59e0b&color=fff&bold=true', description: 'Personal and business expense tracking application', tech: ['Flutter', 'SQLite'] },
    { title: 'QuickMan Security Web', category: 'Web', image: 'https://ui-avatars.com/api/?name=QuickMan&size=600&background=ef4444&color=fff&bold=true', description: 'Security management and monitoring web platform', tech: ['Vue.js', 'Django', 'Redis'] },
    { title: 'HexaHealth', category: 'Web', image: 'https://ui-avatars.com/api/?name=HexaHealth&size=600&background=06b6d4&color=fff&bold=true', description: 'Healthcare management and patient portal system', tech: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Riyadh University Student App', category: 'Mobile', image: 'https://ui-avatars.com/api/?name=Riyadh+Uni&size=600&background=6366f1&color=fff&bold=true', description: 'University student portal and management mobile app', tech: ['React Native', 'Firebase', 'Node.js'] },
  ]

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="pt-20">
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge mb-6">Our Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                Our <span className="gradient-text">Work</span> Speaks for Itself
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                From enterprise web applications to innovative mobile solutions, each project showcases 
                our expertise, creativity, and commitment to delivering exceptional results that drive business success.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                Our diverse portfolio includes e-commerce platforms, process management systems, 
                agricultural mobile apps, AI-powered visualization tools, and enterprise solutions. 
                Each project represents our ability to understand client needs, leverage the right 
                technologies, and deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Web Apps</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Mobile Apps</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">AI/ML</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">E-commerce</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Enterprise</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="card card-hover group overflow-hidden p-0">
                <div className="relative h-64">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <FiExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-primary font-semibold mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{project.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 backdrop-blur-sm rounded-full text-primary">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

