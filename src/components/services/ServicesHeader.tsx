import { motion } from 'framer-motion';

export default function ServicesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
      </div>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
        AWS Services Used
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
        Our cheque processing system leverages these powerful AWS services to ensure
        <span className="text-cyan-400"> security</span>,
        <span className="text-blue-400"> scalability</span>, and
        <span className="text-indigo-400"> efficiency</span>.
      </p>
    </motion.div>
  );
}