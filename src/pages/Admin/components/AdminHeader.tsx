import React from 'react';
import { User } from '@supabase/supabase-js';
import { Bell, User as UserIcon } from 'lucide-react';

interface AdminHeaderProps {
  user?: User;
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Welcome Back</h2>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.email}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}