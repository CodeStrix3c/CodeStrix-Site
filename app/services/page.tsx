'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FiCode, FiSmartphone, FiCloud, FiCpu, FiDatabase, FiShield,
  FiLayout, FiSearch, FiSettings, FiTrendingUp, FiArrowRight, FiCheck
} from 'react-icons/fi'

export default function ServicesPage() {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Create powerful, scalable web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Custom Web Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
        'Responsive Design',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that engage users and deliver seamless experiences.',
      features: [
        'iOS & Android Native Apps',
        'Cross-Platform Development',
        'React Native Applications',
        'Flutter Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Deploy, manage, and scale your infrastructure with leading cloud platforms and DevOps best practices.',
      features: [
        'Cloud Architecture Design',
        'AWS & Azure Services',
        'Cloud Migration',
        'DevOps & CI/CD',
        'Serverless Applications',
        'Container Orchestration',
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain valuable insights.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Deep Learning Models',
        'Recommendation Systems',
        'Chatbots & Virtual Assistants',
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Keras'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiDatabase,
      title: 'Data Engineering',
      description: 'Transform raw data into actionable insights with robust data pipelines and analytics solutions.',
      features: [
        'Data Warehousing',
        'ETL Pipeline Development',
        'Real-time Analytics',
        'Big Data Processing',
        'Data Visualization',
        'Business Intelligence',
      ],
      technologies: ['Apache Spark', 'Airflow', 'Snowflake', 'Tableau', 'Power BI'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and compliance management.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Compliance Management',
        'Threat Monitoring',
        'Incident Response',
      ],
      technologies: ['OWASP', 'Nessus', 'Burp Suite', 'Metasploit', 'SIEM'],
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive interfaces that delight users and drive engagement.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Interaction Design',
        'Usability Testing',
        'Design Systems',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: FiSearch,
      title: 'SEO & Digital Marketing',
      description: 'Improve your online visibility and drive traffic with data-driven SEO and marketing strategies.',
      features: [
        'Technical SEO',
        'Content Strategy',
        'Link Building',
        'Analytics & Reporting',
        'Conversion Optimization',
        'Social Media Marketing',
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'HubSpot'],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, challenges, and requirements.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates a detailed project roadmap with milestones and deliverables.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We design intuitive interfaces and user experiences that align with your brand.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers build robust, scalable solutions using best practices and modern tech.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures quality, performance, and security of your application.',
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support and maintenance.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge mb-6">Our Services</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                <span className="gradient-text">Comprehensive</span> Software
                <br />
                Development Services
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                From concept to deployment, we deliver end-to-end solutions that drive innovation 
                and business growth.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                Our expert team specializes in web development, mobile apps, cloud infrastructure, 
                AI/ML solutions, and enterprise software. We combine cutting-edge technology with 
                proven methodologies to deliver results that exceed expectations.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                Whether you need a responsive website, native mobile application, cloud migration, 
                or AI integration, we have the expertise to bring your vision to life. Our agile 
                development process ensures timely delivery while maintaining the highest quality standards.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <FiCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge mb-4">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Our proven development process ensures successful project delivery from start to finish.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured yet flexible approach that adapts to your needs while maintaining 
              the highest standards of quality and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover relative overflow-hidden bg-white border-2 border-gray-200 hover:border-primary/30"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-full" />
                <div className="text-6xl font-bold text-primary/15 absolute -top-2 -right-2 font-heading select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-heading">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create a solution that exceeds your expectations.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Get a Free Consultation <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

