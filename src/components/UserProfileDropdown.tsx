'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function UserProfileDropdown() {
  const { user, logout } = useAuth();
  
  // Generate initials from user name or email
  const getInitials = () => {
    if (!user) return '';
    
    if (user.firstName && user.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    }
    
    if (user.name) {
      const nameParts = user.name.split(' ');
      if (nameParts.length > 1) {
        return `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}`;
      }
      return user.name.charAt(0);
    }
    
    return user.email.charAt(0).toUpperCase();
  };
  
  // Get display name
  const getDisplayName = () => {
    if (!user) return '';
    
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    
    if (user.name) {
      return user.name;
    }
    
    return user.email.split('@')[0];
  };

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
            {getInitials()}
          </div>
          <FaChevronDown className="ml-1 h-4 w-4 text-secondary-500" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
          <div className="px-4 py-3">
            <p className="text-sm text-secondary-900 font-medium">
              {getDisplayName()}
            </p>
            <p className="text-xs text-secondary-500 truncate">
              {user?.email}
            </p>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/dashboard"
                  className={`${
                    active ? 'bg-gray-100 text-secondary-900' : 'text-secondary-700'
                  } flex items-center px-4 py-2 text-sm`}
                >
                  <FaUser className="mr-3 h-4 w-4 text-secondary-500" />
                  Dashboard
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/account"
                  className={`${
                    active ? 'bg-gray-100 text-secondary-900' : 'text-secondary-700'
                  } flex items-center px-4 py-2 text-sm`}
                >
                  <FaUser className="mr-3 h-4 w-4 text-secondary-500" />
                  Account
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/settings"
                  className={`${
                    active ? 'bg-gray-100 text-secondary-900' : 'text-secondary-700'
                  } flex items-center px-4 py-2 text-sm`}
                >
                  <FaCog className="mr-3 h-4 w-4 text-secondary-500" />
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/help"
                  className={`${
                    active ? 'bg-gray-100 text-secondary-900' : 'text-secondary-700'
                  } flex items-center px-4 py-2 text-sm`}
                >
                  <FaQuestionCircle className="mr-3 h-4 w-4 text-secondary-500" />
                  Help Center
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logout}
                  className={`${
                    active ? 'bg-gray-100 text-secondary-900' : 'text-secondary-700'
                  } flex items-center w-full text-left px-4 py-2 text-sm`}
                >
                  <FaSignOutAlt className="mr-3 h-4 w-4 text-secondary-500" />
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}