import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToWishlist?: (product: Product) => void;
  wishlistedProducts?: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProductGrid({ products, onAddToWishlist, wishlistedProducts = [] }: ProductGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <ProductCard
            product={product}
            onAddToWishlist={onAddToWishlist}
            isWishlisted={wishlistedProducts.includes(product.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 