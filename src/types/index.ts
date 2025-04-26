export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    description: string;
    image: string;
    isBestSeller: boolean;
    isNewArrival: boolean;
    discount: {
      percentage: number;
      originalPrice: number;
    } | null;
    rating: number;
    reviews: number;
    stock: number;
    category: 'caps' | 'sets';
    brand: string;
    sizes: string[];
    colors: string[];
    material: string;
    features: string[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface StoreState {
    products: Product[];
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}