'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function AlertBanner() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.5 
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.3 
      }
    }
  }

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-l-4 border-red-500 p-6 rounded-lg shadow-lg mb-8 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-start">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <AlertTriangle className="h-8 w-8 text-red-500 mt-0.5 flex-shrink-0" />
            </motion.div>
            <div className="ml-4 flex-grow">
              <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-2">
                Important Notice:
              </h3>
              <motion.p 
                className="text-lg text-red-700 dark:text-red-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                This website serves as documentation of our AWS-based cheque processing system. Due to AWS account closure and hosting limitations, we've created this comprehensive overview to share the project details.
              </motion.p>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-lg text-red-700 dark:text-red-300 leading-relaxed">
                      Our team has meticulously documented the architecture, implementation details, and key features of the system. While the live demo is no longer available, this documentation aims to provide a thorough understanding of the project's scope and capabilities.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-4 flex items-center justify-between">
                <motion.button
                  className="text-red-600 dark:text-red-400 font-semibold text-lg flex items-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md px-2 py-1"
                  onClick={toggleExpand}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="mr-1 h-5 w-5" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-1 h-5 w-5" />
                      Learn More
                    </>
                  )}
                </motion.button>
                <motion.div
                  className="text-red-600 dark:text-red-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Last updated: {new Date().toLocaleDateString()}
                </motion.div>
              </div>
            </div>
          </div>
          <motion.button
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 dark:hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full p-1"
            onClick={handleDismiss}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

