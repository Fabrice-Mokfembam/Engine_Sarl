import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  products } from '../../../data/productData';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
 

  // Filter products based on category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.id - b.id; // Default sort (featured)
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-b-[4rem] shadow-2xl overflow-hidden min-h-[40vh] py-16">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Our <span className="text-secondary">Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium engine oils and lubricants designed for Cameroonian conditions
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-secondary text-white' : 'bg-white text-gray-700'} shadow-lg transition-all duration-300`}
            >
              All Products
            </button>
            <button 
              onClick={() => setSelectedCategory('engine')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'engine' ? 'bg-secondary text-white' : 'bg-white text-gray-700'} shadow-lg transition-all duration-300`}
            >
              Engine Oils
            </button>
            <button 
              onClick={() => setSelectedCategory('transmission')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'transmission' ? 'bg-secondary text-white' : 'bg-white text-gray-700'} shadow-lg transition-all duration-300`}
            >
              Transmission Fluids
            </button>
            <button 
              onClick={() => setSelectedCategory('gear')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'gear' ? 'bg-secondary text-white' : 'bg-white text-gray-700'} shadow-lg transition-all duration-300`}
            >
              Gear Oils
            </button>
            <button 
              onClick={() => setSelectedCategory('specialty')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'specialty' ? 'bg-secondary text-white' : 'bg-white text-gray-700'} shadow-lg transition-all duration-300`}
            >
              Specialty Products
            </button>
          </div>

          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
            <select 
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{product.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-secondary">{product.price.toLocaleString()} FCFA</span>
                  <Link 
                    to={`/products/${product.id}`} 
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 shadow-lg transition-all duration-300"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Comparison Table */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Product Comparison</h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-center">Viscosity</th>
                    <th className="p-4 text-center">Type</th>
                    <th className="p-4 text-center">Applications</th>
                    <th className="p-4 text-center">Price</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.slice(0, 4).map(product => (
                    <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold">{product.name}</td>
                      <td className="p-4 text-center">{product.specifications.viscosity}</td>
                      <td className="p-4 text-center">{product.specifications.type}</td>
                      <td className="p-4 text-center">{product.specifications.applications}</td>
                      <td className="p-4 text-center font-bold text-secondary">{product.price.toLocaleString()} FCFA</td>
                      <td className="p-4 text-center">
                        <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 text-sm">
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Technical Specifications</h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Understanding Oil Viscosity</h3>
                <p className="text-gray-700 mb-4">
                  Viscosity is a measure of an oil's resistance to flow. It is the most important property of a lubricant. 
                  The viscosity grade (e.g., 10W-30) indicates the oil's flow characteristics at different temperatures.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>The first number (before the W) represents the oil's flow at 0°F (-17.8°C)</li>
                  <li>The W stands for Winter, not Weight</li>
                  <li>The second number represents the oil's flow at 212°F (100°C)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Choosing the Right Oil</h3>
                <p className="text-gray-700 mb-4">
                  Selecting the correct oil for your vehicle depends on several factors:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Vehicle manufacturer specifications</li>
                  <li>Driving conditions and climate</li>
                  <li>Vehicle age and mileage</li>
                  <li>Engine type and condition</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-secondary/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-primary mb-4">Need Help Selecting?</h3>
              <p className="text-gray-700 mb-4">
                Our technical experts are available to help you choose the right oil for your specific needs. 
                Contact us for personalized recommendations based on your vehicle and driving conditions.
              </p>
              <Link to="/contact" className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Oil?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our full range of premium engine oils and lubricants designed for optimal performance in Cameroonian conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
              Contact Our Team
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;