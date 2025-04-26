import { ArrowRight, ChevronDown, Star, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Handpicked selection of the finest caps'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over Rs. 5000'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment methods'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: '3-5 business days'
  }
];

export function Hero() {
  return (
    <div className="relative bg-white">
      {/* Main Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative h-[90vh] flex items-center overflow-hidden"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 h-full flex items-center">
          <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div variants={itemVariants} className="space-y-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight leading-tight">
                    Elevate Your Style
                  </h1>
                  <div className="w-16 h-0.5 bg-gray-900"></div>
                </div>
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                  Discover our curated collection of premium caps and accessories. 
                  Each piece is carefully selected to ensure the perfect blend of comfort and style.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-900 text-base font-light text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block w-1/2 h-full">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=100&w=3000')`,
            }}
          >
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white p-8 rounded-sm hover:bg-gray-50/80 transition-colors duration-300"
              >
                <div className="p-2 bg-gray-50 rounded-sm">
                  <feature.icon className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm font-light text-gray-900 tracking-wide">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}