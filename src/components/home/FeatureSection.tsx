'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLock, FaChartLine, FaUserShield, FaMobileAlt } from 'react-icons/fa';

export default function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Financial dashboard on mobile and desktop"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaChartLine className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Portfolio Growth</p>
                  <p className="font-bold text-green-600">+24.8%</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaLock className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Security Rating</p>
                  <p className="font-bold text-blue-600">A+</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Advanced Technology for Your Financial Success
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Our platform combines cutting-edge technology with financial expertise to provide you with the tools you need to make informed decisions and achieve your financial goals.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaLock className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Bank-Level Security</h3>
                  <p className="text-secondary-600">
                    Your data and investments are protected with the highest level of encryption and security protocols available.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Real-Time Analytics</h3>
                  <p className="text-secondary-600">
                    Monitor your investments and financial performance with real-time data and insightful analytics.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserShield className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Personalized Recommendations</h3>
                  <p className="text-secondary-600">
                    Receive tailored financial advice and product recommendations based on your goals and risk profile.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMobileAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Mobile Accessibility</h3>
                  <p className="text-secondary-600">
                    Access your financial dashboard anytime, anywhere with our responsive web platform and mobile app.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}