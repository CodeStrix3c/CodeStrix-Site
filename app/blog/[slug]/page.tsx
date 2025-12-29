import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiClock, FiUser, FiShare2, FiTag } from 'react-icons/fi'

// Blog posts data - in a real app, this would come from a CMS or database
const blogPosts: { [key: string]: any } = {
  '10-best-practices-react-development-2024': {
    title: '10 Best Practices for React Development in 2024',
    author: 'John Smith',
    date: 'Dec 20, 2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200',
    excerpt: 'Learn the latest React patterns and best practices...',
    category: 'Web Development',
    content: `
      <p>React continues to evolve, and staying up-to-date with best practices is crucial for building maintainable and performant applications. In this comprehensive guide, we'll explore the top 10 best practices for React development in 2024.</p>
      
      <h2>1. Use Functional Components with Hooks</h2>
      <p>Functional components with hooks have become the standard in React development. They offer better performance, cleaner code, and easier testing compared to class components.</p>
      
      <h2>2. Implement Code Splitting</h2>
      <p>Use React.lazy() and Suspense to split your code into smaller chunks. This improves initial load time and overall performance of your application.</p>
      
      <h2>3. Optimize Re-renders</h2>
      <p>Use React.memo(), useMemo(), and useCallback() strategically to prevent unnecessary re-renders. However, don't overuse them - profile first, optimize second.</p>
      
      <h2>4. Follow Component Composition</h2>
      <p>Prefer composition over inheritance. Break down complex components into smaller, reusable pieces that can be easily tested and maintained.</p>
      
      <h2>5. Use TypeScript</h2>
      <p>TypeScript provides type safety, better IDE support, and helps catch errors early in development. It's become essential for large-scale React applications.</p>
      
      <h2>6. Implement Proper Error Boundaries</h2>
      <p>Error boundaries catch JavaScript errors anywhere in your component tree and display a fallback UI instead of crashing the entire app.</p>
      
      <h2>7. Use Custom Hooks for Reusable Logic</h2>
      <p>Extract component logic into custom hooks to share stateful logic between components. This promotes code reuse and separation of concerns.</p>
      
      <h2>8. Optimize Images and Assets</h2>
      <p>Use Next.js Image component or similar solutions to optimize images. Lazy load images and use appropriate formats like WebP for better performance.</p>
      
      <h2>9. Write Accessible Code</h2>
      <p>Always consider accessibility. Use semantic HTML, proper ARIA labels, keyboard navigation, and ensure your app is usable by everyone.</p>
      
      <h2>10. Test Your Components</h2>
      <p>Write unit tests for your components using React Testing Library. Focus on testing user behavior rather than implementation details.</p>
      
      <p>By following these best practices, you'll build more maintainable, performant, and scalable React applications. Stay updated with the React ecosystem and continue learning!</p>
    `,
  },
  'future-ai-software-development': {
    title: 'The Future of AI in Software Development',
    author: 'Sarah Johnson',
    date: 'Dec 18, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    excerpt: 'How AI is transforming the way we build software...',
    category: 'AI/ML',
    content: `
      <p>Artificial Intelligence is revolutionizing software development, from code generation to testing and deployment. Let's explore how AI is shaping the future of our industry.</p>
      
      <h2>AI-Powered Code Generation</h2>
      <p>Tools like GitHub Copilot and ChatGPT are changing how developers write code. AI assistants can generate boilerplate code, suggest optimizations, and even write entire functions based on natural language descriptions.</p>
      
      <h2>Automated Testing and QA</h2>
      <p>AI can automatically generate test cases, identify edge cases, and even perform visual regression testing. This significantly reduces the time spent on quality assurance.</p>
      
      <h2>Intelligent Code Review</h2>
      <p>AI-powered code review tools can catch bugs, suggest improvements, and ensure code quality standards are met before human reviewers even see the code.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Machine learning models can predict potential bugs, performance issues, and even estimate project timelines with remarkable accuracy.</p>
      
      <h2>The Human-AI Partnership</h2>
      <p>The future isn't about AI replacing developers, but rather augmenting their capabilities. Developers will focus on creative problem-solving while AI handles repetitive tasks.</p>
    `,
  },
  'microservices-vs-monolithic': {
    title: 'Microservices vs Monolithic Architecture',
    author: 'Michael Chen',
    date: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    excerpt: 'A comprehensive comparison of architectural patterns...',
    category: 'Architecture',
    content: `
      <p>Choosing between microservices and monolithic architecture is one of the most critical decisions in software design. Each approach has its strengths and weaknesses.</p>
      
      <h2>Monolithic Architecture</h2>
      <p>A monolithic application is built as a single, unified unit. All components are tightly coupled and deployed together. This approach is simpler to develop, test, and deploy initially.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Simpler development and deployment</li>
        <li>Easier debugging and testing</li>
        <li>Better performance for small applications</li>
        <li>Lower initial complexity</li>
      </ul>
      
      <h2>Microservices Architecture</h2>
      <p>Microservices break down applications into small, independent services that communicate over well-defined APIs. Each service can be developed, deployed, and scaled independently.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Independent scaling and deployment</li>
        <li>Technology diversity</li>
        <li>Fault isolation</li>
        <li>Team autonomy</li>
      </ul>
      
      <h2>When to Choose What?</h2>
      <p>Start with a monolith if you're building an MVP or small application. Consider microservices when you have multiple teams, need independent scaling, or have complex domain boundaries.</p>
    `,
  },
  'building-scalable-cloud-infrastructure': {
    title: 'Building Scalable Cloud Infrastructure',
    author: 'Emily Davis',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    excerpt: 'Best practices for cloud architecture on AWS...',
    category: 'Cloud',
    content: `
      <p>Building scalable cloud infrastructure requires careful planning and following best practices. Here's how to design systems that can grow with your business.</p>
      
      <h2>Design for Scale</h2>
      <p>Design your infrastructure to handle growth from day one. Use auto-scaling groups, load balancers, and distributed systems to ensure your application can handle increased load.</p>
      
      <h2>Use Managed Services</h2>
      <p>Leverage AWS managed services like RDS, ElastiCache, and S3. These services handle scaling, backups, and maintenance, allowing you to focus on your application logic.</p>
      
      <h2>Implement Caching Strategies</h2>
      <p>Use CDN for static assets, Redis for session storage, and application-level caching to reduce database load and improve response times.</p>
      
      <h2>Database Optimization</h2>
      <p>Use read replicas for scaling read operations, implement connection pooling, and consider database sharding for very large datasets.</p>
      
      <h2>Monitor and Optimize</h2>
      <p>Continuously monitor your infrastructure using CloudWatch, set up alerts, and regularly review and optimize your resource usage to control costs.</p>
    `,
  },
  'introduction-machine-learning-developers': {
    title: 'Introduction to Machine Learning for Developers',
    author: 'David Wilson',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200',
    excerpt: 'Getting started with ML and practical applications...',
    category: 'AI/ML',
    content: `
      <p>Machine Learning is no longer just for data scientists. Modern developers can leverage ML to build intelligent applications. Here's your guide to getting started.</p>
      
      <h2>Understanding the Basics</h2>
      <p>Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It's about finding patterns in data.</p>
      
      <h2>Types of Machine Learning</h2>
      <p>There are three main types: Supervised Learning (labeled data), Unsupervised Learning (finding patterns), and Reinforcement Learning (learning through rewards).</p>
      
      <h2>Getting Started with Python</h2>
      <p>Python is the language of choice for ML. Libraries like scikit-learn, TensorFlow, and PyTorch make it accessible for developers to build ML models.</p>
      
      <h2>Practical Applications</h2>
      <p>ML can be used for recommendation systems, image recognition, natural language processing, fraud detection, and much more in web and mobile applications.</p>
      
      <h2>Next Steps</h2>
      <p>Start with simple projects like sentiment analysis or image classification. Use pre-trained models from TensorFlow Hub or Hugging Face to get started quickly.</p>
    `,
  },
  'cybersecurity-best-practices-modern-apps': {
    title: 'Cybersecurity Best Practices for Modern Apps',
    author: 'Lisa Anderson',
    date: 'Dec 8, 2024',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200',
    excerpt: 'Essential security measures every developer should know...',
    category: 'Security',
    content: `
      <p>Security should be a priority from the first line of code. Here are essential cybersecurity practices every developer should implement in their applications.</p>
      
      <h2>1. Input Validation and Sanitization</h2>
      <p>Always validate and sanitize user inputs on both client and server side. Never trust user input, and use parameterized queries to prevent SQL injection.</p>
      
      <h2>2. Authentication and Authorization</h2>
      <p>Implement strong authentication using OAuth 2.0 or JWT tokens. Use multi-factor authentication for sensitive operations and follow the principle of least privilege.</p>
      
      <h2>3. HTTPS Everywhere</h2>
      <p>Always use HTTPS to encrypt data in transit. Never send sensitive information over unencrypted connections.</p>
      
      <h2>4. Secure Data Storage</h2>
      <p>Encrypt sensitive data at rest. Hash passwords using bcrypt or Argon2, and never store plain-text passwords or API keys in your codebase.</p>
      
      <h2>5. Regular Security Updates</h2>
      <p>Keep all dependencies up to date. Use tools like Dependabot or Snyk to identify and fix vulnerabilities in your dependencies.</p>
      
      <h2>6. Security Headers</h2>
      <p>Implement security headers like CSP, X-Frame-Options, and HSTS to protect against common attacks like XSS and clickjacking.</p>
      
      <h2>7. Logging and Monitoring</h2>
      <p>Implement comprehensive logging and monitoring to detect suspicious activities. Set up alerts for unusual patterns or potential security breaches.</p>
    `,
  },
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section hero-gradient grid-overlay">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors mb-8">
                <FiArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="badge mb-4">{post.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <FiUser className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none card"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="card sticky top-24">
                  <h3 className="text-xl font-bold mb-4 font-heading">Share This Post</h3>
                  <div className="flex flex-col gap-3">
                    <button className="btn btn-secondary w-full justify-center">
                      <FiShare2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4 font-heading">Category</h3>
                    <div className="flex items-center gap-2">
                      <FiTag className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{post.category}</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-heading">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, relatedPost]) => (
                  <Link key={key} href={`/blog/${key}`} className="card card-hover group">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 font-heading group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

