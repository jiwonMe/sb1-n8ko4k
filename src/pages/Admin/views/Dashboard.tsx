import React from 'react';
import { useQuery } from 'react-query';
import { Users, Eye, FileText, TrendingUp } from 'lucide-react';
import DashboardStats from '../components/DashboardStats';
import { track } from '../../../lib/mixpanel';

export default function Dashboard() {
  const { data: stats, isLoading } = useQuery('dashboard-stats', async () => {
    // Simulated API call - replace with actual data fetching
    return {
      totalUsers: '1,234',
      pageViews: '45.2K',
      posts: '128',
      engagement: '67%'
    };
  });

  React.useEffect(() => {
    track('Admin Dashboard Viewed');
  }, []);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardStats
          title="Total Users"
          value={stats?.totalUsers || '0'}
          change={12}
          icon={Users}
        />
        <DashboardStats
          title="Page Views"
          value={stats?.pageViews || '0'}
          change={8}
          icon={Eye}
        />
        <DashboardStats
          title="Total Posts"
          value={stats?.posts || '0'}
          change={-3}
          icon={FileText}
        />
        <DashboardStats
          title="Engagement Rate"
          value={stats?.engagement || '0'}
          change={5}
          icon={TrendingUp}
        />
      </div>
    </div>
  );
}