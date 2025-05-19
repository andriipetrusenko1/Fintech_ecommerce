'use client';

import { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

export default function SalesChart() {
  const [timeRange, setTimeRange] = useState('month');

  // Sample data
  const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const yearlyLabels = ['2018', '2019', '2020', '2021', '2022', '2023'];

  const monthlySalesData = [12500, 15000, 18000, 16500, 21000, 22500, 25000, 23000, 27000, 29500, 32000, 35000];
  const weeklySalesData = [4200, 5100, 4800, 5600, 6200, 5400, 4900];
  const yearlySalesData = [120000, 150000, 180000, 210000, 250000, 320000];

  const monthlyTargetData = [15000, 17000, 19000, 18000, 22000, 24000, 26000, 25000, 28000, 30000, 33000, 36000];
  const weeklyTargetData = [4500, 5300, 5000, 5800, 6500, 5700, 5200];
  const yearlyTargetData = [130000, 160000, 190000, 220000, 260000, 330000];

  // Determine which data to use based on selected time range
  const labels = timeRange === 'week' ? weeklyLabels : timeRange === 'year' ? yearlyLabels : monthlyLabels;
  const salesData = timeRange === 'week' ? weeklySalesData : timeRange === 'year' ? yearlySalesData : monthlySalesData;
  const targetData = timeRange === 'week' ? weeklyTargetData : timeRange === 'year' ? yearlyTargetData : monthlyTargetData;

  const data = {
    labels,
    datasets: [
      {
        label: 'Actual Sales',
        data: salesData,
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Target',
        data: targetData,
        borderColor: 'rgb(234, 88, 12)',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
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
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setTimeRange('week')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              timeRange === 'week'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-gray-100'
            }`}
          >
            Week
          </button>
          <button
            type="button"
            onClick={() => setTimeRange('month')}
            className={`px-4 py-2 text-sm font-medium ${
              timeRange === 'month'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-gray-100'
            }`}
          >
            Month
          </button>
          <button
            type="button"
            onClick={() => setTimeRange('year')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              timeRange === 'year'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-gray-100'
            }`}
          >
            Year
          </button>
        </div>
      </div>
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}