import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import { supabase } from '../../lib/supabase';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';

export default function Admin() {
  const navigate = useNavigate();
  
  const { data: session, isLoading } = useQuery('session', async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  });

  React.useEffect(() => {
    if (!isLoading && !session) {
      navigate('/login');
    }
  }, [session, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader user={session?.user} />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}