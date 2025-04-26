import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { getBestSellers } from '../store';

export function BestSellers() {
  const bestSellers = getBestSellers();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular caps, loved by customers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
} 