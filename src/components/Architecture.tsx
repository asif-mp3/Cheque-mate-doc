'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react'

const architectureSteps = [
  {
    title: '1. Frontend Layer',
    description: 'User interface for scanning and uploading cheque images.',
    components: ['React', 'AWS Hosting', 'Responsive Design'],
    color: '#FF6B6B',
    icon: '🖥️'
  },
  {
    title: '2. Storage Layer',
    description: 'Secure storage for cheque images with encryption.',
    components: ['Amazon S3', 'Encryption', 'Access Controls'],
    color: '#4ECDC4',
    icon: '🗄️'
  },
  {
    title: '3. Processing Layer',
    description: 'Serverless pipeline for image analysis and data extraction.',
    components: ['API Gateway', 'Lambda', 'Amazon Textract'],
    color: '#45B7D1',
    icon: '⚙️'
  },
  {
    title: '4. Database Layer',
    description: 'Structured storage for extracted cheque data.',
    components: ['MySQL', 'Data Indexing', 'Backup'],
    color: '#96CEB4',
    icon: '🏦'
  },
  {
    title: '5. Monitoring & Notifications',
    description: 'Real-time monitoring and alert system.',
    components: ['CloudWatch', 'SNS', 'Dashboards'],
    color: '#FFEEAD',
    icon: '📊'
  },
  {
    title: '6. Security & Authentication',
    description: 'Robust security with proper access controls.',
    components: ['Cognito', 'IAM', 'MFA'],
    color: '#D4A5A5',
    icon: '🔒'
  }
]

export default function EnhancedArchitecture() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5))
  }

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 2) % architectureSteps.length)
  }

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 2 + architectureSteps.length) % architectureSteps.length)
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black overflow-hidden" id='architecture'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={cardVariants}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00fff2] to-blue-500 mb-4">
            System Architecture
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive overview of our AWS-based cheque processing system
          </p>
        </motion.div>

        {/* Marquee Cards */}
        <div className="relative mb-20">
          <motion.div
            variants={cardVariants}
            className="flex justify-center items-center"
          >
            <button onClick={prevCard} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors mr-4">
              <ChevronLeft size={24} />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCardIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex space-x-4"
              >
                {[0, 1].map((offset) => {
                  const index = (currentCardIndex + offset) % architectureSteps.length;
                  const step = architectureSteps[index];
                  return (
                    <div
                      key={step.title}
                      className="w-[calc(50%-0.5rem)] rounded-xl p-6 transition-all duration-300 bg-gradient-to-br hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                        boxShadow: `0 4px 20px ${step.color}30`,
                        height: '200px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{step.icon}</span>
                        <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-4 flex-grow">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.components.map(component => (
                          <span
                            key={component}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: `${step.color}40`,
                              color: 'white'
                            }}
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
            <button onClick={nextCard} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors ml-4">
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div variants={cardVariants} className="relative">
          <div className="rounded-xl overflow-hidden bg-black/30 backdrop-blur-sm border border-gray-800 shadow-2xl">
            {/* Control Panel */}
            <div className="sticky top-0 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-10">
              <div className="flex items-center justify-end space-x-2 p-4">
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg bg-gray-900/80 text-white hover:bg-gray-800/80 transition-colors"
                  disabled={zoomLevel <= 0.5}
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg bg-gray-900/80 text-white hover:bg-gray-800/80 transition-colors"
                  disabled={zoomLevel >= 2}
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 transition-colors"
                >
                  View Full Screen
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="overflow-auto p-8" style={{ maxHeight: '70vh' }}>
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top left',
                  transition: 'transform 0.3s ease'
                }}
              >
                <img
                  src="/aws_arch.jpg"
                  alt="AWS Architecture Diagram"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-7xl">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-12 right-0 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src="/aws_arch.jpg"
                  alt="AWS Architecture Diagram"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full filter blur-3xl" />
    </section>
  )
}

