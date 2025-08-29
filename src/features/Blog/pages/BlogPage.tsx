import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8 text-center">Engine SARL Blog: Insights & Updates</h1>

      <p className="text-lg text-neutral-darker-gray text-center mb-12">
        Stay informed with the latest news, industry insights, and expert advice from Engine SARL.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {/* Recent Posts Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-primary-blue mb-6">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blog Post Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/path/to/blog-image-1.jpg" alt="Blog Post 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-neutral-darker-gray mb-2">The Importance of Regular Oil Changes for Your Vehicle</h3>
                  <p className="text-sm text-neutral-gray mb-4">Learn why consistent oil maintenance is crucial for engine longevity and performance.</p>
                  <a href="#" className="text-accent-orange hover:underline font-semibold">Read More &rarr;</a>
                </div>
              </div>
              {/* Blog Post Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/path/to/blog-image-2.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-neutral-darker-gray mb-2">Choosing the Right Engine Oil: A Comprehensive Guide</h3>
                  <p className="text-sm text-neutral-gray mb-4">Our experts break down the different types of engine oils and help you make an informed choice.</p>
                  <a href="#" className="text-accent-orange hover:underline font-semibold">Read More &rarr;</a>
                </div>
              </div>
            </div>
          </section>

          {/* All Posts Section */}
          <section>
            <h2 className="text-3xl font-semibold text-primary-blue mb-6">All Posts</h2>
            <div className="space-y-6">
              {/* Blog Post List Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
                <img src="/path/to/blog-thumb-3.jpg" alt="Blog Post 3" className="w-full md:w-48 h-32 md:h-auto object-cover rounded-lg mr-6 mb-4 md:mb-0" />
                <div>
                  <h3 className="font-bold text-xl text-neutral-darker-gray mb-2">Understanding Engine Oil Viscosity: What Do the Numbers Mean?</h3>
                  <p className="text-sm text-neutral-gray mb-4">Demystifying SAE ratings and how they impact your engine's performance in various temperatures.</p>
                  <a href="#" className="text-accent-orange hover:underline font-semibold">Read More &rarr;</a>
                </div>
              </div>
              {/* Blog Post List Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
                <img src="/path/to/blog-thumb-4.jpg" alt="Blog Post 4" className="w-full md:w-48 h-32 md:h-auto object-cover rounded-lg mr-6 mb-4 md:mb-0" />
                <div>
                  <h3 className="font-bold text-xl text-neutral-darker-gray mb-2">The Future of Lubricants: Innovations and Sustainability</h3>
                  <p className="text-sm text-neutral-gray mb-4">Explore the advancements in lubricant technology and our commitment to eco-friendly solutions.</p>
                  <a href="#" className="text-accent-orange hover:underline font-semibold">Read More &rarr;</a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Categories Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-primary-blue mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-darker-gray hover:text-accent-orange">Engine Maintenance (5)</a></li>
              <li><a href="#" className="text-neutral-darker-gray hover:text-accent-orange">Product Guides (3)</a></li>
              <li><a href="#" className="text-neutral-darker-gray hover:text-accent-orange">Industry News (7)</a></li>
              <li><a href="#" className="text-neutral-darker-gray hover:text-accent-orange">Company Updates (4)</a></li>
            </ul>
          </div>

          {/* Search Bar (Optional) */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-primary-blue mb-4">Search Blog</h2>
            <input type="text" placeholder="Search articles..." className="w-full p-3 border border-neutral-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange" />
            <button className="mt-4 w-full bg-primary-blue hover:bg-accent-orange text-white font-bold py-3 px-4 rounded-full transition duration-300">Search</button>
          </div>

          {/* Tags (Optional) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-primary-blue mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="bg-neutral-light-gray text-neutral-darker-gray text-sm px-3 py-1 rounded-full hover:bg-accent-orange hover:text-white transition duration-300">#EngineOil</a>
              <a href="#" className="bg-neutral-light-gray text-neutral-darker-gray text-sm px-3 py-1 rounded-full hover:bg-accent-orange hover:text-white transition duration-300">#Maintenance</a>
              <a href="#" className="bg-neutral-light-gray text-neutral-darker-gray text-sm px-3 py-1 rounded-full hover:bg-accent-orange hover:text-white transition duration-300">#Lubricants</a>
              <a href="#" className="bg-neutral-light-gray text-neutral-darker-gray text-sm px-3 py-1 rounded-full hover:bg-accent-orange hover:text-white transition duration-300">#Automotive</a>
              <a href="#" className="bg-neutral-light-gray text-neutral-darker-gray text-sm px-3 py-1 rounded-full hover:bg-accent-orange hover:text-white transition duration-300">#Innovation</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;