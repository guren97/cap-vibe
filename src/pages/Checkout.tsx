import React, { useState } from 'react';
import { useStore } from '../store';
import { useOrdersStore } from '../store/orders';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Package, ArrowLeft, ShoppingBag, ArrowRight, Check } from 'lucide-react';

import easypaisia from '../assets/images/paymentlogo/easypaisa.png'
import jazzcashCard from '../assets/images/paymentlogo/jazzcash-card.png'
import jazzcashMobile from '../assets/images/paymentlogo/jazzcash-mobile.png'

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

type PaymentMethod = 'easypaisa' | 'jazzcash-card' | 'jazzcash-mobile' | null;

export function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useStore();
  const { addOrder } = useOrdersStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Pakistan',
  });

  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }
    
    if (!formData.zipCode.trim()) {
      errors.zipCode = 'ZIP code is required';
    }

    if (!selectedPayment) {
      errors.payment = 'Please select a payment method';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Save the order
    addOrder({
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image
      })),
      total,
      address: `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`,
      paymentMethod: selectedPayment || 'easypaisa'
    });

    // Clear cart and navigate to success page
    clearCart();
    navigate('/order-success');
  };

  if (cart.length === 0) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h1 className="text-4xl font-light text-gray-900 mb-6">Your cart is empty</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Header */}
      <motion.div 
        variants={itemVariants}
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-6 h-6 text-gray-900" />
              <h1 className="text-2xl font-light text-gray-900">Checkout</h1>
            </div>
            <button
              onClick={() => navigate('/cart')}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Cart
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div variants={itemVariants} className="bg-white shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Package className="w-6 h-6 text-gray-900" />
              <h2 className="text-xl font-light text-gray-900">Order Summary</h2>
            </div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    Rs {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-lg font-medium text-gray-900">
                    Rs {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-6 h-6 text-gray-900" />
                <h2 className="text-xl font-light text-gray-900">Payment Details</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-2 border ${
                        formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gray-900`}
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    {formErrors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-2 border ${
                        formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gray-900`}
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                    {formErrors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full px-4 py-2 border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:border-gray-900`}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-2 border ${
                      formErrors.address ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:border-gray-900`}
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                  {formErrors.address && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-2 border ${
                        formErrors.city ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gray-900`}
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                    {formErrors.city && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-2 border ${
                        formErrors.zipCode ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:border-gray-900`}
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({ ...formData, zipCode: e.target.value })
                      }
                    />
                    {formErrors.zipCode && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.zipCode}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                </div>

                {/* Payment Methods */}
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CreditCard className="w-5 h-5 text-gray-900" />
                    <h3 className="text-sm font-medium text-gray-900">Payment Methods</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedPayment('easypaisa')}
                      className={`relative flex items-center justify-center p-4 border ${
                        selectedPayment === 'easypaisa'
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-900'
                      } transition-colors`}
                    >
                      <img src={easypaisia} alt="EasyPaisa" className="h-6" />
                      {selectedPayment === 'easypaisa' && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-gray-900" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPayment('jazzcash-card')}
                      className={`relative flex items-center justify-center p-4 border ${
                        selectedPayment === 'jazzcash-card'
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-900'
                      } transition-colors`}
                    >
                      <img src={jazzcashCard} alt="JazzCash Card" className="h-6" />
                      {selectedPayment === 'jazzcash-card' && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-gray-900" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPayment('jazzcash-mobile')}
                      className={`relative flex items-center justify-center p-4 border ${
                        selectedPayment === 'jazzcash-mobile'
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-900'
                      } transition-colors`}
                    >
                      <img src={jazzcashMobile} alt="JazzCash Mobile" className="h-6" />
                      {selectedPayment === 'jazzcash-mobile' && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-gray-900" />
                      )}
                    </button>
                  </div>
                  {formErrors.payment && (
                    <p className="mt-2 text-sm text-red-500">{formErrors.payment}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Place Order
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}