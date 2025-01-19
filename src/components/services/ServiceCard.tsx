import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ name, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
        <div className="flex items-center justify-between">
          <span className="rounded-lg inline-flex p-3 bg-blue-900/50 text-blue-200 ring-4 ring-blue-900/20 group-hover:ring-blue-500/30 transition-all duration-300">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="neon-glow w-2 h-2 rounded-full bg-blue-500 group-hover:bg-cyan-400 transition-colors duration-300" />
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8"
          >
            <div className="w-full h-full rounded-full border-t-2 border-r-2 border-blue-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}