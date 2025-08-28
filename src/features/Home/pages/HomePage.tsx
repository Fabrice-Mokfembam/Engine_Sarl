import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <main className="container p-4 max-w-7xl mx-auto">
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default HomePage;