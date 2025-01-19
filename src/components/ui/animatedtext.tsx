import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface AnimatedTextProps {
  text: string
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverStart = () => {
    setIsHovered(true)
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: {
        duration: 0.3,
        staggerChildren: 0.03,
      },
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    })
  }

  return (
    <motion.span
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="inline-block cursor-pointer"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          animate={controls}
          initial={{ opacity: 1, y: 0 }}
          className="inline-block"
          style={{
            color: isHovered
              ? `hsl(${Math.random() * 360}, 100%, 50%)`
              : 'inherit',
            textShadow: isHovered
              ? '0 0 8px rgba(255, 255, 255, 0.8)'
              : 'none',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

