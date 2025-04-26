import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  time: string;
  items: OrderItem[];
  total: number;
  status: 'Processing' | 'Delivered';
  address: string;
  paymentMethod: string;
}

interface OrdersState {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date' | 'time' | 'status'>) => void;
  clearOrders: () => void;
}

export const useOrdersStore = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (orderData) => {
        const newOrder: Order = {
          ...orderData,
          id: `ORD${String(Date.now()).slice(-6)}`,
          date: new Date().toISOString().split('T')[0],
          time: new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          }),
          status: 'Processing'
        };
        
        set((state) => ({
          orders: [newOrder, ...state.orders]
        }));
      },
      clearOrders: () => {
        set({ orders: [] });
      },
    }),
    {
      name: 'orders-storage',
    }
  )
); 