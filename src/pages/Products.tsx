import { useState, useMemo, useEffect } from 'react';
import { Search,   ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { Product } from '../types';

const ITEMS_PER_PAGE = 12;

// Get unique brands from products
const brands = ['All', ...Array.from(new Set(products.map(product => product.brand)))];

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
    transition: {
      duration: 0.5
    }
  }
};

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const [wishlistedProducts, setWishlistedProducts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle brand filter from URL
  useEffect(() => {
    const brandFromUrl = searchParams.get('brand');
    if (brandFromUrl) {
      const decodedBrand = decodeURIComponent(brandFromUrl);
      if (brands.includes(decodedBrand)) {
        setSelectedBrand(decodedBrand);
      }
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply brand filter
    if (selectedBrand !== 'All') {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedBrand, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedBrand, sortBy]);

  const handleAddToWishlist = (product: Product) => {
    setWishlistedProducts((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    if (brand === 'All') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', encodeURIComponent(brand));
    }
    setSearchParams(searchParams);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
          {selectedBrand === 'All' ? 'All Products' : `${selectedBrand} Collection`}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div 
            variants={itemVariants}
            className="relative flex-1"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border-b border-gray-200 focus:border-primary-500 focus:outline-none bg-transparent text-sm"
            />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            <div className="relative">
              <select
                value={selectedBrand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2 border-b border-gray-200 focus:border-primary-500 focus:outline-none bg-transparent text-sm"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
             </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none pl-4 pr-8 py-2 border-b border-gray-200 focus:border-primary-500 focus:outline-none bg-transparent text-sm"
              >
                <option value="name">Name</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
               </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mb-12"
      >
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <motion.button
              key={brand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBrandChange(brand)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedBrand === brand
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {brand}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {paginatedProducts.length === 0 ? (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-sm">No products found matching your criteria.</p>
          </motion.div>
        ) : (
          <motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductGrid
              products={paginatedProducts}
              onAddToWishlist={handleAddToWishlist}
              wishlistedProducts={wishlistedProducts}
            />
            
            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center gap-2 mt-12"
              >
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 