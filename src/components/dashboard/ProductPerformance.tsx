'use client';

import { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

type Product = {
  name: string;
  revenue: number;
  sales: number;
  conversion: number;
  growth: number;
};

const products: Product[] = [
  {
    name: 'Premium Investment Portfolio',
    revenue: 450000,
    sales: 45,
    conversion: 3.8,
    growth: 12.5,
  },
  {
    name: 'Comprehensive Life Insurance',
    revenue: 320000,
    sales: 267,
    conversion: 4.2,
    growth: 8.3,
  },
  {
    name: 'Retirement Planning Package',
    revenue: 280000,
    sales: 56,
    conversion: 3.5,
    growth: 15.7,
  },
  {
    name: 'Tax Optimization Strategy',
    revenue: 175000,
    sales: 117,
    conversion: 2.9,
    growth: 5.2,
  },
  {
    name: 'Wealth Management Service',
    revenue: 390000,
    sales: 78,
    conversion: 4.5,
    growth: 18.9,
  },
];

export default function ProductPerformance() {
  const [sortBy, setSortBy] = useState('revenue');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewType, setViewType] = useState('chart');

  // Sort products based on current sort settings
  const sortedProducts = [...products].sort((a, b) => {
    const aValue = a[sortBy as keyof Product];
    const bValue = b[sortBy as keyof Product];
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Prepare data for chart
  const chartData = {
    labels: sortedProducts.map(product => product.name),
    datasets: [
      {
        label: 'Revenue ($)',
        data: sortedProducts.map(product => product.revenue),
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 1,
      },
      {
        label: 'Growth (%)',
        data: sortedProducts.map(product => product.growth * 10000), // Scale for visibility
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
        yAxisID: 'y1',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.datasetIndex === 0) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.raw);
            } else {
              label += new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 }).format(context.raw / 100000);
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Revenue ($)',
        },
        ticks: {
          callback: function(value: any) {
            return new Intl.NumberFormat('en-US', { 
              style: 'currency', 
              currency: 'USD',
              notation: 'compact',
              compactDisplay: 'short'
            }).format(value);
          }
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Growth (%)',
        },
        ticks: {
          callback: function(value: any) {
            return new Intl.NumberFormat('en-US', { 
              style: 'percent',
              minimumFractionDigits: 1
            }).format(value / 100000);
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 }).format(value / 100);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              viewType === 'chart'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-gray-100'
            }`}
            onClick={() => setViewType('chart')}
          >
            Chart View
          </button>
          <button
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              viewType === 'table'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-gray-100'
            }`}
            onClick={() => setViewType('table')}
          >
            Table View
          </button>
        </div>
      </div>

      {viewType === 'chart' ? (
        <div className="h-80">
          <Bar options={chartOptions} data={chartData} />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Product
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('revenue')}
                >
                  <div className="flex items-center">
                    Revenue
                    {sortBy === 'revenue' && (
                      sortOrder === 'asc' ? 
                        <FaSortAmountUp className="ml-1 h-3 w-3" /> : 
                        <FaSortAmountDown className="ml-1 h-3 w-3" />
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('sales')}
                >
                  <div className="flex items-center">
                    Sales
                    {sortBy === 'sales' && (
                      sortOrder === 'asc' ? 
                        <FaSortAmountUp className="ml-1 h-3 w-3" /> : 
                        <FaSortAmountDown className="ml-1 h-3 w-3" />
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('conversion')}
                >
                  <div className="flex items-center">
                    Conversion
                    {sortBy === 'conversion' && (
                      sortOrder === 'asc' ? 
                        <FaSortAmountUp className="ml-1 h-3 w-3" /> : 
                        <FaSortAmountDown className="ml-1 h-3 w-3" />
                    )}
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('growth')}
                >
                  <div className="flex items-center">
                    Growth
                    {sortBy === 'growth' && (
                      sortOrder === 'asc' ? 
                        <FaSortAmountUp className="ml-1 h-3 w-3" /> : 
                        <FaSortAmountDown className="ml-1 h-3 w-3" />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {formatCurrency(product.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {formatPercent(product.conversion)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    +{formatPercent(product.growth)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}