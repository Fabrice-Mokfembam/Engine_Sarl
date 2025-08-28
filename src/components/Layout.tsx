import React from 'react'

import { Outlet } from 'react-router-dom';
import Navbar from '../features/Home/components/Navbar';
import Footer from '../features/Home/components/Footer';

const Layout:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow  ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout