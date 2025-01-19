'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import {Mail, ArrowRight, ChevronDown, ChevronUp, Globe } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [language, setLanguage] = useState('English')
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  const footerSections = [
    { title: 'Products', links: ['Features', 'Integrations', 'Pricing', 'FAQ'] },
    { title: 'Resources', links: ['Blog', 'Newsletter', 'Events', 'Help Center'] },
    { title: 'Legal', links: ['Terms', 'Privacy', 'Cookies', 'Licenses'] },
  ]

 

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer ref={footerRef} className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <motion.h2 
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Stay Connected
            </motion.h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Subscribe to our newsletter for the latest updates, exclusive offers, and tech insights delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 mt-2 flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Thanks for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <motion.h3
                className="text-xl font-semibold mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
                <motion.span
                  animate={{ rotate: activeSection === section.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </motion.h3>
              <AnimatePresence>
                {(activeSection === section.title || window.innerWidth >= 768) && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {section.links.map((link) => (
                      <motion.li
                        key={link}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.hr 
          variants={itemVariants}
          className="my-12 border-gray-800"
        />
        <motion.div
          variants={itemVariants} 
          className="flex flex-col sm:flex-row justify-between items-center"
        >
          <motion.p
            className="text-gray-400 text-sm mb-4 sm:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            © 2025 Cheque-Mate. All rights reserved.
          </motion.p>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                {language}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute bottom-full left-0 mb-2 w-40 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                {['English', 'Español', 'Français', '日本語'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-200"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <ChevronUp className="ml-1 h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer