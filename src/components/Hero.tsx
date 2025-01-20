"use client"

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Particle animation component
const Particle = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute h-1 w-1 bg-blue-400/40 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -40],
        x: [-20, 20],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div id='hero' className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* VITCC Logo in top right */}
      <img
        src="/vitcc.png"
        alt="VITCC Logo"
        className="absolute top-4 right-4 w-[170px] h-auto z-20 object-contain"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
          </motion.div>

          <motion.h2
            className="text-5xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative">
              <img
                src="/AWS SVG ICONS/Amazon_Web_Services-Logo.wine.svg"
                alt="AWS Logo"
                className="w-20 h-full object-cover"
              />
              Cheque -{" "}
              <span className="text-blue-600 relative">
                Mate
                <motion.span
                  className="absolute -inset-1 bg-blue-400/20 blur-lg"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A Cheque Processing System developed by us using AWS services by utilizing advanced cloud-based solutions to ensure automation, security, and efficiency in cheque processing.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              className="group relative bg-[#a370f0] text-white font-inherit py-[0.35em] pl-[1.2em] pr-[3.3em] text-[17px] font-medium rounded-[0.9em] border-none tracking-[0.05em] flex items-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden h-[2.8em] cursor-pointer "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1fdlLVX3cYfUrizOzdb3WAbJGdtEWnS6t/view?usp=drive_link', '_blank')}
            >
              View Documentation
              <span className="absolute right-[0.3em] bg-white flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] transition-all duration-300 group-hover:w-[calc(100%-0.6em)]">
                <svg
                  className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </motion.button>
          </motion.div>

          <motion.button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
            <span className="sr-only">Scroll for more</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

