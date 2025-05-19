'use client';

import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
} from 'chart.js';
import { Doughnut, Radar } from 'react-chartjs-2';
import { useState } from 'react';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
);

export default function PerformanceMetrics() {
  const [activeTab, setActiveTab] = useState('distribution');

  // Product Distribution Data
  const distributionData = {
    labels: ['Investment Plans', 'Insurance', 'Retirement', 'Tax Solutions', 'Wealth Management'],
    datasets: [
      {
        data: [35, 25, 20, 10, 10],
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

  // Performance Radar Data
  const performanceData = {
    labels: ['Revenue', 'Customer Growth', 'Retention', 'Conversion', 'Satisfaction', 'Engagement'],
    datasets: [
      {
        label: 'Current Period',
        data: [85, 75, 90, 70, 95, 80],
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(14, 165, 233, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
      },
      {
        label: 'Previous Period',
        data: [65, 60, 80, 60, 85, 70],
        backgroundColor: 'rgba(245, 158, 11, 0.2)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(245, 158, 11, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(245, 158, 11, 1)',
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 15,
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
    cutout: '70%',
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'distribution'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('distribution')}
        >
          Product Distribution
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'performance'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-secondary-500 hover:text-secondary-700'
          }`}
          onClick={() => setActiveTab('performance')}
        >
          Performance Metrics
        </button>
      </div>

      <div className="h-64">
        {activeTab === 'distribution' ? (
          <Doughnut data={distributionData} options={doughnutOptions} />
        ) : (
          <Radar data={performanceData} options={radarOptions} />
        )}
      </div>
    </div>
  );
}