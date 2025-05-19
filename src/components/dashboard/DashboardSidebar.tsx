'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { 
  FaTimes, 
  FaHome, 
  FaChartPie, 
  FaShoppingCart, 
  FaWallet, 
  FaUserFriends, 
  FaCog, 
  FaQuestionCircle, 
  FaSignOutAlt 
} from 'react-icons/fa';

type DashboardSidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function DashboardSidebar({ isOpen, setIsOpen }: DashboardSidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: FaHome },
    { name: 'Analytics', href: '/dashboard/analytics', icon: FaChartPie },
    { name: 'Products', href: '/dashboard/products', icon: FaShoppingCart },
    { name: 'Transactions', href: '/dashboard/transactions', icon: FaWallet },
    { name: 'Customers', href: '/dashboard/customers', icon: FaUserFriends },
  ];

  const secondaryNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: FaCog },
    { name: 'Help & Support', href: '/dashboard/support', icon: FaQuestionCircle },
    { name: 'Logout', href: '/logout', icon: FaSignOutAlt },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FaTimes className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-display font-bold text-primary-600">FinTech</span>
                    <span className="text-2xl font-display font-bold text-secondary-800">Commerce</span>
                  </Link>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        pathname === item.href
                          ? 'bg-primary-100 text-primary-600'
                          : 'text-secondary-600 hover:bg-gray-50 hover:text-primary-600'
                      }`}
                    >
                      <item.icon
                        className={`mr-4 flex-shrink-0 h-6 w-6 ${
                          pathname === item.href ? 'text-primary-600' : 'text-secondary-500 group-hover:text-primary-600'
                        }`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 border-t border-gray-200 p-4">
                <div className="space-y-1">
                  {secondaryNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-secondary-600 hover:bg-gray-50 hover:text-primary-600"
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-secondary-500 group-hover:text-primary-600"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-display font-bold text-primary-600">FinTech</span>
                <span className="text-2xl font-display font-bold text-secondary-800">Commerce</span>
              </Link>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    pathname === item.href
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-secondary-600 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 ${
                      pathname === item.href ? 'text-primary-600' : 'text-secondary-500 group-hover:text-primary-600'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <div className="space-y-1">
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-secondary-600 hover:bg-gray-50 hover:text-primary-600"
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6 text-secondary-500 group-hover:text-primary-600"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}