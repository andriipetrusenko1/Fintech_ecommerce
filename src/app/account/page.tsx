'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FaUser, FaEnvelope, FaLock, FaShieldAlt, FaCreditCard, FaHistory, FaSignOutAlt } from 'react-icons/fa';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock data for account page
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '(555) 123-4567',
    address: '123 Financial St, New York, NY 10001',
    dateJoined: new Date().toLocaleDateString()
  });
  
  // Update profile with user data when available
  useEffect(() => {
    if (user) {
      setProfile(prev => ({
        ...prev,
        firstName: user.firstName || user.name?.split(' ')[0] || '',
        lastName: user.lastName || (user.name?.split(' ').length > 1 ? user.name?.split(' ')[1] : '') || '',
        email: user.email || ''
      }));
    }
  }, [user]);
  
  // Mock orders data
  const orders = [
    {
      id: 'ORD-2023-1001',
      date: '2023-10-15',
      total: '$10,150.00',
      status: 'Completed',
      items: [
        { name: 'Premium Investment Portfolio', price: '$10,000.00' },
        { name: 'Financial Consultation', price: '$150.00' }
      ]
    },
    {
      id: 'ORD-2023-0892',
      date: '2023-09-28',
      total: '$5,500.00',
      status: 'Processing',
      items: [
        { name: 'Retirement Planning Package', price: '$5,000.00' },
        { name: 'Tax Optimization Strategy', price: '$500.00' }
      ]
    }
  ];
  
  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      last4: '4242',
      expiry: '05/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'Bank Account',
      last4: '9876',
      name: 'Checking Account',
      isDefault: false
    }
  ];
  
  // Mock security settings
  const securitySettings = {
    twoFactorEnabled: false,
    lastPasswordChange: '2023-08-15',
    loginAlerts: true,
    transactionAlerts: true
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-secondary-900 mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6 bg-primary-600 text-white">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold text-xl">
                      {profile.firstName ? profile.firstName[0] : user?.email[0]?.toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">
                        {profile.firstName ? `${profile.firstName} ${profile.lastName}` : user?.email.split('@')[0]}
                      </p>
                      <p className="text-sm text-primary-100">{profile.email}</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-4">
                  <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => setActiveTab('profile')}
                        className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                          activeTab === 'profile'
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-secondary-700 hover:bg-gray-100'
                        }`}
                      >
                        <FaUser className="mr-3 h-4 w-4" />
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('orders')}
                        className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                          activeTab === 'orders'
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-secondary-700 hover:bg-gray-100'
                        }`}
                      >
                        <FaHistory className="mr-3 h-4 w-4" />
                        Orders
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('payment')}
                        className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                          activeTab === 'payment'
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-secondary-700 hover:bg-gray-100'
                        }`}
                      >
                        <FaCreditCard className="mr-3 h-4 w-4" />
                        Payment Methods
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveTab('security')}
                        className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                          activeTab === 'security'
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-secondary-700 hover:bg-gray-100'
                        }`}
                      >
                        <FaShieldAlt className="mr-3 h-4 w-4" />
                        Security
                      </button>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={logout}
                      className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md"
                    >
                      <FaSignOutAlt className="mr-3 h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">Profile Information</h2>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={profile.firstName}
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                          Email Address
                        </label>
                        <div className="flex items-center">
                          <input
                            type="email"
                            id="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-secondary-700 mb-1">
                          Address
                        </label>
                        <textarea
                          id="address"
                          value={profile.address}
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                          rows={3}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="btn-primary py-2 px-4"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Orders Tab */}
                {activeTab === 'orders' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">Order History</h2>
                    
                    {orders.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-secondary-600 mb-4">You haven&apos;t placed any orders yet.</p>
                        <Link href="/products" className="btn-primary py-2 px-4">
                          Browse Products
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap justify-between items-center">
                              <div>
                                <p className="font-medium text-secondary-900">{order.id}</p>
                                <p className="text-sm text-secondary-500">Placed on {order.date}</p>
                              </div>
                              <div className="flex items-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {order.status}
                                </span>
                                <Link href={`/orders/${order.id}`} className="ml-4 text-sm text-primary-600 hover:text-primary-500">
                                  View Details
                                </Link>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-sm font-medium text-secondary-900 mb-2">Order Items</h3>
                              <ul className="divide-y divide-gray-200">
                                {order.items.map((item, index) => (
                                  <li key={index} className="py-2 flex justify-between">
                                    <span className="text-secondary-600">{item.name}</span>
                                    <span className="font-medium text-secondary-900">{item.price}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                                <span className="font-medium text-secondary-900">Total</span>
                                <span className="font-bold text-secondary-900">{order.total}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Payment Methods Tab */}
                {activeTab === 'payment' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">Payment Methods</h2>
                    
                    <div className="space-y-6">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <FaCreditCard className="h-5 w-5 text-secondary-600" />
                              </div>
                              <div className="ml-4">
                                <p className="font-medium text-secondary-900">
                                  {method.type} ending in {method.last4}
                                </p>
                                <p className="text-sm text-secondary-500">
                                  {method.type === 'Credit Card' ? `Expires ${method.expiry}` : method.name}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {method.isDefault && (
                                <span className="mr-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Default
                                </span>
                              )}
                              <button className="text-sm text-primary-600 hover:text-primary-500">
                                Edit
                              </button>
                              <button className="ml-4 text-sm text-red-600 hover:text-red-500">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-6">
                        <button className="btn-secondary py-2 px-4">
                          Add Payment Method
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">Security Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-secondary-900">Password</h3>
                            <p className="text-sm text-secondary-500">
                              Last changed on {securitySettings.lastPasswordChange}
                            </p>
                          </div>
                          <button className="text-sm text-primary-600 hover:text-primary-500">
                            Change Password
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-secondary-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-secondary-500">
                              {securitySettings.twoFactorEnabled
                                ? 'Enabled - Your account is more secure'
                                : 'Disabled - Enable for additional security'}
                            </p>
                          </div>
                          <button className={`text-sm ${
                            securitySettings.twoFactorEnabled
                              ? 'text-red-600 hover:text-red-500'
                              : 'text-primary-600 hover:text-primary-500'
                          }`}>
                            {securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'}
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-secondary-900">Login Alerts</h3>
                            <p className="text-sm text-secondary-500">
                              {securitySettings.loginAlerts
                                ? 'Enabled - You will be notified of new logins'
                                : 'Disabled - Enable to receive login notifications'}
                            </p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input
                              type="checkbox"
                              id="login-alerts"
                              checked={securitySettings.loginAlerts}
                              className="sr-only"
                            />
                            <label
                              htmlFor="login-alerts"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                securitySettings.loginAlerts ? 'bg-primary-600' : 'bg-gray-300'
                              }`}
                            >
                              <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform ${
                                securitySettings.loginAlerts ? 'translate-x-4' : 'translate-x-0'
                              }`}></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-secondary-900">Transaction Alerts</h3>
                            <p className="text-sm text-secondary-500">
                              {securitySettings.transactionAlerts
                                ? 'Enabled - You will be notified of new transactions'
                                : 'Disabled - Enable to receive transaction notifications'}
                            </p>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input
                              type="checkbox"
                              id="transaction-alerts"
                              checked={securitySettings.transactionAlerts}
                              className="sr-only"
                            />
                            <label
                              htmlFor="transaction-alerts"
                              className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                                securitySettings.transactionAlerts ? 'bg-primary-600' : 'bg-gray-300'
                              }`}
                            >
                              <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform ${
                                securitySettings.transactionAlerts ? 'translate-x-4' : 'translate-x-0'
                              }`}></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}