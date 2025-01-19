import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

interface AvatarImageProps {
  src: string
  alt?: string
  className?: string
  onError?: () => void
}

interface AvatarFallbackProps {
  children?: React.ReactNode
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
}

export const Avatar: React.FC<AvatarProps> = ({ 
  size = 'md', 
  className = '',
  children
}) => {
  const containerClasses = `relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`

  return (
    <motion.div
      className={containerClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500 opacity-0"
        whileHover={{ opacity: 0.1 }}
      />
    </motion.div>
  )
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ 
  src, 
  alt = 'User avatar',
  className = '',
  onError 
}) => {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      onError={onError}
    />
  )
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ 
  children,
  className = '' 
}) => {
  if (children) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold text-lg ${className}`}>
        {typeof children === 'string' ? children.slice(0, 2).toUpperCase() : children}
      </div>
    )
  }

  return (
    <div className={`w-full h-full flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 ${className}`}>
      <User className="w-1/2 h-1/2" />
    </div>
  )
}

export default Avatar

