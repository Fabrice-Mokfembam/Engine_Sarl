import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <main className="container p-4 max-w-7xl mx-auto">
        
      

        {/* Engine Oil Models Section */}
        <section className="py-16 bg-gray-100 text-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-primary mb-4">Our Premium Engine Oil Models</h2>
              <p className="text-lg text-gray-600">Engineered for peak performance and ultimate protection.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Model 1: ATF 45 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* TODO: Add image for ATF 45. Example: <img src="/path/to/atf45.jpg" alt="ATF 45" className="w-32 h-32 object-contain mb-4" /> */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500">Image Placeholder</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">ATF 45</h3>
                <p className="text-md text-gray-700">Advanced transmission fluid for smooth gear shifts and extended transmission life.</p>
              </div>
              {/* Model 2: 15W 40 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* TODO: Add image for 15W 40. Example: <img src="/path/to/15w40.jpg" alt="15W 40" className="w-32 h-32 object-contain mb-4" /> */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500">Image Placeholder</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">15W 40</h3>
                <p className="text-md text-gray-700">Heavy-duty engine oil for robust protection in demanding conditions.</p>
              </div>
              {/* Model 3: 10W 30 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* TODO: Add image for 10W 30. Example: <img src="/path/to/10w30.jpg" alt="10W 30" className="w-32 h-32 object-contain mb-4" /> */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500">Image Placeholder</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">10W 30</h3>
                <p className="text-md text-gray-700">Versatile engine oil offering excellent performance for a wide range of vehicles.</p>
              </div>
              {/* Model 4: 0W 20 */}
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* TODO: Add image for 0W 20. Example: <img src="/path/to/0w20.jpg" alt="0W 20" className="w-32 h-32 object-contain mb-4" /> */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500">Image Placeholder</div>
                <h3 className="text-2xl font-semibold text-primary mb-2">0W 20</h3>
                <p className="text-md text-gray-700">Fuel-efficient synthetic oil for modern engines requiring low viscosity.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition duration-300 ease-in-out">
                Explore All Products
              </button>
            </div>
          </div>
        </section>

        {/* Free Oil Replacement Service Section */}
        <section className="py-16 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold text-primary mb-4">Experience Our Free Oil Replacement Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Engine SARL, we go beyond just selling premium engine oils. We offer a complimentary oil replacement service to ensure your engine receives the best care.
            </p>
            {/* TODO: Add an image or video showcasing the oil replacement service. Example: <img src="/path/to/oil_service.jpg" alt="Oil Replacement Service" className="mx-auto mb-8 rounded-lg shadow-lg" /> */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-8 rounded-lg shadow-lg text-gray-500">Image/Video Placeholder for Oil Service</div>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition duration-300 ease-in-out">
              Learn More About Our Services
            </button>
          </div>
        </section>

        <FeaturedProducts />
      </main>
    </div>
  );
};

export default HomePage;