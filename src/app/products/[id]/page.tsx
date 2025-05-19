'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaChartLine, 
  FaShieldAlt, 
  FaRegClock, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaInfoCircle,
  FaArrowRight,
  FaFileAlt,
  FaUserTie,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

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
  longDescription?: string;
  benefits?: string[];
  considerations?: string[];
  requirements?: string[];
  faq?: Array<{ question: string; answer: string }>;
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
    longDescription: 'Our Premium Investment Portfolio is a professionally managed collection of diverse assets designed to maximize returns while managing risk. This comprehensive investment solution includes a mix of stocks, bonds, ETFs, and alternative investments, all selected and monitored by our expert financial advisors.\n\nThe portfolio is regularly rebalanced to maintain optimal asset allocation and adapt to changing market conditions. With a focus on long-term growth, this investment product is ideal for individuals looking to build wealth over time while benefiting from professional management and diversification.',
    benefits: [
      'Professional portfolio management by expert financial advisors',
      'Diversified asset allocation to minimize risk',
      'Regular portfolio rebalancing to maintain optimal performance',
      'Quarterly performance reports and analysis',
      'Access to exclusive investment opportunities',
      'Tax-efficient investment strategies',
      'Personalized investment approach based on your goals'
    ],
    considerations: [
      'Minimum investment of $10,000 required',
      'Recommended investment horizon of 5+ years',
      'Medium risk profile with potential market volatility',
      'Management fees of 0.75% annually',
      'Early withdrawal penalties may apply'
    ],
    requirements: [
      'Minimum initial investment of $10,000',
      'Valid identification documents',
      'Completed risk assessment profile',
      'Bank account for fund transfers'
    ],
    faq: [
      {
        question: 'How is the portfolio managed?',
        answer: 'Our team of experienced financial advisors actively manages the portfolio, making strategic adjustments based on market conditions, economic outlook, and your investment goals. We use a combination of fundamental analysis, technical indicators, and macroeconomic factors to inform our investment decisions.'
      },
      {
        question: 'Can I withdraw my funds early?',
        answer: 'Yes, you can withdraw your funds before the recommended investment term, but early withdrawal fees may apply. The fee structure is tiered based on how long you\'ve held the investment, decreasing over time to encourage long-term investing.'
      },
      {
        question: 'How often will I receive updates on my portfolio?',
        answer: 'You\'ll receive comprehensive quarterly reports detailing your portfolio\'s performance, asset allocation, and any adjustments made. Additionally, you can access your portfolio information anytime through our secure online portal or mobile app.'
      },
      {
        question: 'What is the tax treatment for this investment?',
        answer: 'The tax implications depend on your individual circumstances and the specific assets within your portfolio. Our tax specialists work alongside our investment team to implement tax-efficient strategies. We provide annual tax statements to assist with your tax filing.'
      },
      {
        question: 'Can I customize my portfolio based on my preferences?',
        answer: 'Yes, we offer a degree of customization based on your risk tolerance, investment goals, and personal preferences. You can specify certain sectors or types of investments to include or exclude from your portfolio.'
      }
    ]
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
    longDescription: 'Our Comprehensive Life Insurance policy provides complete protection for you and your loved ones. This policy combines life coverage with living benefits, offering financial security for your family in case of your passing while also building cash value over time that you can access during your lifetime.\n\nWith flexible premium options, adjustable coverage amounts, and additional riders for customization, this insurance solution adapts to your changing needs throughout different life stages. The policy includes a guaranteed death benefit, cash value accumulation, and optional riders for critical illness, disability, and long-term care.',
    benefits: [
      'Guaranteed death benefit to protect your loved ones',
      'Cash value accumulation that grows tax-deferred',
      'Ability to borrow against your policy\'s cash value',
      'Flexible premium payment options',
      'Coverage that never expires as long as premiums are paid',
      'Optional riders for additional protection',
      'Level premiums that don\'t increase with age'
    ],
    considerations: [
      'Higher premiums compared to term life insurance',
      'Takes time to build significant cash value',
      'Loans against policy reduce death benefit if not repaid',
      'Surrender charges may apply for early policy termination',
      'Medical underwriting required'
    ],
    requirements: [
      'Age between 18-75 years',
      'Medical examination',
      'Disclosure of medical history',
      'Proof of identity and residence',
      'Beneficiary designation'
    ],
    faq: [
      {
        question: 'What\'s the difference between term and whole life insurance?',
        answer: 'Term life insurance provides coverage for a specific period (term), while whole life insurance offers lifetime coverage with a cash value component. Our Comprehensive Life Insurance is a whole life policy that never expires as long as premiums are paid, and it builds cash value over time that you can access during your lifetime.'
      },
      {
        question: 'How is the cash value in my policy calculated?',
        answer: 'The cash value grows based on a guaranteed minimum interest rate plus potential dividends, depending on the company\'s performance. This cash value grows tax-deferred and can be accessed through policy loans or withdrawals.'
      },
      {
        question: 'Can I increase my coverage amount later?',
        answer: 'Yes, you may be able to increase your coverage through additional riders or policy adjustments. Some changes may require additional underwriting or medical examinations.'
      },
      {
        question: 'What happens if I miss a premium payment?',
        answer: 'If you miss a payment, there\'s typically a grace period of 30 days during which your coverage remains in effect. After that, the policy may use accumulated cash value to cover premiums or may lapse if insufficient funds are available.'
      },
      {
        question: 'Are there any tax benefits to this policy?',
        answer: 'Yes, the death benefit is generally income tax-free to beneficiaries. Additionally, the cash value grows tax-deferred, and policy loans are not typically subject to income tax. However, we recommend consulting with a tax professional for advice specific to your situation.'
      }
    ]
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
    longDescription: 'Our Wealth Management Service provides a holistic approach to managing your financial life. This premium service combines sophisticated investment management with comprehensive financial planning, tax optimization, estate planning, and personalized advice from a dedicated team of experts.\n\nDesigned for high-net-worth individuals and families, our wealth management solution offers a coordinated strategy to grow, protect, and transfer your wealth according to your goals and values. We take a fiduciary approach, always putting your interests first and providing transparent, objective advice.',
    benefits: [
      'Dedicated wealth manager as your primary point of contact',
      'Customized investment strategy aligned with your goals',
      'Comprehensive financial planning across all aspects of your financial life',
      'Tax optimization strategies to minimize tax burden',
      'Estate planning and wealth transfer guidance',
      'Coordination with your other professional advisors',
      'Regular reviews and adjustments as your life changes',
      'Access to exclusive investment opportunities'
    ],
    considerations: [
      'Minimum investment of $50,000 required',
      'Annual fee structure based on assets under management',
      'Comprehensive approach requires sharing detailed financial information',
      'Best results achieved with long-term commitment'
    ],
    requirements: [
      'Minimum investable assets of $50,000',
      'Completed financial profile and goals assessment',
      'Initial planning meeting with wealth management team',
      'Financial documentation for comprehensive analysis'
    ],
    faq: [
      {
        question: 'How is your wealth management different from just investment management?',
        answer: 'While investment management focuses solely on your investment portfolio, our wealth management service takes a holistic approach to your entire financial life. We integrate investment management with tax planning, estate planning, retirement planning, risk management, and more to create a comprehensive strategy aligned with your goals.'
      },
      {
        question: 'How often will I meet with my wealth manager?',
        answer: 'We typically schedule quarterly reviews to discuss your portfolio performance and any adjustments needed. However, we\'re available for additional meetings whenever significant life events occur or you have concerns to address. The frequency can be adjusted based on your preferences.'
      },
      {
        question: 'How do you charge for wealth management services?',
        answer: 'Our fee structure is based on a percentage of assets under management, typically ranging from 0.75% to 1.25% annually, depending on the size and complexity of your portfolio. This fee is transparent and includes all wealth management services, with no hidden charges.'
      },
      {
        question: 'Can you work with my existing financial advisors?',
        answer: 'Yes, we often collaborate with our clients\' existing attorneys, accountants, and other advisors to ensure a coordinated approach. We can either take the lead in coordinating these relationships or work alongside your existing team, depending on your preference.'
      },
      {
        question: 'What makes your wealth management approach unique?',
        answer: 'Our approach is distinguished by three key elements: 1) A truly holistic perspective that integrates all aspects of your financial life, 2) A fiduciary commitment to always act in your best interest, and 3) A personalized service model with a dedicated wealth manager who deeply understands your unique situation and goals.'
      }
    ]
  }
];

// Related products function
const getRelatedProducts = (currentProductId: number, category: string) => {
  return productsData
    .filter(product => product.id !== currentProductId && product.category === category)
    .slice(0, 3);
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const productId = Number(params.id);
    const foundProduct = productsData.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setRelatedProducts(getRelatedProducts(productId, foundProduct.category));
    } else {
      // Product not found, redirect to products page
      router.push('/products');
    }
  }, [params.id, router]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Product Hero Section */}
      <section className="relative py-12 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-primary-100 mb-2 flex items-center">
                  <Link href="/products" className="hover:text-white transition-colors duration-200">
                    Products
                  </Link>
                  <span className="mx-2">/</span>
                  <span>{product.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                    ))}
                  </div>
                  <span className="text-white">{product.rating.toFixed(1)} rating</span>
                </div>
                <p className="text-xl text-primary-100 mb-6">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center">
                    <FaChartLine className="text-primary-300 mr-3 h-6 w-6" />
                    <div>
                      <p className="text-primary-200 text-sm">Returns</p>
                      <p className="text-white font-medium">{product.returns}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaShieldAlt className="text-primary-300 mr-3 h-6 w-6" />
                    <div>
                      <p className="text-primary-200 text-sm">Risk Level</p>
                      <p className="text-white font-medium">{product.risk}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="text-primary-300 mr-3 h-6 w-6" />
                    <div>
                      <p className="text-primary-200 text-sm">Term</p>
                      <p className="text-white font-medium">{product.term}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/contact?product=${product.id}`} className="btn-accent py-3 px-6 text-center">
                    Get Started
                  </Link>
                  <Link href="/consultation" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded">
                  {product.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white text-primary-600 text-sm font-bold px-3 py-1 rounded">
                  {product.price}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-soft overflow-hidden">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'benefits'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
                onClick={() => setActiveTab('benefits')}
              >
                Benefits & Considerations
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'requirements'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
                onClick={() => setActiveTab('requirements')}
              >
                Requirements
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'faq'
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-secondary-500 hover:text-secondary-700'
                }`}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Product Overview</h2>
                  <p className="text-secondary-600 mb-6 whitespace-pre-line">
                    {product.longDescription}
                  </p>
                  <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary-600">
                          <FaChartLine />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-md font-medium text-secondary-900">Performance</h4>
                          <p className="text-sm text-secondary-600">{product.returns} expected returns</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary-600">
                          <FaShieldAlt />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-md font-medium text-secondary-900">Risk Profile</h4>
                          <p className="text-sm text-secondary-600">{product.risk} risk level</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary-600">
                          <FaRegClock />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-md font-medium text-secondary-900">Investment Term</h4>
                          <p className="text-sm text-secondary-600">{product.term} recommended</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary-600">
                          <FaFileAlt />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-md font-medium text-secondary-900">Documentation</h4>
                          <p className="text-sm text-secondary-600">Comprehensive reporting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-lg p-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-secondary-900">Ready to get started?</h3>
                      <p className="text-secondary-600">Speak with one of our financial advisors today.</p>
                    </div>
                    <Link href={`/contact?product=${product.id}`} className="btn-primary py-3 px-6 text-center">
                      Contact Us <FaArrowRight className="ml-2 inline-block" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Benefits Tab */}
              {activeTab === 'benefits' && (
                <div>
                  <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Benefits & Considerations</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" /> Benefits
                      </h3>
                      <ul className="space-y-3">
                        {product.benefits?.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-secondary-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                        <FaInfoCircle className="text-amber-500 mr-2" /> Considerations
                      </h3>
                      <ul className="space-y-3">
                        {product.considerations?.map((consideration, index) => (
                          <li key={index} className="flex items-start">
                            <FaInfoCircle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-secondary-600">{consideration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaUserTie className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-secondary-900">Expert Advice</h3>
                        <p className="text-secondary-600 mb-4">
                          Our financial advisors can help you determine if this product is right for your specific situation and goals.
                        </p>
                        <Link href="/consultation" className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                          Schedule a free consultation <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Requirements Tab */}
              {activeTab === 'requirements' && (
                <div>
                  <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Requirements</h2>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">Eligibility & Documentation</h3>
                    <ul className="space-y-4">
                      {product.requirements?.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                            {index + 1}
                          </div>
                          <span className="text-secondary-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Application Process</h3>
                      <p className="text-secondary-600 mb-4">Simple online application with guided assistance</p>
                      <span className="text-primary-600 font-medium">15-20 minutes</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Processing Time</h3>
                      <p className="text-secondary-600 mb-4">Quick review and approval process</p>
                      <span className="text-primary-600 font-medium">2-3 business days</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">Support Available</h3>
                      <p className="text-secondary-600 mb-4">Dedicated advisor to guide you through the process</p>
                      <Link href="/contact" className="text-primary-600 font-medium hover:text-primary-700">
                        Contact support
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ Tab */}
              {activeTab === 'faq' && (
                <div>
                  <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {product.faq?.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <span className="font-medium text-secondary-900">{item.question}</span>
                          {expandedFaq === index ? (
                            <FaChevronUp className="text-primary-600 h-4 w-4" />
                          ) : (
                            <FaChevronDown className="text-primary-600 h-4 w-4" />
                          )}
                        </button>
                        {expandedFaq === index && (
                          <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-secondary-600">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-primary-50 border border-primary-100 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Still have questions?</h3>
                    <p className="text-secondary-600 mb-4">Our team is ready to provide you with the information you need.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link href="/contact" className="btn-primary py-2 px-4 text-center">
                        Contact Us
                      </Link>
                      <Link href="/faq" className="btn-secondary py-2 px-4 text-center">
                        View All FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-8">Related Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {relatedProduct.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-500 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-secondary-600">{relatedProduct.rating.toFixed(1)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-accent-600 font-semibold">{relatedProduct.price}</span>
                      <span className="text-sm text-secondary-600">{relatedProduct.term}</span>
                    </div>
                    <Link href={`/products/${relatedProduct.id}`} className="btn-primary w-full text-center block">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Take the first step towards financial success with our {product.name.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={`/contact?product=${product.id}`} className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
                Get Started Today
              </Link>
              <Link href="/consultation" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}