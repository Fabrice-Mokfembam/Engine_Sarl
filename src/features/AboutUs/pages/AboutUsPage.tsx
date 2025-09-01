import {company, work} from "../../../assets/images";
import { about } from "../../../assets/videos";


const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between  shadow-2xl overflow-hidden min-h-[80vh] mb-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={about} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="z-10 flex-1 px-8 py-16 md:py-24 flex flex-col justify-center text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              About <span className="text-secondary block md:inline-block">Engine SARL</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-xl font-medium leading-relaxed">
              Leading provider of high-quality engine oils, dedicated to peak performance, durability, and reliability for all mechanical engines in Cameroon.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
              Discover Our Story
            </button>
          </div>
        </div>
    
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Who We Are & Journey */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
                <span className="absolute -left-6 -top-2 text-secondary text-5xl">•</span>
                Who We Are
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Engine SARL is a leading provider of high-quality engine oils, dedicated to ensuring the peak performance, durability, and reliability of all mechanical engines. With a strong commitment to excellence, we serve a diverse clientele including companies, distributors, and individuals across Cameroon.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-4 relative pl-8 before:absolute before:left-0 before:top-3 before:w-6 before:h-0.5 before:bg-secondary">
                Our Journey
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Founded with a vision to revolutionize the engine oil market in Cameroon, Engine SARL has grown steadily, building a reputation for quality and reliability. Our journey is marked by continuous innovation and a relentless pursuit of customer satisfaction.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 relative">
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-secondary/5 rounded-full z-0"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={company}
                alt="Engine SARL Team"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src={work}
                alt="Engine SARL Office"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 relative z-10">
                Our Mission & Vision
              </h2>
              <div className="absolute -bottom-2 left-1/4 w-1/2 h-2 bg-secondary/30 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving excellence through dedication and innovation in every engine we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col items-center text-center border-l-4 border-primary hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                To deliver the highest quality engine oil that ensures peak performance, durability, and reliability for all mechanical engines, while meeting the diverse needs of companies, distributors, and individuals across Cameroon.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col items-center text-center border-l-4 border-secondary hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                To become the leading and most trusted engine oil supplier in Cameroon, setting the standard for excellence in Africa through innovation, consistency, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Engine SARL
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl shadow-lg p-10 border-t-4 border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Quality</h3>
            <p className="text-gray-700">We are committed to providing only the best products that meet international standards.</p>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-lg p-10 border-t-4 border-secondary hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Innovation</h3>
            <p className="text-gray-700">Continuously seeking new ways to improve our products and services.</p>
          </div>
          <div className="text-center bg-white rounded-2xl shadow-lg p-10 border-t-4 border-secondary hover:shadow-xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Customer Satisfaction</h3>
            <p className="text-gray-700">Our customers are at the heart of everything we do, and their satisfaction is our priority.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden mb-24">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Why Choose Engine SARL?</h2>
              <p className="text-xl mb-10 opacity-95">Discover what sets us apart in the engine oil industry</p>
              <a
                href="/products"
                className="inline-block bg-white text-primary font-bold py-4 px-10 shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg"
              >
                Explore Our Products
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Uncompromising Quality</h3>
                    <p className="opacity-90">Our oils are rigorously tested to ensure superior performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expertise and Experience</h3>
                    <p className="opacity-90">Years of industry knowledge backing every product.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Customer-Centric Approach</h3>
                    <p className="opacity-90">Dedicated to meeting your specific needs with tailored solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Local Presence, Global Standards</h3>
                    <p className="opacity-90">Proudly serving Cameroon with products that meet international benchmarks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-24 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Join Our Journey</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          We invite you to explore our range of products and experience the Engine SARL difference. For partnerships, distribution, or any inquiries, please do not hesitate to contact us.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-4 px-12 shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-lg"
          >
            Contact Us
          </a>
          <a
            href="/products"
            className="inline-block border-2 border-primary text-primary font-bold py-4 px-12 shadow-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 text-lg"
          >
            View Products
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;