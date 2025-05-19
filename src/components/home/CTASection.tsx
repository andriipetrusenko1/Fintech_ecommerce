'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Ready to Secure Your Financial Future?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-primary-100 mb-10"
          >
            Join thousands of satisfied clients who have transformed their financial outlook with our premium products and expert guidance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/signup" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
              Get Started Today
            </Link>
            <Link href="/consultation" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
              Schedule a Consultation
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-primary-100"
          >
            <p className="mb-2">Have questions? Our financial experts are here to help.</p>
            <p className="text-xl font-semibold">Call us at (123) 456-7890</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}