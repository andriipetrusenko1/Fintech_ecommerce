'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Investment Portfolio',
    description: 'Diversified investment portfolio with high-yield returns and managed risk.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Investment',
    price: 'From $10,000',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Comprehensive Life Insurance',
    description: 'Complete life insurance coverage with flexible terms and additional benefits.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Insurance',
    price: 'From $50/month',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Retirement Planning Package',
    description: 'Secure your future with our comprehensive retirement planning solutions.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Retirement',
    price: 'Custom Plans',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Tax Optimization Strategy',
    description: 'Maximize your savings with our expert tax optimization strategies.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    category: 'Tax',
    price: 'From $1,500',
    rating: 4.6,
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Investment', 'Insurance', 'Retirement', 'Tax'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Featured Financial Products
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore our premium selection of financial products designed to help you achieve your goals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{product.name}</h3>
                <p className="text-secondary-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent-600 font-semibold">{product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-secondary-700">{product.rating}</span>
                  </div>
                </div>
                <Link href={`/products/${product.id}`} className="btn-primary w-full text-center mt-4 block">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="btn-secondary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}