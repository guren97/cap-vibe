import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

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

export function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-gray-900" />
              <h1 className="text-2xl font-light text-gray-900">Order Confirmation</h1>
            </div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Back to Home
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Thank You for Your Order!
          </h2>
          
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you an email confirmation with your order details shortly.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button
              onClick={() => navigate('/orders')}
              className="w-full inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              View Order History
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 