'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import OverviewCards from '@/components/dashboard/OverviewCards';
import SalesChart from '@/components/dashboard/SalesChart';
import PerformanceMetrics from '@/components/dashboard/PerformanceMetrics';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import CustomerInsights from '@/components/dashboard/CustomerInsights';
import ProductPerformance from '@/components/dashboard/ProductPerformance';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isLoading } = useAuth();
  const router = useRouter();
  
  // Extra protection for the dashboard page
  useEffect(() => {
    // Only redirect after loading is complete and we know user is not authenticated
    if (!isLoading && !user) {
      console.log('Dashboard: User not authenticated, redirecting to login');
      router.push('/login');
    }
  }, [user, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-secondary-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }
  
  // If not loading and user exists, show dashboard
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-6">
              Financial Dashboard
            </h1>

            {/* Overview Cards */}
            <OverviewCards />

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="card">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  Sales Performance
                </h2>
                <SalesChart />
              </div>
              <div className="card">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  Performance Metrics
                </h2>
                <PerformanceMetrics />
              </div>
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="card lg:col-span-2">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  Recent Transactions
                </h2>
                <RecentTransactions />
              </div>
              <div className="card">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  Customer Insights
                </h2>
                <CustomerInsights />
              </div>
            </div>

            {/* Product Performance */}
            <div className="card mb-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                Product Performance
              </h2>
              <ProductPerformance />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}