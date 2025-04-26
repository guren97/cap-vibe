import { motion } from 'framer-motion';
import { Award, Heart, Users, Package, Clock, Shield } from 'lucide-react';

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
    icon: Award,
    title: 'Premium Quality',
    description: 'Each cap is crafted with the finest materials, ensuring durability and comfort.'
  },
  {
    icon: Package,
    title: 'Curated Selection',
    description: 'Carefully selected designs from the world\'s most respected brands.'
  },
  {
    icon: Shield,
    title: 'Authenticity Guaranteed',
    description: 'Every product is 100% authentic and sourced directly from authorized dealers.'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping to get your caps to you as soon as possible.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Dedicated to providing exceptional service and satisfaction to our customers.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Part of a global community of cap enthusiasts and collectors.'
  }
];

export function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-light text-gray-900 mb-6">About Cap Vibe</h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Founded in 2023, Cap Vibe emerged from a passion for quality headwear and a vision to create a destination for cap enthusiasts. We believe that a great cap is more than just an accessory – it's a statement of style, comfort, and individuality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">
              At Cap Vibe, we're committed to bringing you the finest collection of caps from around the world. Our mission is to provide a seamless shopping experience while maintaining the highest standards of quality and authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto text-gray-900 mb-4" />
                <h3 className="text-lg font-light text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Values</h2>
            <p className="text-gray-500 leading-relaxed">
              We believe in transparency, quality, and customer satisfaction. Every decision we make is guided by these core values, ensuring that we maintain the trust and loyalty of our customers.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}