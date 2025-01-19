import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'team', title: 'Team' },
  { id: 'declaration', title: 'Declaration' },
  { id: 'objective', title: 'Objective' },
  { id: 'architecture', title: 'Architecture' },
  { id: 'workflow', title: 'Workflow' },
  { id: 'execution', title: 'View Demo' },
  { id: 'AWS Services', title: 'AWS Services' },
  { id: 'screenshots', title: 'Project Images' },
  { id: 'references', title: 'References' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredSection, setHoveredSection] = useState('')
  const { scrollY } = useScroll()
  const navRef = useRef<HTMLElement>(null)

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 24, 54, 0)", "rgba(10, 24, 54, 0.98)"]
  )

  const navPadding = useTransform(
    scrollY,
    [0, 100],
    ["1.5rem", "1rem"]
  )

  const navHeight = useTransform(
    scrollY,
    [0, 100],
    ["6rem", "4.5rem"]
  )

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const refreshAndScrollToTop = () => {
    window.location.reload()
    window.scrollTo(0, 0)
  }

  return (
    <motion.nav 
      ref={navRef}
      className="fixed w-full top-0 z-50 text-gray-100"
      style={{ 
        backgroundColor: navBackground, 
        height: navHeight,
        padding: navPadding
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={refreshAndScrollToTop}
          >
            <div className="relative w-10 h-10">
              <img
                src="../../public/AWS SVG ICONS/Amazon_Web_Services-Logo.wine.svg"
                alt="AWS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight whitespace-nowrap bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              CHEQUE-MATE
            </span>
          </motion.div>
          <div className="hidden lg:flex space-x-1 flex-grow justify-end items-center">
            {sections.map((section) => (
              <NavLink 
                key={section.id}
                href={`#${section.id}`}
                isActive={activeSection === section.id}
                onClick={() => scrollToSection(section.id)}
                onHoverStart={() => setHoveredSection(section.id)}
                onHoverEnd={() => setHoveredSection('')}
              >
                {section.title}
                {(hoveredSection === section.id || activeSection === section.id) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                    layoutId="navUnderline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0a1836]/95 backdrop-blur-md border-t border-blue-900/50"
          >
            <div className="container mx-auto py-2">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block px-6 py-3 text-base ${
                    activeSection === section.id 
                      ? 'text-blue-400 bg-blue-900/20' 
                      : 'text-gray-300'
                  } hover:bg-blue-900/30 hover:text-blue-400 rounded-lg mx-2 my-1`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section.id)
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute left-0 w-1 h-full bg-blue-400 rounded-r"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, children, isActive, onClick, onHoverStart, onHoverEnd }: { 
  href: string
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  return (
    <motion.a
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-blue-400' 
          : 'text-gray-300 hover:text-blue-400'
      }`}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      {isActive && (
        <motion.span
          className="absolute inset-0 bg-blue-400/10 rounded-md z-[-1]"
          layoutId="activeNavBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.a>
  )
}

