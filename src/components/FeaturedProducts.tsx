import { motion } from 'framer-motion';
import { ProductGrid } from './ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4).map(product => ({
    ...product,
    category: 'caps', // Default category since it's not in the data
    sizes: ['S', 'M', 'L'] // Default sizes since they're not in the data
  }));

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-500">Discover our most popular styles</p>
        </motion.div>
        <ProductGrid products={featuredProducts as Product[]} />
      </div>
    </section>
  );
} 