import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-b-[4rem] shadow-2xl overflow-hidden min-h-[50vh] mb-20 py-16">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Premium engine oil products complemented by exceptional services tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#oil-service" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Oil Services
            </a>
            <a href="#distribution" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Distribution
            </a>
            <a href="#contact" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
      </section>

      {/* Free Oil Replacement Service */}
      <section id="oil-service" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
                <span className="absolute -left-6 -top-2 text-secondary text-5xl">•</span>
                Free Oil Replacement Service
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                At Engine SARL, we believe in providing complete care for your vehicle. That's why we offer a
                complimentary oil replacement service when you purchase our premium engine oils. Our skilled technicians
                ensure a quick and efficient oil change, using the right tools and techniques to keep your engine running smoothly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Professional and experienced technicians</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Quick and hassle-free service</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Ensures optimal engine performance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Available at our service centers</span>
                </li>
              </ul>
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Book an Appointment
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-secondary/5 rounded-full z-0"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="/path/to/oil-replacement-service.jpg"
                alt="Free Oil Replacement Service"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                  <p className="text-white/90">Our technicians are trained to provide the best care for your engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Services */}
      <section id="distribution" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-secondary/5 rounded-full z-0"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="/path/to/distribution-service.jpg"
                alt="Distribution Services"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">Nationwide Distribution</h3>
                  <p className="text-white/90">Expanding our reach across Cameroon and beyond</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
                <span className="absolute -left-6 -top-2 text-secondary text-5xl">•</span>
                Distribution Services
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-8">
                Engine SARL is actively seeking partners to expand our reach across Cameroon and beyond. We offer robust
                distribution channels for our high-quality engine oils, ensuring timely and efficient delivery to your
                location. Partner with us to bring premium engine care products to your customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Reliable supply chain and logistics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Competitive partnership terms</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Support for marketing and sales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800">Opportunity to grow with a leading brand</span>
                </li>
              </ul>
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Become a Distributor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind our products and services with these core commitments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all duration-300 group text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Expertise & Support</h3>
            <p className="text-gray-700">Benefit from our deep industry knowledge and dedicated customer support.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all duration-300 group text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Quality Assurance</h3>
            <p className="text-gray-700">Every product and service meets the highest standards of quality.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all duration-300 group text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sustainability</h3>
            <p className="text-gray-700">Committed to environmentally responsible practices in all our operations.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Experience the Engine SARL Difference?</h2>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you need an oil change or are looking to distribute premium engine oils,
              we are here to serve you. Contact us today to learn more.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;