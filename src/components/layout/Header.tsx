'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import UserProfileDropdown from '@/components/UserProfileDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-display font-bold text-primary-600">FinTech</span>
              <span className="text-2xl font-display font-bold text-secondary-800">Commerce</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/products" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Products
            </Link>
            <Link href="/solutions" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Solutions
            </Link>
            <Link href="/about" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">
              <span className="sr-only">Cart</span>
              <div className="relative">
                <FaShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </div>
            </Link>
            
            {!isLoading && (
              <>
                {user ? (
                  <UserProfileDropdown />
                ) : (
                  <>
                    <Link href="/login" className="btn-secondary text-sm">
                      Log In
                    </Link>
                    <Link href="/register" className="btn-primary text-sm">
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/products" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Products
            </Link>
            <Link href="/solutions" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Solutions
            </Link>
            <Link href="/about" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/contact" className="text-secondary-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {user ? (
              <>
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                      {user.firstName ? user.firstName[0] : user.email[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-secondary-800">
                      {user.firstName ? `${user.firstName} ${user.lastName || ''}` : user.name || user.email.split('@')[0]}
                    </div>
                    <div className="text-sm font-medium text-secondary-500">{user.email}</div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link href="/account" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                    Account
                  </Link>
                  <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                    Cart (3)
                  </Link>
                  <button 
                    onClick={() => {
                      const { logout } = useAuth();
                      logout();
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <FaSignOutAlt className="mr-2 h-4 w-4" />
                      Sign out
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                  Cart (3)
                </Link>
                <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                  Log In
                </Link>
                <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-100">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}