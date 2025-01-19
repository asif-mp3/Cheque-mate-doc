'use client'

import { motion } from 'framer-motion'
import { MouseEvent, useRef, useEffect } from 'react'

interface Service {
  name: string
  url: string
  description: string
  icon: string
  color: string
  gradient: [string, string]
}

const services: Service[] = [
  { 
    name: 'AWS Amplify', 
    url: 'https://docs.amplify.aws/',
    description: 'Hosting and continuous deployment with automated CI/CD pipelines, supporting multiple environments and branch-based deployments.',
    icon: '/AWS SVG ICONS/Amplify.svg',
    color: '#FF9900',
    gradient: ['#FF9900', '#FFC400']
  },
  { 
    name: 'Amazon S3', 
    url: 'https://docs.aws.amazon.com/s3/',
    description: 'Secure, durable storage for cheque images with versioning, lifecycle policies, and encrypted data transfer.',
    icon: '/AWS SVG ICONS/Simple Storage Service.svg',
    color: '#569A31',
    gradient: ['#569A31', '#7BC043']
  },
  { 
    name: 'AWS Lambda', 
    url: 'https://docs.aws.amazon.com/lambda/',
    description: 'Serverless compute for efficient, scalable processing with automatic scaling and pay-per-use pricing.',
    icon: '/AWS SVG ICONS/Lambda.svg',
    color: '#FF9900',
    gradient: ['#FF9900', '#FFB444']
  },
  { 
    name: 'Amazon Textract', 
    url: 'https://docs.aws.amazon.com/textract/',
    description: 'AI-powered text extraction service that automatically processes and analyzes cheque data with high accuracy.',
    icon: '/AWS SVG ICONS/Textract.svg',
    color: '#00A4EF',
    gradient: ['#00A4EF', '#00C3FF']
  },
  { 
    name: 'Amazon RDS', 
    url: 'https://docs.aws.amazon.com/rds/',
    description: 'Managed relational database service for structured data with automated backups and high availability.',
    icon: '/AWS SVG ICONS/RDS.svg',
    color: '#527FFF',
    gradient: ['#527FFF', '#7B9FFF']
  },
  { 
    name: 'Amazon SNS', 
    url: 'https://docs.aws.amazon.com/sns/',
    description: 'Fully managed pub/sub messaging for microservices and serverless applications with real-time notifications.',
    icon: '/AWS SVG ICONS/Simple Notification Service.svg',
    color: '#FF4F8B',
    gradient: ['#FF4F8B', '#FF73A3']
  },
  { 
    name: 'Amazon CloudWatch', 
    url: 'https://docs.aws.amazon.com/cloudwatch/',
    description: 'Comprehensive monitoring solution with custom dashboards, automated actions, and detailed insights.',
    icon: '/AWS SVG ICONS/CloudWatch.svg',
    color: '#3F8624',
    gradient: ['#3F8624', '#4CAF50']
  },
  { 
    name: 'Amazon Cognito', 
    url: 'https://docs.aws.amazon.com/cognito/',
    description: 'Secure user authentication and authorization with support for social identity providers and MFA.',
    icon: '/AWS SVG ICONS/Cognito.svg',
    color: '#DD344C',
    gradient: ['#DD344C', '#FF4D6A']
  },
  { 
    name: 'API Gateway', 
    url: 'https://docs.aws.amazon.com/apigateway/',
    description: 'Fully managed service for creating, publishing, and securing RESTful APIs at any scale.',
    icon: '/AWS SVG ICONS/API Gateway.svg',
    color: '#232F3E',
    gradient: ['#00A4EF', '#00C3FF']
  },
]

const ServiceCard = ({ name, description, icon, color, gradient, url }: Service) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e
    const { left, top } = currentTarget.getBoundingClientRect()
    const x = clientX - left
    const y = clientY - top
    currentTarget.style.setProperty('--mouse-x', `${x}px`)
    currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id='AWS Services' className="flex items-center justify-center">
      <motion.div
        onMouseMove={handleMouseMove}
        className="relative group rounded-xl p-6 bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-500"
        style={{
          width: '300px',
          height: '300px',
          flexShrink: 0,
          transformStyle: 'preserve-3d',
          '--mouse-x': '0px',
          '--mouse-y': '0px',
        } as React.CSSProperties}
        whileHover={{ 
          scale: 1.05,
          rotateX: 2,
          rotateY: 2,
          boxShadow: `0 0 30px ${color}33`
        }}
      >
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(
              650px circle at var(--mouse-x) var(--mouse-y),
              ${gradient[0]}15,
              ${gradient[1]}10,
              transparent 80%
            )`
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl z-0" />
        
        <div className="relative z-10 h-full flex flex-col">
          <motion.div 
            className="flex items-center space-x-4 mb-4"
            initial={false}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${gradient[0]}22, ${gradient[1]}11)`,
                border: `1px solid ${color}44`
              }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    `linear-gradient(0deg, ${gradient[0]}22, ${gradient[1]}11)`,
                    `linear-gradient(360deg, ${gradient[0]}22, ${gradient[1]}11)`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img
                src={icon || "/placeholder.svg"}
                alt={name}
                className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-500 relative z-10"
              />
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#00fff2] transition-colors duration-500">
              {name}
            </h3>
          </motion.div>
          
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 flex-grow">
            {description}
          </p>

          <motion.a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center text-[#00fff2] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 cursor-pointer pb-6"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium">Learn more</span>
            
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>

          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${gradient[0]}, ${gradient[1]}, transparent)`
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default function ServicesMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const scrollWidth = marquee.scrollWidth
    const clientWidth = marquee.clientWidth

    const animate = () => {
      if (!marquee) return
      if (marquee.scrollLeft >= scrollWidth - clientWidth) {
        marquee.scrollLeft = 0
      } else {
        marquee.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 100,
              }
            }}
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
              AWS Services Integration
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Our solution leverages powerful AWS services to deliver a robust, scalable, and secure cheque processing system
          </motion.p>
        </div>

        <div 
          ref={marqueeRef}
          className="flex space-x-8 pt-6 pb-4 overflow-x-hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {[...services, ...services].map((service, index) => (
            <ServiceCard key={`${service.name}-${index}`} {...service} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div 
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #00fff2, transparent)',
          }}
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <motion.div 
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #00fff2, transparent)',
          }}
          animate={{
            backgroundPosition: ["-200% 0", "200% 0"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  )
}

