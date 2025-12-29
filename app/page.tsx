'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiUser,
  FiAward,
  FiStar,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiNextdotjs
} from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import Loader from '@/components/Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: techRef, inView: techInView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Build scalable, responsive web applications with modern frameworks and best practices.',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Deploy, scale, and manage your infrastructure with leading cloud platforms.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Serverless Architecture'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Leverage AI and ML to unlock insights and automate intelligent processes.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning Models'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiDatabase,
      title: 'Data Engineering',
      description: 'Transform raw data into actionable insights with robust data pipelines.',
      features: ['Data Warehousing', 'ETL Processes', 'Real-time Analytics', 'Big Data Solutions'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
      color: 'from-red-500 to-rose-500',
    },
  ]

  const technologies = [
    { icon: SiReact, name: 'React', category: 'Frontend' },
    { icon: SiNextdotjs, name: 'Next.js', category: 'Framework' },
    { icon: SiNodedotjs, name: 'Node.js', category: 'Backend' },
    { icon: SiPython, name: 'Python', category: 'Backend' },
    { icon: SiTypescript, name: 'TypeScript', category: 'Language' },
    { icon: SiDocker, name: 'Docker', category: 'DevOps' },
    { icon: SiKubernetes, name: 'Kubernetes', category: 'DevOps' },
    { icon: SiAmazon, name: 'AWS', category: 'Cloud' },
    { icon: SiGooglecloud, name: 'Google Cloud', category: 'Cloud' },
    { icon: SiMongodb, name: 'MongoDB', category: 'Database' },
    { icon: SiPostgresql, name: 'PostgreSQL', category: 'Database' },
    { icon: SiTensorflow, name: 'TensorFlow', category: 'AI/ML' },
  ]

  const stats = [
    { icon: FiUser, value: '20+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: FiCode, value: '20+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' },
    { icon: FiAward, value: '5+', label: 'Industry Awards', color: 'from-green-500 to-emerald-500' },
    { icon: FiTrendingUp, value: '99%', label: 'Client Satisfaction', color: 'from-orange-500 to-red-500' },
  ]

  const portfolio = [
    {
      title: 'Process Model',
      category: 'Web Development',
      image: 'https://ui-avatars.com/api/?name=Process+Model&size=600&background=ffffff&color=6366f1&bold=true',
      description: 'Advanced process modeling and workflow management system',
    },
    {
      title: 'Zirrat Agri App',
      category: 'Mobile Development',
      image: 'https://ui-avatars.com/api/?name=Zirrat+Agri&size=600&background=ffffff&color=10b981&bold=true',
      description: 'Agricultural management mobile application for farmers',
    },
    {
      title: 'AI Kitchen Visualisation',
      category: 'AI/ML',
      image: 'https://ui-avatars.com/api/?name=AI+Kitchen&size=600&background=ffffff&color=f43f5e&bold=true',
      description: 'AI-powered kitchen design and visualization tool',
    },
  ]

  const testimonials = [
    {
      name: 'Process Model Client',
      role: 'Process Model Project',
      image: 'https://ui-avatars.com/api/?name=Process+Model&size=150&background=6366f1&color=fff&bold=true',
      content: 'The Process Model system has revolutionized our workflow management. Codestrix delivered an exceptional solution that streamlined our entire operation.',
      rating: 5,
    },
    {
      name: 'Zirrat Agri Team',
      role: 'Zirrat Agri App',
      image: 'https://ui-avatars.com/api/?name=Zirrat+Agri&size=150&background=10b981&color=fff&bold=true',
      content: 'The Zirrat Agri App has been a game-changer for our farmers. The mobile application is intuitive, reliable, and has significantly improved agricultural management.',
      rating: 5,
    },
    {
      name: 'AI Kitchen Client',
      role: 'AI Kitchen Visualisation',
      image: 'https://ui-avatars.com/api/?name=AI+Kitchen&size=150&background=f43f5e&color=fff&bold=true',
      content: 'The AI Kitchen Visualisation tool exceeded our expectations. The 3D rendering and AI-powered design features are outstanding. Highly innovative solution!',
      rating: 5,
    },
    {
      name: 'Ecommerce Owner',
      role: 'Ecommerce Platform',
      image: 'https://ui-avatars.com/api/?name=Ecommerce&size=150&background=0ea5e9&color=fff&bold=true',
      content: 'Our e-commerce platform is performing exceptionally well. The payment integration and user experience are seamless. Great work by the Codestrix team!',
      rating: 5,
    },
    {
      name: 'Inventory Manager',
      role: 'Inventory Management',
      image: 'https://ui-avatars.com/api/?name=Inventory&size=150&background=8b5cf6&color=fff&bold=true',
      content: 'The Inventory Management system has transformed how we track and manage our stock. Real-time updates and comprehensive reporting make it invaluable.',
      rating: 5,
    },
    {
      name: 'Expenses Manager User',
      role: 'Expenses Manager App',
      image: 'https://ui-avatars.com/api/?name=Expenses&size=150&background=f59e0b&color=fff&bold=true',
      content: 'The Expenses Manager app is exactly what we needed. It\'s user-friendly, feature-rich, and helps us track both personal and business expenses efficiently.',
      rating: 5,
    },
    {
      name: 'QuickMan Security',
      role: 'QuickMan Security Web',
      image: 'https://ui-avatars.com/api/?name=QuickMan&size=150&background=ef4444&color=fff&bold=true',
      content: 'QuickMan Security Web platform provides excellent security monitoring capabilities. The real-time alerts and comprehensive dashboard are top-notch.',
      rating: 5,
    },
    {
      name: 'HexaHealth Admin',
      role: 'HexaHealth Platform',
      image: 'https://ui-avatars.com/api/?name=HexaHealth&size=150&background=06b6d4&color=fff&bold=true',
      content: 'HexaHealth has improved our patient management significantly. The portal is intuitive, secure, and has enhanced our healthcare services delivery.',
      rating: 5,
    },
    {
      name: 'Riyadh University',
      role: 'Riyadh University Student App',
      image: 'https://ui-avatars.com/api/?name=Riyadh+Uni&size=150&background=6366f1&color=fff&bold=true',
      content: 'The student portal app has been a huge success. Students love the easy access to information and services. Excellent mobile experience!',
      rating: 5,
    },
  ]

  const whyChooseUs = [
    {
      icon: FiZap,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development and deployment cycles.',
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee.',
    },
    {
      icon: FiUser,
      title: 'Expert Team',
      description: 'Seasoned developers with 10+ years of industry experience.',
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs.',
    },
  ]

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center hero-gradient grid-overlay pt-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-6">
                🚀 Welcome to Codestrix
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading"
            >
              <span className="gradient-text">Transform</span> Your Business
              <br />
              With <span className="gradient-text">Cutting-Edge</span> Tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto"
            >
              We build scalable software solutions that drive innovation, enhance efficiency, 
              and deliver exceptional user experiences for businesses worldwide.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto"
            >
              With over a decade of experience, we've helped hundreds of companies transform their 
              digital presence through custom web applications, mobile solutions, cloud infrastructure, 
              and AI-powered systems that scale with their growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-primary" />
                  <span>Custom Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-primary" />
                  <span>Cloud Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-primary" />
                  <span>AI & ML Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheck className="w-5 h-5 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                Start Your Project <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn btn-secondary text-lg px-8 py-4">
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center"
            >
              <p className="text-sm text-gray-600 mb-4">Trusted by leading businesses worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                <span className="text-lg font-semibold text-gray-700">Enterprise</span>
                <span className="text-lg font-semibold text-gray-700">Startups</span>
                <span className="text-lg font-semibold text-gray-700">Agencies</span>
                <span className="text-lg font-semibold text-gray-700">SMBs</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 md:mt-16 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" />
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              <span className="gradient-text">Comprehensive</span> Software Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
              From concept to deployment, we offer end-to-end development services 
              tailored to your business needs.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert team combines cutting-edge technology with industry best practices to deliver 
              scalable, secure, and high-performance solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <FiCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={techRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="badge mb-4">Tech Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Built With <span className="gradient-text">Modern</span> Technologies
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
              We leverage the latest and most reliable technologies to build robust applications.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology stack is carefully selected to ensure optimal performance, scalability, 
              and maintainability for every project we undertake.
            </p>
          </motion.div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card card-hover text-center group"
              >
                <tech.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-600">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Why Codestrix</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Why <span className="gradient-text">Partner</span> With Us
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We don't just build software—we build partnerships that drive long-term success and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
              Explore some of our recent projects that showcase our expertise and innovation.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to excellence, innovation, and delivering solutions 
              that make a real impact on businesses and users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolio.map((project, index) => (
              <div key={index} className="card card-hover group overflow-hidden p-0">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-primary font-semibold mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{project.title}</h3>
                    <p className="text-gray-700 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary">
              View All Projects <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Don't just take our word for it—hear from the businesses we've helped transform through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your goals with innovative software solutions.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Get Started Today <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

