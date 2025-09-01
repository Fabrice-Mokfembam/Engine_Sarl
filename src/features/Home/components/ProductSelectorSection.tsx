import React, { useState } from 'react';

const ProductSelectorSection: React.FC = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-3xl shadow-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find the Perfect Oil for Your Vehicle</h2>
          <p className="mb-6">Our quick selector helps you choose the right engine oil for your specific needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <select 
              value={selectedVehicleType} 
              onChange={(e) => setSelectedVehicleType(e.target.value)}
              className="p-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Vehicle Type</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="generator">Generator</option>
            </select>
            
            <select 
              value={selectedBrand} 
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="p-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Brand</option>
              <option value="toyota">Toyota</option>
              <option value="nissan">Nissan</option>
              <option value="ford">Ford</option>
              <option value="honda">Honda</option>
            </select>
            
            <select 
              value={selectedModel} 
              onChange={(e) => setSelectedModel(e.target.value)}
              className="p-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="">Model</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
            </select>
          </div>
          
          <button className="mt-6 bg-white text-primary font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
            Find My Oil
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSelectorSection;
