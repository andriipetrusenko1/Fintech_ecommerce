'use client';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { useState } from 'react';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function CustomerInsights() {
  const [activeTab, setActiveTab] = useState('demographics');

  // Demographics Data
  const demographicsData = {
    labels: ['25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        data: [15, 30, 25, 20, 10],
        backgroundColor: [
          'rgba(14, 165, 233, 0.8)',
          'rgba(79, 70, 229, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(14, 165, 233, 1)',
          'rgba(79, 70, 229, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Acquisition Data
  const acquisitionData = {
    labels: ['Organic Search', 'Direct', 'Referral', 'Social Media', 'Email'],
    datasets: [
      {
        label: 'Customer Acquisition',
        data: [35, 25, 15, 15, 10],
        backgroundColor: 'rgba(14, 165, 233, 0.8)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 10
          }
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    },
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 text-xs font-medium ${
            activeTab === 'demographics'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('demographics')}
        >
          Age Demographics
        </button>
        <button
          className={`py-2 px-4 text-xs font-medium ${
            activeTab === 'acquisition'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('acquisition')}
        >
          Acquisition
        </button>
      </div>

      <div className="h-48">
        {activeTab === 'demographics' ? (
          <Pie data={demographicsData} options={pieOptions} />
        ) : (
          <Bar data={acquisitionData} options={barOptions} />
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-secondary-900 mb-2">Key Insights</h4>
        <ul className="text-xs text-secondary-600 space-y-1">
          <li>• 35-44 age group represents our largest customer segment</li>
          <li>• Organic search drives the most customer acquisition</li>
          <li>• 68% of customers purchase multiple products</li>
        </ul>
      </div>
    </div>
  );
}