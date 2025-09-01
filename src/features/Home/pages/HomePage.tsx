import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyIntroSection from '../components/CompanyIntroSection';
import ProductSelectorSection from '../components/ProductSelectorSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ServicesSection from '../components/ServicesSection';
import PartnershipSection from '../components/PartnershipSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TrustBadgesSection from '../components/TrustBadgesSection';
import CoverageMapSection from '../components/CoverageMapSection';
import EnvironmentalSection from '../components/EnvironmentalSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FinalCTASection from '../components/FinalCTASection';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      <HeroSection />
      <CompanyIntroSection />
      <FeaturedProducts />
      <ProductSelectorSection />
     
      <ServicesSection />
      <PartnershipSection />
      <WhyChooseUsSection />
      <TrustBadgesSection />
      <CoverageMapSection />
      <EnvironmentalSection />
      <TestimonialsSection />
      <BlogSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;