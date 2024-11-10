import { Suspense } from 'react';
import DashboardStats from '@/components/admin/DashboardStats';
import { Users, Eye, FileText, TrendingUp } from 'lucide-react';

async function getStats() {
  // Simulated API call - replace with actual data fetching
  return {
    totalUsers: '1,234',
    pageViews: '45.2K',
    posts: '128',
    engagement: '67%'
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="space-y-6">
      <Suspense fallback={<div>Loading stats...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardStats
            title="Total Users"
            value={stats.totalUsers}
            change={12}
            icon={Users}
          />
          <DashboardStats
            title="Page Views"
            value={stats.pageViews}
            change={8}
            icon={Eye}
          />
          <DashboardStats
            title="Total Posts"
            value={stats.posts}
            change={-3}
            icon={FileText}
          />
          <DashboardStats
            title="Engagement Rate"
            value={stats.engagement}
            change={5}
            icon={TrendingUp}
          />
        </div>
      </Suspense>
    </div>
  );
}