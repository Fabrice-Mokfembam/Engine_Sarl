import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8 text-center">Our Engine Oil Products</h1>

      {/* Filter and Sort Options */}
      <section className="mb-8 p-6 bg-neutral-light-gray rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-neutral-darker-gray mb-4">Filter & Sort</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="model" className="block text-neutral-darker-gray text-sm font-bold mb-2">Model:</label>
            <select id="model" className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darker-gray leading-tight focus:outline-none focus:shadow-outline">
              <option value="">All Models</option>
              <option value="ATF 45">ATF 45</option>
              <option value="15W 40">15W 40</option>
              <option value="10W 30">10W 30</option>
              <option value="0W 20">0W 20</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-neutral-darker-gray text-sm font-bold mb-2">Price Range:</label>
            <input type="range" id="price" min="0" max="1000" className="w-full" />
          </div>
          <div>
            <label htmlFor="sort" className="block text-neutral-darker-gray text-sm font-bold mb-2">Sort By:</label>
            <select id="sort" className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-darker-gray leading-tight focus:outline-none focus:shadow-outline">
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card 1: ATF 45 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/path/to/atf45-oil.jpg"
            alt="ATF 45 Engine Oil"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary-blue mb-2">ATF 45</h3>
            <p className="text-neutral-darker-gray text-sm mb-4">Advanced Transmission Fluid</p>
            <p className="text-neutral-darker-gray leading-relaxed mb-4">
              Engineered for automatic transmissions, ATF 45 provides superior protection against wear and tear,
              ensuring smooth gear shifts and extended transmission life. Ideal for a wide range of vehicles.
            </p>
            <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Card 2: 15W 40 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/path/to/15w40-oil.jpg"
            alt="15W 40 Engine Oil"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary-blue mb-2">15W 40</h3>
            <p className="text-neutral-darker-gray text-sm mb-4">Heavy-Duty Diesel Engine Oil</p>
            <p className="text-neutral-darker-gray leading-relaxed mb-4">
              A robust multi-grade oil designed for heavy-duty diesel engines. 15W 40 offers excellent performance
              in various operating conditions, providing optimal engine cleanliness and extended drain intervals.
            </p>
            <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Card 3: 10W 30 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/path/to/10w30-oil.jpg"
            alt="10W 30 Engine Oil"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary-blue mb-2">10W 30</h3>
            <p className="text-neutral-darker-gray text-sm mb-4">All-Season Motor Oil</p>
            <p className="text-neutral-darker-gray leading-relaxed mb-4">
              A versatile engine oil suitable for a wide range of gasoline engines. 10W 30 ensures reliable
              performance across different temperatures, protecting against sludge and varnish formation.
            </p>
            <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Card 4: 0W 20 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/path/to/0w20-oil.jpg"
            alt="0W 20 Engine Oil"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary-blue mb-2">0W 20</h3>
            <p className="text-neutral-darker-gray text-sm mb-4">Fuel-Efficient Synthetic Motor Oil</p>
            <p className="text-neutral-darker-gray leading-relaxed mb-4">
              Formulated for modern engines requiring low-viscosity oils, 0W 20 enhances fuel efficiency
              and provides excellent cold-start protection. A full synthetic blend for ultimate performance.
            </p>
            <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;