'use client';

import { FaChartLine, FaUsers, FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function OverviewCards() {
  const cards = [
    {
      title: 'Total Revenue',
      value: '$124,563.00',
      change: '+12.5%',
      isPositive: true,
      icon: FaMoneyBillWave,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      title: 'Active Customers',
      value: '2,845',
      change: '+5.8%',
      isPositive: true,
      icon: FaUsers,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      title: 'Products Sold',
      value: '1,249',
      change: '+18.3%',
      isPositive: true,
      icon: FaShoppingCart,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      title: 'Conversion Rate',
      value: '3.6%',
      change: '-0.8%',
      isPositive: false,
      icon: FaChartLine,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="card"
        >
          <div className="flex items-center">
            <div className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center mr-4`}>
              <card.icon className={`h-6 w-6 ${card.textColor}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-secondary-500">{card.title}</p>
              <p className="text-2xl font-semibold text-secondary-900">{card.value}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`text-sm font-medium ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {card.change}
            </span>
            <span className="text-sm text-secondary-500 ml-2">from last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}