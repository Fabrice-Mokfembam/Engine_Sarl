import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProductsSection: React.FC = () => {
  const products = [
    {
      id: 'atf-45',
      name: 'ATF 45',
      description: 'Advanced transmission fluid for smooth gear shifts and extended transmission life.',
    },
    {
      id: '15w-40',
      name: '15W 40',
      description: 'Heavy-duty engine oil for robust protection in demanding conditions and high temperatures.',
    },
    {
      id: '10w-30',
      name: '10W 30',
      description: 'Versatile engine oil offering excellent performance for a wide range of vehicles.',
    },
    {
      id: '0w-20',
      name: '0W 20',
      description: 'Fuel-efficient synthetic oil for modern engines requiring low viscosity.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Premium Engine Oil Models</h2>
          <p className="text-xl text-gray-600">Engineered for peak performance and ultimate protection in African conditions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group border-l-4 border-secondary">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold">{product.name}</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Link to={`/products/${product.id}`} className="text-secondary font-semibold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 inline-block">
            Explore All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
