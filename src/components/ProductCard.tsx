import React from 'react';
import { Heart, ShoppingCart, Star, Tag, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useStore } from '../store';

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (product: Product) => void;
  isWishlisted?: boolean;
}

export function ProductCard({ product, onAddToWishlist, isWishlisted = false }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);

  const formatPrice = (price: number) => {
    return `Rs ${new Intl.NumberFormat('en-IN').format(price)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white"
    >
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.discount.percentage}% OFF
          </div>
        )}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          onClick={() => onAddToWishlist?.(product)}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors ${
            isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className="w-4 h-4" />
        </motion.button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-2">
          <Tag className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-600">{product.brand}</span>
        </div>

        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.discount && (
              <span className="text-xs text-gray-500 line-through">
                {formatPrice(product.discount.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Package className="w-3.5 h-3.5 text-gray-400" />
            <span className={`text-xs ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
              {product.stock > 10 ? 'In Stock' : `Only ${product.stock}`}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {size}
              </span>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="flex items-center space-x-1.5 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}