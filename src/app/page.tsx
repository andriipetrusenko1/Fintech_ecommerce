import Image from 'next/image';
import Link from 'next/link';
import { FaChartLine, FaShieldAlt, FaRegLightbulb, FaRegCreditCard } from 'react-icons/fa';
import ProductShowcase from '@/components/home/ProductShowcase';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import FeatureSection from '@/components/home/FeatureSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Financial success"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Secure Your Financial Future with Premium Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our curated selection of financial products designed to help you build wealth, protect assets, and achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Explore Products
              </Link>
              <Link href="/dashboard" className="btn-secondary text-center">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Why Choose Our Financial Solutions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We provide comprehensive financial products with unmatched benefits and security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaChartLine className="text-primary-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">High Returns</h3>
              <p className="text-secondary-600">
                Our investment products consistently outperform market benchmarks
              </p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-primary-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Secure & Protected</h3>
              <p className="text-secondary-600">
                Advanced security measures to protect your investments and data
              </p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaRegLightbulb className="text-primary-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Expert Guidance</h3>
              <p className="text-secondary-600">
                Access to financial advisors and personalized recommendations
              </p>
            </div>
            
            <div className="card text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaRegCreditCard className="text-primary-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Flexible Options</h3>
              <p className="text-secondary-600">
                Customizable financial products to suit your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Feature Highlight */}
      <FeatureSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}