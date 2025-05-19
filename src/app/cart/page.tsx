'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  FaTrash, 
  FaArrowRight, 
  FaLock, 
  FaShieldAlt, 
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
  FaCreditCard,
  FaRegClock
} from 'react-icons/fa';

// Cart item type
type CartItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  quantity: number;
  category: string;
  term?: string;
  risk?: string;
};

// Promo code type
type PromoCode = {
  code: string;
  discount: number;
  isValid: boolean;
};

export default function CartPage() {
  const router = useRouter();
  
  // State for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Investment Portfolio',
      description: 'A diversified investment portfolio with high-yield returns and managed risk.',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      price: '10,000',
      quantity: 1,
      category: 'Investment',
      term: '5+ years',
      risk: 'Medium'
    },
    {
      id: 2,
      name: 'Comprehensive Life Insurance',
      description: 'Complete life insurance coverage with flexible terms and additional benefits.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      price: '150',
      quantity: 1,
      category: 'Insurance',
      term: 'Lifetime',
      risk: 'Low'
    }
  ]);
  
  // State for promo code
  const [promoCode, setPromoCode] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState<string>('');
  
  // State for order summary
  const [subtotal, setSubtotal] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [processingFee, setProcessingFee] = useState<number>(0);
  
  // State for checkout process
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  
  // State for additional options
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState<string>('auto');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  
  // Calculate order summary whenever cart items or applied promo changes
  useEffect(() => {
    // Calculate subtotal
    const calculatedSubtotal = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/,/g, ''));
      return sum + (price * item.quantity);
    }, 0);
    
    setSubtotal(calculatedSubtotal);
    
    // Calculate processing fee (0.5% of subtotal)
    const fee = calculatedSubtotal * 0.005;
    setProcessingFee(fee);
    
    // Calculate discount if promo is applied
    let discountAmount = 0;
    if (appliedPromo && appliedPromo.isValid) {
      discountAmount = calculatedSubtotal * (appliedPromo.discount / 100);
    }
    setDiscount(discountAmount);
    
    // Calculate total
    setTotal(calculatedSubtotal + fee - discountAmount);
  }, [cartItems, appliedPromo]);
  
  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Handle item removal
  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Handle promo code application
  const handleApplyPromo = () => {
    // Reset previous errors
    setPromoError('');
    
    // Check if promo code is empty
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }
    
    // Simulate promo code validation
    // In a real app, this would be an API call to validate the code
    if (promoCode.toUpperCase() === 'FINTECH20') {
      setAppliedPromo({
        code: promoCode.toUpperCase(),
        discount: 20,
        isValid: true
      });
    } else if (promoCode.toUpperCase() === 'WELCOME10') {
      setAppliedPromo({
        code: promoCode.toUpperCase(),
        discount: 10,
        isValid: true
      });
    } else {
      setPromoError('Invalid promo code');
    }
  };
  
  // Handle promo code removal
  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };
  
  // Handle checkout
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      // In a real app, this would be an API call to process the order
      router.push('/checkout/success');
    }, 2000);
  };
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-secondary-900 mb-8">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Your Cart is Empty</h2>
              <p className="text-secondary-600 mb-8">
                Looks like you haven&apos;t added any financial products to your cart yet.
              </p>
              <Link href="/products" className="btn-primary py-3 px-6 text-center inline-block">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-secondary-900">
                      Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 mb-4 md:mb-0">
                            <div className="relative h-40 rounded-lg overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="md:w-3/4 md:pl-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-semibold text-secondary-900 mb-1">{item.name}</h3>
                                <p className="text-primary-600 font-medium mb-2">{item.category}</p>
                                <p className="text-secondary-600 mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-4 mb-4">
                                  {item.term && (
                                    <div className="flex items-center text-sm text-secondary-500">
                                      <FaRegClock className="mr-1" />
                                      <span>Term: {item.term}</span>
                                    </div>
                                  )}
                                  {item.risk && (
                                    <div className="flex items-center text-sm text-secondary-500">
                                      <FaShieldAlt className="mr-1" />
                                      <span>Risk: {item.risk}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                aria-label="Remove item"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <span className="text-secondary-700 mr-3">Quantity:</span>
                                <div className="flex items-center">
                                  <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-l-md hover:bg-gray-200 transition-colors duration-200"
                                    aria-label="Decrease quantity"
                                  >
                                    -
                                  </button>
                                  <span className="w-10 h-8 flex items-center justify-center bg-white border-t border-b border-gray-200">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-r-md hover:bg-gray-200 transition-colors duration-200"
                                    aria-label="Increase quantity"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-secondary-500 mb-1">Price</div>
                                <div className="text-xl font-semibold text-secondary-900">
                                  ${item.price}
                                  <span className="text-sm text-secondary-500 ml-1">
                                    {item.category === 'Insurance' ? '/month' : ''}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <button
                      onClick={() => setShowOptions(!showOptions)}
                      className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                    >
                      {showOptions ? (
                        <>
                          <FaChevronUp className="mr-2" />
                          Hide Additional Options
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="mr-2" />
                          Show Additional Options
                        </>
                      )}
                    </button>
                    
                    {showOptions && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="advisor" className="block text-sm font-medium text-secondary-700 mb-1">
                            Preferred Financial Advisor
                          </label>
                          <select
                            id="advisor"
                            value={selectedAdvisor}
                            onChange={(e) => setSelectedAdvisor(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="auto">Auto-assign (Recommended)</option>
                            <option value="sarah">Sarah Johnson</option>
                            <option value="michael">Michael Chen</option>
                            <option value="emily">Emily Rodriguez</option>
                            <option value="david">David Thompson</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="notes" className="block text-sm font-medium text-secondary-700 mb-1">
                            Additional Notes
                          </label>
                          <textarea
                            id="notes"
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Any specific requirements or questions..."
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 border-t border-gray-200 flex justify-between items-center">
                    <Link href="/products" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Continue Shopping
                    </Link>
                    <button
                      onClick={() => setCartItems([])}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-secondary-900">Order Summary</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Subtotal</span>
                      <span className="text-secondary-900 font-medium">{formatCurrency(subtotal)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Processing Fee</span>
                      <span className="text-secondary-900 font-medium">{formatCurrency(processingFee)}</span>
                    </div>
                    
                    {appliedPromo && appliedPromo.isValid && (
                      <div className="flex justify-between text-green-600">
                        <span className="flex items-center">
                          Discount ({appliedPromo.code})
                          <button
                            onClick={handleRemovePromo}
                            className="ml-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                            aria-label="Remove promo code"
                          >
                            <FaTrash className="w-3 h-3" />
                          </button>
                        </span>
                        <span>-{formatCurrency(discount)}</span>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-secondary-900">Total</span>
                        <span className="text-xl font-bold text-secondary-900">{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  {!appliedPromo && (
                    <div className="p-6 border-t border-gray-200">
                      <h3 className="text-md font-medium text-secondary-900 mb-3">Promo Code</h3>
                      <div className="flex">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter promo code"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-r-md transition-colors duration-200"
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && (
                        <p className="mt-2 text-sm text-red-600">{promoError}</p>
                      )}
                      <p className="mt-2 text-xs text-secondary-500">
                        Try codes: FINTECH20, WELCOME10
                      </p>
                    </div>
                  )}
                  
                  {/* Checkout Button */}
                  <div className="p-6 border-t border-gray-200">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut || cartItems.length === 0}
                      className={`w-full btn-primary py-3 px-6 text-center flex items-center justify-center ${
                        isCheckingOut || cartItems.length === 0 ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isCheckingOut ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Proceed to Checkout <FaArrowRight className="ml-2" />
                        </>
                      )}
                    </button>
                    
                    <div className="mt-4 flex items-center justify-center text-sm text-secondary-500">
                      <FaLock className="mr-2" />
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </div>
                
                {/* Security Notice */}
                <div className="mt-6 bg-primary-50 border border-primary-100 rounded-xl p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaShieldAlt className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-primary-800">Secure Transaction</h3>
                      <div className="mt-2 text-sm text-primary-700">
                        <p>
                          All transactions are secured with 256-bit encryption. Your financial information is never stored on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Methods */}
                <div className="mt-6 bg-white rounded-xl shadow-soft p-4">
                  <h3 className="text-sm font-medium text-secondary-900 mb-3">We Accept</h3>
                  <div className="flex space-x-3">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Related Products */}
          {cartItems.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-6">You May Also Be Interested In</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
                      alt="Retirement Planning"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Retirement Planning Package</h3>
                    <p className="text-primary-600 font-medium mb-2">Retirement</p>
                    <p className="text-secondary-600 mb-4">Comprehensive retirement planning with personalized investment strategies and tax optimization.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-secondary-900">$5,000</span>
                      <Link href="/products/3" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 flex items-center">
                        View Details <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                      alt="Tax Planning"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Tax Optimization Strategy</h3>
                    <p className="text-primary-600 font-medium mb-2">Tax Planning</p>
                    <p className="text-secondary-600 mb-4">Strategic tax planning to minimize liabilities and maximize wealth preservation.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-secondary-900">$2,500</span>
                      <Link href="/products/4" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 flex items-center">
                        View Details <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Estate Planning"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Estate Planning Service</h3>
                    <p className="text-primary-600 font-medium mb-2">Estate Planning</p>
                    <p className="text-secondary-600 mb-4">Comprehensive estate planning to protect and transfer your wealth according to your wishes.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-secondary-900">$3,500</span>
                      <Link href="/products/5" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 flex items-center">
                        View Details <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}