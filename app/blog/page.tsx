'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi'

export default function BlogPage() {
  const posts = [
    { 
      slug: '10-best-practices-react-development-2024',
      title: '10 Best Practices for React Development in 2024', 
      author: 'John Smith', 
      date: 'Dec 20, 2024', 
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600', 
      excerpt: 'Learn the latest React patterns and best practices...' 
    },
    { 
      slug: 'future-ai-software-development',
      title: 'The Future of AI in Software Development', 
      author: 'Sarah Johnson', 
      date: 'Dec 18, 2024', 
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600', 
      excerpt: 'How AI is transforming the way we build software...' 
    },
    { 
      slug: 'microservices-vs-monolithic',
      title: 'Microservices vs Monolithic Architecture', 
      author: 'Michael Chen', 
      date: 'Dec 15, 2024', 
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600', 
      excerpt: 'A comprehensive comparison of architectural patterns...' 
    },
    { 
      slug: 'building-scalable-cloud-infrastructure',
      title: 'Building Scalable Cloud Infrastructure', 
      author: 'Emily Davis', 
      date: 'Dec 12, 2024', 
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', 
      excerpt: 'Best practices for cloud architecture on AWS...' 
    },
    { 
      slug: 'introduction-machine-learning-developers',
      title: 'Introduction to Machine Learning for Developers', 
      author: 'David Wilson', 
      date: 'Dec 10, 2024', 
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600', 
      excerpt: 'Getting started with ML and practical applications...' 
    },
    { 
      slug: 'cybersecurity-best-practices-modern-apps',
      title: 'Cybersecurity Best Practices for Modern Apps', 
      author: 'Lisa Anderson', 
      date: 'Dec 8, 2024', 
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600', 
      excerpt: 'Essential security measures every developer should know...' 
    },
  ]

  return (
    <div className="pt-20">
      <section className="section hero-gradient grid-overlay pt-4 md:pt-8 lg:pt-12">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="badge mb-6">Our Blog</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
                <span className="gradient-text">Insights</span> & Updates
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Stay updated with the latest trends, tutorials, and industry insights.
              </p>
              <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
                Explore our collection of articles covering web development, mobile apps, cloud computing, 
                AI/ML, best practices, and industry news. Learn from our experts and stay ahead of the curve.
              </p>
              <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto">
                Our blog features in-depth guides, technical tutorials, case studies, and thought leadership 
                pieces written by our team of experienced developers. Whether you're a beginner or an expert, 
                you'll find valuable insights to enhance your skills and stay informed about the latest 
                developments in the tech world.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Web Development</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Mobile Apps</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">AI/ML</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">Cloud Solutions</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">Best Practices</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover group overflow-hidden p-0 h-full">
                  <div className="relative h-48">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1"><FiUser className="w-4 h-4" />{post.author}</span>
                      <span className="flex items-center gap-1"><FiClock className="w-4 h-4" />{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                    <span className="text-primary hover:text-primary-light inline-flex items-center gap-2 font-semibold">
                      Read More <FiArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

