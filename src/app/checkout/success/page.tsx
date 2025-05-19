'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaFileAlt, FaCalendarAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState<string>('');
  
  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000000 + Math.random() * 900000000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-soft p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-display font-bold text-secondary-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-secondary-600 mb-6">
              Thank you for your purchase. Your financial journey with us has begun.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-secondary-600 mb-2">Order Number:</p>
              <p className="text-xl font-semibold text-secondary-900">{orderNumber}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaFileAlt className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-secondary-900 mb-2">Order Processing</h3>
                  <p className="text-secondary-600 text-sm">
                    We&apos;re processing your order and will send you a confirmation email shortly.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-secondary-900 mb-2">Consultation Scheduling</h3>
                  <p className="text-secondary-600 text-sm">
                    A representative will contact you within 24 hours to schedule your initial consultation.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUserTie className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-medium text-secondary-900 mb-2">Advisor Assignment</h3>
                  <p className="text-secondary-600 text-sm">
                    You&apos;ll be matched with a financial advisor who specializes in your selected products.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <Link href="/dashboard" className="btn-primary py-3 px-6 text-center block">
                Go to Your Dashboard
              </Link>
              <Link href="/products" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 flex items-center justify-center">
                Continue Shopping <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="mt-8 bg-primary-50 border border-primary-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Need Assistance?</h2>
            <p className="text-secondary-600 mb-4">
              If you have any questions about your order or need immediate assistance, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-secondary-900 font-medium">Contact Customer Service:</p>
                <p className="text-primary-600">1-800-555-1234</p>
              </div>
              <Link href="/contact" className="btn-secondary py-2 px-4 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}