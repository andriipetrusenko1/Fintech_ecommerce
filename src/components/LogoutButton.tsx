'use client';

import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

type LogoutButtonProps = {
  className?: string;
  variant?: 'icon' | 'text' | 'full';
};

export default function LogoutButton({ className = '', variant = 'full' }: LogoutButtonProps) {
  const { logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      // Add a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  
  if (variant === 'icon') {
    return (
      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        className={`text-secondary-500 hover:text-secondary-700 focus:outline-none ${className}`}
        aria-label="Logout"
      >
        <FaSignOutAlt className="h-5 w-5" />
      </button>
    );
  }
  
  if (variant === 'text') {
    return (
      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        className={`text-secondary-500 hover:text-secondary-700 focus:outline-none ${className}`}
      >
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </button>
    );
  }
  
  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className={`flex items-center px-4 py-2 text-sm font-medium text-secondary-700 hover:bg-gray-100 hover:text-secondary-900 rounded-md ${className}`}
    >
      <FaSignOutAlt className="mr-2 h-4 w-4" />
      {isLoggingOut ? 'Logging out...' : 'Sign out'}
    </button>
  );
}