import React from 'react';
import { bannerImage3 } from '../../../assets/images';





const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[89vh] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bannerImage3})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1 className="text-6xl font-bold mb-4 text-white text-shadow-lg leading-18">
           Cameroon's Number <span className="text-primary">One </span> for Engine <span className='text-primary'> Oil Excellence</span>
          </h1>
          <p className="text-lg text-white leading-relaxed">
           Delivering peak performance and durability for all mechanical engines, meeting diverse needs across Cameroon.
          </p>
          <p className="text-xl font-semibold text-white leading-relaxed mt-4">
           We Manufacture. We Sell. We Distribute.
          </p>
          <div className="mt-20 flex justify-center space-x-6">
            <button className="bg-[#0056D2] hover:bg-blue-700 text-white font-bold py-4 px-10 ">
              Browse Products
            </button>
            <button className="bg-[#D72638] hover:bg-red-700 text-white font-bold py-4 px-10 ">
              Browse Services
            </button>
          </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
