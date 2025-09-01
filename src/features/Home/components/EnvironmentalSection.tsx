import React from 'react';


const EnvironmentalSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Environmental Commitment</h2>
          <p className="text-xl text-gray-600">Sustainable practices for a greener future</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Eco-Friendly Formulations</h3>
              <p className="text-gray-700 mb-4">Our engine oils are developed with environmentally conscious formulations that reduce harmful emissions and extend oil life.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Reduced environmental impact through advanced formulations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Extended oil change intervals reduce waste</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Recyclable packaging materials</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Community Initiatives</h3>
            <p className="text-gray-700 mb-4">We're committed to supporting environmental initiatives in the communities we serve:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Tree Planting</h4>
                <p className="text-sm text-gray-700">Supporting reforestation efforts across Cameroon</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Recycling Programs</h4>
                <p className="text-sm text-gray-700">Promoting used oil recycling to prevent pollution</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-sm text-gray-700">Environmental awareness programs in schools</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Cleanups</h4>
                <p className="text-sm text-gray-700">Organizing community clean-up initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSection;
