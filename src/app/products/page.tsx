'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaStar, FaChevronDown, FaChevronUp, FaShieldAlt, FaChartLine, FaRegClock, FaRegLightbulb } from 'react-icons/fa';

// Product type definition
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating: number;
  returns: string;
  risk: 'Low' | 'Medium' | 'High';
  term: string;
  featured: boolean;
};

// Sample products data
const productsData: Product[] = [
  {
    id: 1,
    name: 'Premium Investment Portfolio',
    description: 'A diversified investment portfolio with high-yield returns and managed risk. Ideal for long-term growth and wealth accumulation.',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Investment',
    price: 'From $10,000',
    rating: 4.9,
    returns: '8-12% annually',
    risk: 'Medium',
    term: '5+ years',
    featured: true,
  },
  {
    id: 2,
    name: 'Comprehensive Life Insurance',
    description: 'Complete life insurance coverage with flexible terms and additional benefits. Protect your loved ones and secure their financial future.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Insurance',
    price: 'From $50/month',
    rating: 4.8,
    returns: 'N/A',
    risk: 'Low',
    term: 'Lifetime',
    featured: true,
  },
  {
    id: 3,
    name: 'Retirement Planning Package',
    description: 'Secure your future with our comprehensive retirement planning solutions. Includes investment strategies, tax optimization, and regular reviews.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Retirement',
    price: 'Custom Plans',
    rating: 4.7,
    returns: '6-9% annually',
    risk: 'Low',
    term: '10+ years',
    featured: true,
  },
  {
    id: 4,
    name: 'Tax Optimization Strategy',
    description: 'Maximize your savings with our expert tax optimization strategies. Reduce tax liability while staying compliant with all regulations.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    category: 'Tax',
    price: 'From $1,500',
    rating: 4.6,
    returns: 'Variable',
    risk: 'Low',
    term: 'Annual',
    featured: false,
  },
  {
    id: 5,
    name: 'High-Yield Savings Account',
    description: 'Earn more on your savings with our high-yield account. Enjoy competitive interest rates, no monthly fees, and easy access to your funds.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Savings',
    price: 'No minimum',
    rating: 4.5,
    returns: '3-4% annually',
    risk: 'Low',
    term: 'Flexible',
    featured: false,
  },
  {
    id: 6,
    name: 'Growth Stock Portfolio',
    description: 'Invest in high-growth potential stocks with our expertly managed portfolio. Designed for investors seeking capital appreciation.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Investment',
    price: 'From $25,000',
    rating: 4.7,
    returns: '10-15% annually',
    risk: 'High',
    term: '7+ years',
    featured: false,
  },
  {
    id: 7,
    name: 'Property Insurance Bundle',
    description: 'Protect your home and assets with our comprehensive property insurance bundle. Includes coverage for natural disasters and theft.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80',
    category: 'Insurance',
    price: 'From $75/month',
    rating: 4.6,
    returns: 'N/A',
    risk: 'Low',
    term: 'Annual',
    featured: false,
  },
  {
    id: 8,
    name: 'Wealth Management Service',
    description: 'Comprehensive wealth management services tailored to high-net-worth individuals. Includes investment management, tax planning, and estate planning.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80',
    category: 'Wealth',
    price: 'From $50,000',
    rating: 4.9,
    returns: 'Custom',
    risk: 'Medium',
    term: 'Ongoing',
    featured: true,
  },
  {
    id: 9,
    name: 'Education Savings Plan',
    description: 'Plan for your children\'s education with our tax-advantaged savings plan. Start early and watch your education fund grow over time.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Savings',
    price: 'From $1,000',
    rating: 4.7,
    returns: '5-7% annually',
    risk: 'Low',
    term: '5-18 years',
    featured: false,
  },
  {
    id: 10,
    name: 'Corporate Pension Plan',
    description: 'Comprehensive pension solutions for businesses of all sizes. Attract and retain top talent with competitive retirement benefits.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Retirement',
    price: 'Custom',
    rating: 4.8,
    returns: 'Variable',
    risk: 'Medium',
    term: 'Long-term',
    featured: false,
  },
  {
    id: 11,
    name: 'Fixed Income Securities',
    description: 'Stable income through bonds and other fixed-income securities. Ideal for conservative investors seeking regular income streams.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Investment',
    price: 'From $5,000',
    rating: 4.5,
    returns: '4-6% annually',
    risk: 'Low',
    term: '3-10 years',
    featured: false,
  },
  {
    id: 12,
    name: 'Estate Planning Service',
    description: 'Comprehensive estate planning to ensure your assets are distributed according to your wishes. Includes will creation and trust establishment.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Wealth',
    price: 'From $2,500',
    rating: 4.8,
    returns: 'N/A',
    risk: 'Low',
    term: 'Lifetime',
    featured: false,
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // All available categories
  const categories = ['All', ...Array.from(new Set(productsData.map(product => product.category)))];
  const riskLevels = ['All', 'Low', 'Medium', 'High'];

  // Filter and sort products
  useEffect(() => {
    let result = [...productsData];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply risk filter
    if (selectedRisk !== 'All') {
      result = result.filter(product => product.risk === selectedRisk);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    
    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedRisk, sortBy]);

  // Pagination
  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setVisibleProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [filteredProducts, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Animation variants
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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 bottom-0 h-full w-full text-white opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Premium Financial Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto"
            >
              Explore our comprehensive range of financial solutions designed to help you achieve your goals and secure your future.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for financial products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-4 px-6 pr-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-800"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-600">
                  <FaSearch className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-soft p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-secondary-900">Filters</h2>
                  <button 
                    className="lg:hidden text-secondary-600 hover:text-primary-600"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                
                <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-md font-medium text-secondary-900 mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={`category-${category}`}
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`category-${category}`} className="ml-2 text-sm text-secondary-700">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Risk Level Filter */}
                  <div>
                    <h3 className="text-md font-medium text-secondary-900 mb-3">Risk Level</h3>
                    <div className="space-y-2">
                      {riskLevels.map((risk) => (
                        <div key={risk} className="flex items-center">
                          <input
                            type="radio"
                            id={`risk-${risk}`}
                            name="risk"
                            checked={selectedRisk === risk}
                            onChange={() => setSelectedRisk(risk)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`risk-${risk}`} className="ml-2 text-sm text-secondary-700">
                            {risk}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort By */}
                  <div>
                    <h3 className="text-md font-medium text-secondary-900 mb-3">Sort By</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="rating">Highest Rated</option>
                      <option value="name_asc">Name (A-Z)</option>
                      <option value="name_desc">Name (Z-A)</option>
                    </select>
                  </div>
                  
                  {/* Reset Filters */}
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedRisk('All');
                      setSortBy('featured');
                    }}
                    className="w-full py-2 px-4 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-secondary-900">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
                </h2>
                <div className="flex items-center space-x-2">
                  <FaFilter className="text-secondary-600" />
                  <span className="text-sm text-secondary-600">Filtered by: </span>
                  <span className="text-sm font-medium text-primary-600">
                    {selectedCategory !== 'All' ? selectedCategory : 'All Categories'}
                    {selectedRisk !== 'All' ? `, ${selectedRisk} Risk` : ''}
                  </span>
                </div>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-soft p-8 text-center">
                  <FaSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">No Products Found</h3>
                  <p className="text-secondary-600 mb-6">
                    We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedRisk('All');
                    }}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {visibleProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
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
                        {product.featured && (
                          <div className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-500 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-secondary-600">{product.rating.toFixed(1)}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">{product.name}</h3>
                        <p className="text-secondary-600 mb-4 line-clamp-3">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center">
                            <FaChartLine className="text-primary-600 mr-2" />
                            <div>
                              <p className="text-xs text-secondary-500">Returns</p>
                              <p className="text-sm font-medium">{product.returns}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaShieldAlt className="text-primary-600 mr-2" />
                            <div>
                              <p className="text-xs text-secondary-500">Risk Level</p>
                              <p className="text-sm font-medium">{product.risk}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaRegClock className="text-primary-600 mr-2" />
                            <div>
                              <p className="text-xs text-secondary-500">Term</p>
                              <p className="text-sm font-medium">{product.term}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-secondary-500">Starting From</p>
                            <p className="text-sm font-medium text-accent-600">{product.price}</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Link href={`/products/${product.id}`} className="btn-primary flex-1 text-center text-sm">
                            Learn More
                          </Link>
                          <Link href={`/contact?product=${product.id}`} className="btn-secondary flex-1 text-center text-sm">
                            Inquire
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-secondary-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          currentPage === index + 1
                            ? 'bg-primary-600 text-white'
                            : 'border border-gray-300 text-secondary-700 hover:bg-gray-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-secondary-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Why Choose Our Financial Products
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We provide premium financial solutions backed by expertise, security, and a commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Secure & Protected</h3>
              <p className="text-secondary-600">
                All our financial products are backed by robust security measures and regulatory compliance to protect your investments.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Optimized Returns</h3>
              <p className="text-secondary-600">
                Our products are designed to maximize your returns while balancing risk according to your financial goals and risk tolerance.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRegLightbulb className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Expert Guidance</h3>
              <p className="text-secondary-600">
                Get personalized advice from our team of financial experts who will help you choose the right products for your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our financial experts are ready to help you find the perfect products for your needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
                Schedule a Consultation
              </Link>
              <Link href="/dashboard" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}