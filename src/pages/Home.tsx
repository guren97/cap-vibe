import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight,  ChevronLeft, ChevronRight } from 'lucide-react';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Sale } from '../components/Sale';
import { Newsletter } from '../components/Newsletter';
import { products } from '../data/products';
import { Hero } from '../components/Hero';
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

// Get unique brands and their products
const brandCollections = Object.entries(
  products.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = {
        products: [],
        image: product.image
      };
    }
    acc[product.brand].products.push(product);
    return acc;
  }, {} as Record<string, { products: typeof products; image: string }>)
).map(([brand, data]) => ({
  id: brand.toLowerCase().replace(/\s+/g, '-'),
  title: brand,
  description: `Explore our collection of ${brand} caps`,
  image: data.image,
  count: `${data.products.length} Products`
}));

 

export function Home() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Brand Collections Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-4">Shop by Brand</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our carefully curated collections from premium brands
            </p>
          </motion.div>

          <div className="relative h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {brandCollections.slice(page * 2, (page + 1) * 2).map((brand) => (
                    <motion.div
                      key={brand.id}
                      variants={itemVariants}
                      className="group relative overflow-hidden bg-white h-full"
                    >
                      {/* Image */}
                      <div className="relative h-full">
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url('${brand.image}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-light text-white">{brand.title}</h3>
                          <p className="text-gray-200">{brand.description}</p>
                          <div className="flex items-center justify-between pt-4">
                            <span className="text-sm text-gray-300">{brand.count}</span>
                            <Link
                              to={`/products?brand=${brand.id}`}
                              className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                            >
                              View Collection
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={() => paginate(-1)}
                disabled={page === 0}
                className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={() => paginate(1)}
                disabled={page >= Math.ceil(brandCollections.length / 2) - 1}
                className="p-4 rounded-full bg-white shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <Sale />

      {/* Newsletter Section */}
      <Newsletter />
 
    </motion.div>
  );
}