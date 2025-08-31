import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Jean Mbarga",
      role: "Mechanic, Yaoundé",
      content: "Engine SARL's oils have transformed my workshop efficiency. My customers notice the difference in performance immediately.",
      rating: 5
    },
    {
      id: 2,
      name: "Transport Company",
      role: "Fleet Manager, Douala",
      content: "We've been using Engine SARL products across our entire fleet. The reduction in maintenance costs has been remarkable.",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Ngassa",
      role: "Car Owner, Bafoussam",
      content: "Since switching to Engine SARL, my car runs smoother and my fuel efficiency has improved significantly. Highly recommended!",
      rating: 4
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top Tips for Engine Maintenance in Tropical Climates",
      excerpt: "Learn how to protect your engine from the challenges of Cameroon's climate with proper maintenance techniques.",
      date: "2023-10-15"
    },
    {
      id: 2,
      title: "Understanding Oil Viscosity: What Do Those Numbers Mean?",
      excerpt: "A comprehensive guide to understanding engine oil grades and choosing the right one for your vehicle.",
      date: "2023-09-28"
    }
  ];

  // Regions served
  const regions = [
    "Douala", "Yaoundé", "Bafoussam", "Bamenda", "Garoua", 
    "Maroua", "Ngaoundéré", "Bertoua", "Ebolowa", "Limbe"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-b-[4rem] shadow-2xl overflow-hidden min-h-[80vh] py-16">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Power Your Journey with <span className="text-secondary">Engine SARL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium Engine Oils for Peak Performance in Cameroonian Conditions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Explore Products
            </Link>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Now
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
      </section>

      {/* Company Introduction Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Powering Cameroon's Journey</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Founded in Cameroon, Engine SARL is dedicated to revolutionizing engine care across the nation. 
              Our mission is to deliver the highest quality engine oils that ensure peak performance, durability, 
              and reliability for all mechanical engines. We envision becoming the leading and most trusted 
              engine oil supplier in Cameroon, setting the standard for excellence in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Product Selector Tool */}
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

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
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
            <Link to="/products" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 inline-block">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlights Section */}
      <section className="py-20 bg-white">
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
              
              <Link to="/services" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 inline-block">
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
                  <Link to="/distribution" className="bg-white text-primary font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 inline-block">
                    Become a Distributor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Join our growing network of distributors across Cameroon</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Exclusive Territories</h3>
              <p className="text-gray-700">Gain exclusive distribution rights in your region with protected territories.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Competitive Margins</h3>
              <p className="text-gray-700">Enjoy industry-leading profit margins with our competitive pricing structure.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Marketing Support</h3>
              <p className="text-gray-700">Receive comprehensive marketing materials and support to grow your business.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/partnerships" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 inline-block">
              Learn About Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Engine SARL?</h2>
            <p className="text-xl text-gray-600">Excellence in every drop - here's what sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-8">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Quality Assurance</h3>
                  <p className="text-gray-700">Every batch of our engine oil undergoes rigorous testing to meet international standards and perform optimally in African conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Nationwide Reach</h3>
                  <p className="text-gray-700">With distribution centers across 10+ regions in Cameroon, we're never far from your location.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Innovative Formulas</h3>
                  <p className="text-gray-700">Our oils are specially formulated for the unique challenges of African climate and road conditions.</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-8">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Customer Commitment</h3>
                  <p className="text-gray-700">Your satisfaction is our priority. We offer comprehensive support and services to ensure your complete peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-8">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Quick Service</h3>
                  <p className="text-gray-700">Our free oil replacement service gets you back on the road quickly with minimal downtime.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-700">We're committed to sustainable practices and reducing environmental impact throughout our operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Certifications & Accreditations</h2>
            <p className="text-xl text-gray-600">Meeting the highest standards of quality and performance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">ISO 9001</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">API Certified</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">SAE Standards</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center h-32">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">Local Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nationwide Coverage</h2>
            <p className="text-xl text-gray-600">Serving customers across 10+ regions in Cameroon</p>
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <svg className="w-8 h-8 text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="font-medium text-gray-800">{region}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-secondary/10 p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Expanding Our Reach</h3>
              <p className="text-gray-700">We're continuously expanding our distribution network to serve more regions across Cameroon.</p>
              <Link to="/contact" className="inline-block mt-4 bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-300">
                Request Service in Your Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Hear from mechanics, fleet managers, and vehicle owners across Cameroon</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest From Our Blog</h2>
            <p className="text-xl text-gray-600">Stay informed with industry insights, tips, and company news</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                  <h3 className="text-xl font-bold text-primary my-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-secondary font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 inline-block">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Elevate Your Engine's Performance?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers across Cameroon who trust Engine SARL for their engine care needs</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
              Get In Touch
            </Link>
            <Link to="/products" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300">
              Explore Products
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>+237 677 777 777</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>info@enginesarl.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Douala, Cameroon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;