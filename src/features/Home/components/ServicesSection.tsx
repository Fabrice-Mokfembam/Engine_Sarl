import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Beyond premium products - comprehensive solutions for your engine care needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">Free Oil Replacement Service</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Engine SARL, we believe in providing complete care for your vehicle. That's why we offer a
              complimentary oil replacement service when you purchase our premium engine oils. Our skilled technicians
              ensure a quick and efficient oil change, using the right tools and techniques to keep your engine running smoothly.
            </p>
            
            <div className="bg-secondary/10 p-6 rounded-2xl mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">How It Works:</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                  <p className="text-gray-700">Purchase your preferred Engine SARL oil product</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                  <p className="text-gray-700">Schedule your free replacement at one of our service centers</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                  <p className="text-gray-700">Our certified technicians perform the oil change with care</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                  <p className="text-gray-700">Drive away with confidence and optimal engine performance</p>
                </div>
              </div>
            </div>
            
            <Link to="/services" className="bg-primary hover:bg-secondary/90 text-white font-bold py-3 px-8 shadow-lg transition-all duration-300 inline-block">
              Learn More About Our Services
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform -skew-x-3"></div>
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-96 flex items-center justify-center text-white">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-secondary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-4">Distribution Network</h3>
                <p className="mb-6">We're actively expanding our distribution network across Cameroon. Join us as a partner to bring premium engine oils to your region.</p>
                <Link to="/distribution" className="bg-white text-primary font-bold py-2 px-6 shadow-lg transition-all duration-300 inline-block">
                  Become a Distributor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
