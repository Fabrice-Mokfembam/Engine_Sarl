import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Engine's Performance?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers across Cameroon who trust Engine SARL for their engine care needs</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-primary font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get In Touch
          </Link>
          <Link to="/products" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
            Explore Products
          </Link>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>+237 677 777 777</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>info@enginesarl.com</span>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>Douala, Cameroon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
