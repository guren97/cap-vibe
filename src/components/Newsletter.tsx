import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Modal } from './Modal';

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

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Handle form submission
    console.log({ email });
    // Show success modal
    setIsSuccessModalOpen(true);
    // Reset form
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-light text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-500 mb-8">
              Subscribe to our newsletter for the latest updates and exclusive offers
            </p>
          </motion.div>

          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit} 
            className="flex gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      >
        <div className="text-center">
          <CheckCircle className="w-12 h-12 text-gray-900 mx-auto mb-6" />
          <h3 className="text-lg font-light text-gray-900 mb-2">Subscribed!</h3>
          <p className="text-sm text-gray-500">
            Thank you for subscribing to our newsletter.
          </p>
        </div>
      </Modal>
    </section>
  );
} 