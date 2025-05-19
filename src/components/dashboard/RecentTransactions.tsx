'use client';

import { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaSearch, FaFilter } from 'react-icons/fa';

type Transaction = {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  type: 'purchase' | 'refund';
};

const transactions: Transaction[] = [
  {
    id: 'TRX-001',
    customer: 'John Smith',
    email: 'john.smith@example.com',
    product: 'Premium Investment Portfolio',
    amount: 10000,
    status: 'completed',
    date: '2023-10-15',
    type: 'purchase',
  },
  {
    id: 'TRX-002',
    customer: 'Emily Johnson',
    email: 'emily.j@example.com',
    product: 'Comprehensive Life Insurance',
    amount: 1200,
    status: 'completed',
    date: '2023-10-14',
    type: 'purchase',
  },
  {
    id: 'TRX-003',
    customer: 'Michael Chen',
    email: 'michael.c@example.com',
    product: 'Retirement Planning Package',
    amount: 5000,
    status: 'pending',
    date: '2023-10-13',
    type: 'purchase',
  },
  {
    id: 'TRX-004',
    customer: 'Sarah Williams',
    email: 'sarah.w@example.com',
    product: 'Tax Optimization Strategy',
    amount: 1500,
    status: 'completed',
    date: '2023-10-12',
    type: 'purchase',
  },
  {
    id: 'TRX-005',
    customer: 'David Thompson',
    email: 'david.t@example.com',
    product: 'Premium Investment Portfolio',
    amount: 2500,
    status: 'failed',
    date: '2023-10-11',
    type: 'purchase',
  },
  {
    id: 'TRX-006',
    customer: 'Lisa Rodriguez',
    email: 'lisa.r@example.com',
    product: 'Comprehensive Life Insurance',
    amount: 800,
    status: 'completed',
    date: '2023-10-10',
    type: 'refund',
  },
];

export default function RecentTransactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || transaction.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search transactions..."
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <FaFilter className="h-4 w-4 text-gray-400" />
          <select
            className="border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 py-2 px-3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Transaction
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                      transaction.type === 'purchase' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {transaction.type === 'purchase' ? (
                        <FaArrowDown className="h-4 w-4 text-green-600" />
                      ) : (
                        <FaArrowUp className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-secondary-900">{transaction.id}</div>
                      <div className="text-sm text-secondary-500">{transaction.type}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-secondary-900">{transaction.customer}</div>
                  <div className="text-sm text-secondary-500">{transaction.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-secondary-900">{transaction.product}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${
                    transaction.type === 'purchase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'purchase' ? '+' : '-'}
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(transaction.amount)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                  {new Date(transaction.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}