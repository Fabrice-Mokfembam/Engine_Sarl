import React from 'react';
import { Link } from 'react-router-dom';

const CoverageMapSection: React.FC = () => {
  const regions = [
    "Douala", "Yaoundé", "Bafoussam", "Bamenda", "Garoua", 
    "Maroua", "Ngaoundéré", "Bertoua", "Ebolowa", "Limbe"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nationwide Coverage</h2>
          <p className="text-xl text-gray-600">Serving customers across 10+ regions in Cameroon</p>
        </div>
        
        <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <svg className="w-8 h-8 text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="font-medium text-gray-800">{region}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-secondary/10 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Expanding Our Reach</h3>
            <p className="text-gray-700">We're continuously expanding our distribution network to serve more regions across Cameroon.</p>
            <Link to="/contact" className="inline-block mt-4 bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 shadow-lg transition-all duration-300">
              Request Service in Your Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMapSection;
