import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Premium Engine Oil Models</h2>
            <p className="text-xl text-gray-600">Engineered for peak performance and ultimate protection in African conditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group border-l-4 border-secondary">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold">ATF 45</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">ATF 45</h3>
              <p className="text-gray-700 mb-4">Advanced transmission fluid for smooth gear shifts and extended transmission life.</p>
              <Link to="/products/atf-45" className="text-secondary font-semibold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group border-l-4 border-secondary">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold">15W 40</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">15W 40</h3>
              <p className="text-gray-700 mb-4">Heavy-duty engine oil for robust protection in demanding conditions and high temperatures.</p>
              <Link to="/products/15w-40" className="text-secondary font-semibold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group border-l-4 border-secondary">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold">10W 30</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">10W 30</h3>
              <p className="text-gray-700 mb-4">Versatile engine oil offering excellent performance for a wide range of vehicles.</p>
              <Link to="/products/10w-30" className="text-secondary font-semibold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
            
            {/* Product 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group border-l-4 border-secondary">
              <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <span className="text-lg font-bold">0W 20</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-2">0W 20</h3>
              <p className="text-gray-700 mb-4">Fuel-efficient synthetic oil for modern engines requiring low viscosity.</p>
              <Link to="/products/0w-20" className="text-secondary font-semibold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 shadow-lg transition-all duration-300 inline-block">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
  )
}

export default FeaturedProducts