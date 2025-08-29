import React from 'react';

const GalleryPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8 text-center">Our Visual Journey: Engine SARL Gallery</h1>

      <p className="text-lg text-neutral-darker-gray text-center mb-12">
        Explore our collection of images and videos showcasing our products, facilities, events, and the people behind Engine SARL.
      </p>

      {/* Product Showcase */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary-blue mb-6 text-center">Product Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder for Product Image 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/product-image-1.jpg" alt="Engine Oil Product 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">ATF 45 - Advanced Transmission Fluid</h3>
              <p className="text-sm text-neutral-gray mt-2">High-performance fluid for smooth gear shifts and extended transmission life.</p>
            </div>
          </div>
          {/* Placeholder for Product Image 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/product-image-2.jpg" alt="Engine Oil Product 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">15W 40 - Heavy Duty Diesel Engine Oil</h3>
              <p className="text-sm text-neutral-gray mt-2">Designed for robust protection and performance in demanding conditions.</p>
            </div>
          </div>
          {/* Placeholder for Product Image 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/product-image-3.jpg" alt="Engine Oil Product 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">10W 30 - Premium Gasoline Engine Oil</h3>
              <p className="text-sm text-neutral-gray mt-2">Optimized for fuel efficiency and engine cleanliness in modern vehicles.</p>
            </div>
          </div>
          {/* Placeholder for Product Image 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/product-image-4.jpg" alt="Engine Oil Product 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">0W 20 - Full Synthetic Engine Oil</h3>
              <p className="text-sm text-neutral-gray mt-2">Maximum protection and performance for advanced engine designs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Operations */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary-blue mb-6 text-center">Our Facilities & Operations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder for Facility Image 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/facility-image-1.jpg" alt="Warehouse Interior" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">State-of-the-Art Warehouse</h3>
              <p className="text-sm text-neutral-gray mt-2">Our organized and efficient storage solutions.</p>
            </div>
          </div>
          {/* Placeholder for Operations Video */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-neutral-gray">Video Placeholder</span>
              {/* TODO: Replace with an actual embedded video (e.g., YouTube, Vimeo) */}
              {/* <iframe src="https://www.youtube.com/embed/your-video-id" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">Distribution Process</h3>
              <p className="text-sm text-neutral-gray mt-2">A look into our streamlined distribution network.</p>
            </div>
          </div>
          {/* Placeholder for Quality Control Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/qc-image-1.jpg" alt="Quality Control" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">Rigorous Quality Checks</h3>
              <p className="text-sm text-neutral-gray mt-2">Ensuring every product meets the highest standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Community */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-primary-blue mb-6 text-center">Events & Community Engagement</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Placeholder for Event Image 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/event-image-1.jpg" alt="Trade Show Booth" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">Industry Trade Shows</h3>
              <p className="text-sm text-neutral-gray mt-2">Connecting with partners and customers at major events.</p>
            </div>
          </div>
          {/* Placeholder for Community Service Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/path/to/community-image-1.jpg" alt="Community Service" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-darker-gray">Local Community Initiatives</h3>
              <p className="text-sm text-neutral-gray mt-2">Giving back to the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-primary-blue mb-4">Want to See More?</h2>
        <p className="text-lg text-neutral-darker-gray mb-6">Follow us on our social media channels for the latest updates, behind-the-scenes content, and more!</p>
        <div className="flex justify-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/facebook-icon.svg"
              alt="Facebook Icon"
              className="w-10 h-10 text-primary-blue hover:text-accent-orange transition duration-300"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/instagram-icon.svg"
              alt="Instagram Icon"
              className="w-10 h-10 text-primary-blue hover:text-accent-orange transition duration-300"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/youtube-icon.svg"
              alt="YouTube Icon"
              className="w-10 h-10 text-primary-blue hover:text-accent-orange transition duration-300"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;