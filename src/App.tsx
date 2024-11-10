import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Dashboard from './pages/Admin/views/Dashboard';
import Login from './pages/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            {/* Other admin routes will be added here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;