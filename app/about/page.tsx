'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiTarget, FiEye, FiHeart, FiUser, FiAward, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

export default function AboutPage() {
  // Generate avatar URLs using UI Avatars service (you can replace with actual images later)
  const getAvatarUrl = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=300&background=6366f1&color=fff&bold=true`
  }

  const team = [
    { name: 'Umar Mukhtar', role: 'Lead Developer', image: getAvatarUrl('Umar Mukhtar') },
    { name: 'Tansha Ashraf', role: 'UI/UX Developer', image: getAvatarUrl('Tansha Ashraf') },
    { name: 'Quarat ul Qadir', role: 'FullStack Developer', image: getAvatarUrl('Quarat ul Qadir') },
    { name: 'Aaqib Gul', role: 'Mobile Developer', image: getAvatarUrl('Aaqib Gul') },
    { name: 'Waqas Farooq', role: 'Mobile Developer', image: getAvatarUrl('Waqas Farooq') },
    { name: 'Sehrish Altaf', role: 'Full Stack Developer', image: getAvatarUrl('Sehrish Altaf') },
    { name: 'Aalim Mir', role: 'Automation Developer', image: getAvatarUrl('Aalim Mir') },
    { name: 'Baseerat Farooq', role: 'Backend Developer', image: getAvatarUrl('Baseerat Farooq') },
    { name: 'Junaid Farooq', role: 'AI Developer', image: getAvatarUrl('Junaid Farooq') },
  ]

  const values = [
    { icon: FiTarget, title: 'Excellence', description: 'We strive for perfection in every project, delivering quality that exceeds expectations.' },
    { icon: FiUser, title: 'Collaboration', description: 'We believe in teamwork and transparent communication with our clients and partners.' },
    { icon: FiHeart, title: 'Passion', description: 'We love what we do and it shows in the innovative solutions we create.' },
    { icon: FiTrendingUp, title: 'Innovation', description: 'We stay ahead of the curve, adopting the latest technologies and best practices.' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="badge mb-6">About Codestrix</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                Building the <span className="gradient-text">Future</span> of Software
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                We're a team of passionate developers, designers, and innovators dedicated to creating 
                exceptional software solutions that transform businesses.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                Codestrix has been at the forefront of digital transformation for businesses across industries.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                Our journey began with a simple belief: technology should empower businesses, not complicate them. 
                Today, we're proud to have delivered innovative solutions that have helped companies streamline 
                operations, increase productivity, and achieve remarkable growth in their respective markets.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-700">
                  <FiAward className="w-5 h-5 text-primary" />
                  <span>Industry Leaders</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiTrendingUp className="w-5 h-5 text-secondary" />
                  <span>Growing Team</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiUser className="w-5 h-5 text-accent" />
                  <span>Expert Professionals</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, Codestrix started as a small team of developers with a big vision: 
                to make cutting-edge technology accessible to businesses of all sizes.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown into a leading software development company, serving 
                clients across the globe with innovative solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have delivered over 1000+ successful projects and helped 
                500+ businesses transform their operations through technology.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card card-hover">
              <FiTarget className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4 font-heading">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses worldwide with innovative software solutions that drive growth, 
                enhance efficiency, and create lasting value. We're committed to delivering excellence 
                in every project we undertake.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card card-hover">
              <FiEye className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-3xl font-bold mb-4 font-heading">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's most trusted partner for digital transformation, recognized for 
                our technical excellence, innovative approach, and unwavering commitment to 
                client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Values</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              What <span className="gradient-text">Drives</span> Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our core values guide everything we do, from how we work with clients to how we support our team members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="card card-hover text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Team</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Our diverse team of talented professionals brings expertise and passion to every project.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With years of combined experience across various technologies and industries, our team is dedicated 
              to delivering exceptional results that exceed expectations.
            </p>
          </div>
          
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">9+</div>
              <div className="text-gray-700 text-sm">Senior Tech Experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-700 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">20+</div>
              <div className="text-gray-700 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-700 text-sm">Dedicated</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                className="card card-hover text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <FiAward className="w-4 h-4" />
                  <span>Expert Professional</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Culture */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiUser className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Collaborative</h3>
              <p className="text-gray-700 text-sm">
                We work together as one cohesive unit, sharing knowledge and supporting each other to achieve common goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Growth-Oriented</h3>
              <p className="text-gray-700 text-sm">
                Continuous learning and professional development are at the heart of our team culture.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Passionate</h3>
              <p className="text-gray-700 text-sm">
                Every team member brings genuine passion and dedication to their work, creating exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Join Us on Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team.
            </p>
            <Link href="/careers" className="btn btn-primary text-lg px-8 py-4">
              View Open Positions <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

