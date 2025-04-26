import { create } from 'zustand';
import { products } from '../data/products';
import { Product, CartItem, StoreState } from '../types';

export const useStore = create<StoreState>((set, get) => ({
  products,
  cart: [],

  addToCart: (product: Product) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId: string) => {
    const { cart } = get();
    set({ cart: cart.filter((item) => item.id !== productId) });
  },

  updateQuantity: (productId: string, quantity: number) => {
    const { cart } = get();
    set({
      cart: cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    });
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));

// Helper functions for filtering products
export const getBestSellers = () => {
  return products.filter((product) => product.isBestSeller);
};

export const getNewArrivals = () => {
  return products.filter((product) => product.isNewArrival);
};

export const getDiscountedProducts = () => {
  return products.filter((product) => product.discount !== null);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter((product) => product.category === category);
};

export const getProductsByBrand = (brand: string) => {
  return products.filter((product) => product.brand === brand);
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

export const getProductsByRating = (minRating: number) => {
  return products.filter((product) => product.rating >= minRating);
};

export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
};