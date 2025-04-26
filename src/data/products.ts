import adidasNavyBlue from '../assets/images/products/adidas-navy-blue.webp';
import adidasGreen from '../assets/images/products/adidas-green.webp';
import adidasBlack from '../assets/images/products/adidas-black.webp';
import poloBeige from '../assets/images/products/polo-beige.webp';
import poloBlack from '../assets/images/products/polo-black.webp';
import nySetOf6 from '../assets/images/products/ny-set-of-6.webp';
import usaRed from '../assets/images/products/usa-red.webp';
import usaWhite from '../assets/images/products/usa-white.webp';
import usaBlack from '../assets/images/products/usa-black.webp';
import usaBlue from '../assets/images/products/usa-blue.webp';
import giordanoRed from '../assets/images/products/giordano-red.webp';
import adidasTraining from '../assets/images/products/adidas-training.webp';
import comeGrayRey from '../assets/images/products/come-gray-rey.webp';
import comeRedBeige from '../assets/images/products/come-red-beige.webp';
import comeBeigeGray from '../assets/images/products/come-beige-gray.webp';
import comeGreenYellow from '../assets/images/products/come-green-yellow.webp';
import comeYellowGreen from '../assets/images/products/come-yellow-green.webp';
import giordanoBlack from '../assets/images/products/giordano-black.webp';
import giordanoBeige from '../assets/images/products/giordano-beige.webp';
import nyBeige from '../assets/images/products/ny-beige.webp';
import nyRed from '../assets/images/products/ny-red.webp';
import nyBlue from '../assets/images/products/ny-blue.webp';
import nyGray from '../assets/images/products/ny-gray.webp';
import regattaClassicBlue from '../assets/images/products/regatta-classic-blue.webp';
import regattaClassicGreen from '../assets/images/products/regatta-classic-green.webp';
import vintageWhite from '../assets/images/products/vintage-white.webp';
import vintageArmyGreen from '../assets/images/products/vintage-army-green.webp';
import vintageMaroon from '../assets/images/products/vintage-maroon.webp';
import vintageNavyBlue from '../assets/images/products/vintage-navy-blue.webp';
import vintageBlack from '../assets/images/products/vintage-black.webp';

import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Adidas Navy Blue Cap',
    price: 8397, // 29.99 USD
    originalPrice: 8397,
    description: 'Classic Adidas design in navy blue with modern comfort.',
    image: adidasNavyBlue,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.8,
    reviews: 156,
    stock: 45,
    category: 'caps' as const,
    brand: 'Adidas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy Blue'],
    material: 'Cotton blend',
    features: ['Moisture wicking', 'UV protection', 'Adjustable strap']
  },
  {
    id: '2',
    name: 'Adidas Green Cap',
    price: 9797, // 34.99 USD
    originalPrice: 9797,
    description: 'Sporty Adidas cap in fresh green color.',
    image: adidasGreen,
    isBestSeller: false,
    isNewArrival: true,
    discount: null,
    rating: 4.6,
    reviews: 89,
    stock: 32,
    category: 'caps' as const,
    brand: 'Adidas',
    sizes: ['S', 'M', 'L'],
    colors: ['Green'],
    material: 'Polyester blend',
    features: ['Breathable', 'Quick dry', 'Adjustable strap']
  },
  {
    id: '3',
    name: 'Adidas Black Cap',
    price: 11197, // 39.99 USD
    originalPrice: 11197,
    description: 'Premium black Adidas cap with iconic branding.',
    image: adidasBlack,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.9,
    reviews: 234,
    stock: 28,
    category: 'caps' as const,
    brand: 'Adidas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Premium cotton',
    features: ['Premium finish', 'UV protection', 'Adjustable strap']
  },
  {
    id: '4',
    name: 'Polo Beige Cap',
    price: 9237, // 32.99 USD
    originalPrice: 9237,
    description: 'Elegant Polo cap in warm beige tone.',
    image: poloBeige,
    isBestSeller: false,
    isNewArrival: true,
    discount: null,
    rating: 4.5,
    reviews: 67,
    stock: 38,
    category: 'caps' as const,
    brand: 'Polo',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige'],
    material: 'Cotton',
    features: ['Classic fit', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '5',
    name: 'Polo Black Cap',
    price: 10357, // 36.99 USD
    originalPrice: 10357,
    description: 'Classic Polo cap in timeless black.',
    image: poloBlack,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.7,
    reviews: 145,
    stock: 42,
    category: 'caps' as const,
    brand: 'Polo',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Cotton blend',
    features: ['Classic fit', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '6',
    name: 'NY Cap Set',
    price: 7837, // 27.99 USD
    originalPrice: 7837,
    description: 'Set of 6 New York style caps in various colors.',
    image: nySetOf6,
    isBestSeller: false,
    isNewArrival: true,
    discount: {
      percentage: 15,
      originalPrice: 9237
    },
    rating: 4.4,
    reviews: 78,
    stock: 15,
    category: 'sets' as const,
    brand: 'NY',
    sizes: ['S', 'M', 'L'],
    colors: ['Mixed'],
    material: 'Cotton blend',
    features: ['Value pack', 'Multiple colors', 'Adjustable straps']
  },
  {
    id: '7',
    name: 'USA Red Cap',
    price: 8957, // 31.99 USD
    originalPrice: 8957,
    description: 'Patriotic USA cap in vibrant red.',
    image: usaRed,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 45,
    stock: 35,
    category: 'caps' as const,
    brand: 'USA',
    sizes: ['S', 'M', 'L'],
    colors: ['Red'],
    material: 'Cotton',
    features: ['Patriotic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '8',
    name: 'USA White Cap',
    price: 10917, // 38.99 USD
    originalPrice: 10917,
    description: 'Clean USA cap in crisp white.',
    image: usaWhite,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.6,
    reviews: 92,
    stock: 28,
    category: 'caps' as const,
    brand: 'USA',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    material: 'Cotton blend',
    features: ['Clean design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '9',
    name: 'USA Black Cap',
    price: 9517, // 33.99 USD
    originalPrice: 9517,
    description: 'USA cap in sleek black design.',
    image: usaBlack,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.4,
    reviews: 67,
    stock: 42,
    category: 'caps' as const,
    brand: 'USA',
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
    material: 'Cotton',
    features: ['Sleek design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '10',
    name: 'USA Blue Cap',
    price: 10077, // 35.99 USD
    originalPrice: 10077,
    description: 'USA cap in classic navy blue.',
    image: usaBlue,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.5,
    reviews: 78,
    stock: 38,
    category: 'caps' as const,
    brand: 'USA',
    sizes: ['S', 'M', 'L'],
    colors: ['Navy Blue'],
    material: 'Cotton blend',
    features: ['Classic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '11',
    name: 'Giordano Red Cap',
    price: 9797, // 34.99 USD
    originalPrice: 9797,
    description: 'Bold Giordano cap in striking red.',
    image: giordanoRed,
    isBestSeller: false,
    isNewArrival: true,
    discount: {
      percentage: 20,
      originalPrice: 12247
    },
    rating: 4.3,
    reviews: 45,
    stock: 32,
    category: 'caps' as const,
    brand: 'Giordano',
    sizes: ['S', 'M', 'L'],
    colors: ['Red'],
    material: 'Cotton blend',
    features: ['Bold design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '12',
    name: 'Adidas Training Cap',
    price: 11197, // 39.99 USD
    originalPrice: 11197,
    description: 'Professional training cap by Adidas.',
    image: adidasTraining,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.7,
    reviews: 189,
    stock: 25,
    category: 'caps' as const,
    brand: 'Adidas',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Performance fabric',
    features: ['Moisture wicking', 'UV protection', 'Adjustable strap']
  },
  {
    id: '13',
    name: 'Come Gray Rey Cap',
    price: 8397, // 29.99 USD
    originalPrice: 8397,
    description: 'Stylish cap in gray and rey color scheme.',
    image: comeGrayRey,
    isBestSeller: false,
    isNewArrival: false,
    discount: {
      percentage: 25,
      originalPrice: 11197
    },
    rating: 4.2,
    reviews: 34,
    stock: 28,
    category: 'caps' as const,
    brand: 'Come',
    sizes: ['S', 'M', 'L'],
    colors: ['Gray', 'Rey'],
    material: 'Cotton',
    features: ['Two-tone design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '14',
    name: 'Come Red Beige Cap',
    price: 8957, // 31.99 USD
    originalPrice: 8957,
    description: 'Elegant cap in red and beige combination.',
    image: comeRedBeige,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.4,
    reviews: 56,
    stock: 35,
    category: 'caps' as const,
    brand: 'Come',
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Beige'],
    material: 'Cotton blend',
    features: ['Two-tone design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '15',
    name: 'Come Beige Gray Cap',
    price: 9237, // 32.99 USD
    originalPrice: 9237,
    description: 'Classic cap in beige and gray tones.',
    image: comeBeigeGray,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 42,
    stock: 30,
    category: 'caps' as const,
    brand: 'Come',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige', 'Gray'],
    material: 'Cotton',
    features: ['Two-tone design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '16',
    name: 'Come Green Yellow Cap',
    price: 9517, // 33.99 USD
    originalPrice: 9517,
    description: 'Vibrant cap in green and yellow colors.',
    image: comeGreenYellow,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.1,
    reviews: 28,
    stock: 22,
    category: 'caps' as const,
    brand: 'Come',
    sizes: ['S', 'M', 'L'],
    colors: ['Green', 'Yellow'],
    material: 'Cotton blend',
    features: ['Two-tone design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '17',
    name: 'Come Yellow Green Cap',
    price: 9797, // 34.99 USD
    originalPrice: 9797,
    description: 'Bright cap in yellow and green combination.',
    image: comeYellowGreen,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.2,
    reviews: 35,
    stock: 25,
    category: 'caps' as const,
    brand: 'Come',
    sizes: ['S', 'M', 'L'],
    colors: ['Yellow', 'Green'],
    material: 'Cotton',
    features: ['Two-tone design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '18',
    name: 'Giordano Black Cap',
    price: 10357, // 36.99 USD
    originalPrice: 10357,
    description: 'Classic Giordano cap in black.',
    image: giordanoBlack,
    isBestSeller: true,
    isNewArrival: false,
    discount: null,
    rating: 4.6,
    reviews: 167,
    stock: 38,
    category: 'caps' as const,
    brand: 'Giordano',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Cotton blend',
    features: ['Classic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '19',
    name: 'Giordano Beige Cap',
    price: 10717, // 38.29 USD
    originalPrice: 10717,
    description: 'Elegant Giordano cap in beige.',
    image: giordanoBeige,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.4,
    reviews: 89,
    stock: 32,
    category: 'caps' as const,
    brand: 'Giordano',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige'],
    material: 'Cotton',
    features: ['Classic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '20',
    name: 'NY Beige Cap',
    price: 9517, // 33.99 USD
    originalPrice: 9517,
    description: 'New York style cap in beige.',
    image: nyBeige,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 45,
    stock: 28,
    category: 'caps' as const,
    brand: 'NY',
    sizes: ['S', 'M', 'L'],
    colors: ['Beige'],
    material: 'Cotton blend',
    features: ['NY style', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '21',
    name: 'NY Red Cap',
    price: 9237, // 32.99 USD
    originalPrice: 9237,
    description: 'New York style cap in red.',
    image: nyRed,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.2,
    reviews: 38,
    stock: 35,
    category: 'caps' as const,
    brand: 'NY',
    sizes: ['S', 'M', 'L'],
    colors: ['Red'],
    material: 'Cotton',
    features: ['NY style', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '22',
    name: 'NY Blue Cap',
    price: 9797, // 34.99 USD
    originalPrice: 9797,
    description: 'New York style cap in blue.',
    image: nyBlue,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.4,
    reviews: 67,
    stock: 30,
    category: 'caps' as const,
    brand: 'NY',
    sizes: ['S', 'M', 'L'],
    colors: ['Blue'],
    material: 'Cotton blend',
    features: ['NY style', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '23',
    name: 'NY Gray Cap',
    price: 10077, // 35.99 USD
    originalPrice: 10077,
    description: 'New York style cap in gray.',
    image: nyGray,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 52,
    stock: 25,
    category: 'caps' as const,
    brand: 'NY',
    sizes: ['S', 'M', 'L'],
    colors: ['Gray'],
    material: 'Cotton',
    features: ['NY style', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '24',
    name: 'Regatta Classic Blue Cap',
    price: 8957, // 31.99 USD
    originalPrice: 8957,
    description: 'Classic Regatta cap in blue.',
    image: regattaClassicBlue,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.2,
    reviews: 34,
    stock: 28,
    category: 'caps' as const,
    brand: 'Regatta',
    sizes: ['S', 'M', 'L'],
    colors: ['Blue'],
    material: 'Cotton blend',
    features: ['Classic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '25',
    name: 'Regatta Classic Green Cap',
    price: 9237, // 32.99 USD
    originalPrice: 9237,
    description: 'Classic Regatta cap in green.',
    image: regattaClassicGreen,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 42,
    stock: 32,
    category: 'caps' as const,
    brand: 'Regatta',
    sizes: ['S', 'M', 'L'],
    colors: ['Green'],
    material: 'Cotton',
    features: ['Classic design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '26',
    name: 'Vintage White Cap',
    price: 8397, // 29.99 USD
    originalPrice: 8397,
    description: 'Vintage style cap in white.',
    image: vintageWhite,
    isBestSeller: false,
    isNewArrival: false,
    discount: {
      percentage: 35,
      originalPrice: 12917
    },
    rating: 4.1,
    reviews: 28,
    stock: 20,
    category: 'caps' as const,
    brand: 'Vintage',
    sizes: ['S', 'M', 'L'],
    colors: ['White'],
    material: 'Cotton',
    features: ['Vintage design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '27',
    name: 'Vintage Army Green Cap',
    price: 8677, // 30.99 USD
    originalPrice: 8677,
    description: 'Vintage style cap in army green.',
    image: vintageArmyGreen,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.2,
    reviews: 35,
    stock: 25,
    category: 'caps' as const,
    brand: 'Vintage',
    sizes: ['S', 'M', 'L'],
    colors: ['Army Green'],
    material: 'Cotton blend',
    features: ['Vintage design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '28',
    name: 'Vintage Maroon Cap',
    price: 8957, // 31.99 USD
    originalPrice: 8957,
    description: 'Vintage style cap in maroon.',
    image: vintageMaroon,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.3,
    reviews: 42,
    stock: 28,
    category: 'caps' as const,
    brand: 'Vintage',
    sizes: ['S', 'M', 'L'],
    colors: ['Maroon'],
    material: 'Cotton',
    features: ['Vintage design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '29',
    name: 'Vintage Navy Blue Cap',
    price: 9237, // 32.99 USD
    originalPrice: 9237,
    description: 'Vintage style cap in navy blue.',
    image: vintageNavyBlue,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.4,
    reviews: 56,
    stock: 32,
    category: 'caps' as const,
    brand: 'Vintage',
    sizes: ['S', 'M', 'L'],
    colors: ['Navy Blue'],
    material: 'Cotton blend',
    features: ['Vintage design', 'Embroidered logo', 'Adjustable strap']
  },
  {
    id: '30',
    name: 'Vintage Black Cap',
    price: 9517, // 33.99 USD
    originalPrice: 9517,
    description: 'Vintage style cap in black.',
    image: vintageBlack,
    isBestSeller: false,
    isNewArrival: false,
    discount: null,
    rating: 4.5,
    reviews: 78,
    stock: 35,
    category: 'caps' as const,
    brand: 'Vintage',
    sizes: ['S', 'M', 'L'],
    colors: ['Black'],
    material: 'Cotton',
    features: ['Vintage design', 'Embroidered logo', 'Adjustable strap']
  }
];