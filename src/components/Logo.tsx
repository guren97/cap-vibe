import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-10 h-10 mr-3"
      >
        {/* Cap Shape */}
        <div className="absolute inset-0 bg-white rounded-lg transform rotate-3" />
        <div className="absolute inset-0 bg-white rounded-lg transform -rotate-3" />
        <div className="absolute inset-0 bg-white rounded-lg" />
        
        {/* Vibe Wave */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 relative">
            <motion.div
              animate={{
                y: [0, -2, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-gray-900 text-sm font-light">V</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col"
      >
        <span className="text-xl font-light tracking-tight text-white">CapVibe</span>
        <span className="text-xs text-gray-400 tracking-wider">STYLE. COMFORT. VIBE.</span>
      </motion.div>
    </Link>
  );
} 