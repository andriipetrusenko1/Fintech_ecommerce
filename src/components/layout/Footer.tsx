import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold text-primary-400">FinTech</span>
              <span className="text-2xl font-display font-bold text-white">Commerce</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing premium financial solutions to help individuals and businesses achieve their financial goals and secure their future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/investments" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Investment Plans
                </Link>
              </li>
              <li>
                <Link href="/products/insurance" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/products/retirement" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/products/wealth" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/products/tax" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Tax Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Finance Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="pt-2">
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <a href="mailto:info@fintechcommerce.com" className="hover:text-primary-400 transition-colors duration-200">
                  info@fintechcommerce.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FinTech Commerce. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}