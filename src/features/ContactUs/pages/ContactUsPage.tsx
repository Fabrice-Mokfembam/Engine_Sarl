import React, { useState } from 'react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-b-[4rem] shadow-2xl overflow-hidden min-h-[40vh] mb-20 py-16">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Contact <span className="text-secondary">Engine SARL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Get in touch with us for inquiries, support, or partnership opportunities.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary mb-8">
              <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Have questions, inquiries, or need assistance? Reach out to us through the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:+237677777777" className="text-gray-600 hover:text-secondary transition-colors duration-300">+237 677 777 777</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <a href="https://wa.me/237677777777" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary transition-colors duration-300">+237 677 777 777</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:info@enginesarl.com" className="text-gray-600 hover:text-secondary transition-colors duration-300">info@enginesarl.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Douala, Cameroon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary">
              <h2 className="text-2xl font-bold text-primary mb-6">Connect With Us</h2>
              <div className="flex justify-start space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-secondary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-secondary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-secondary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary">
              <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="distribution">Distribution Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary">
          <h2 className="text-3xl font-bold text-primary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Find Us on the Map</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6799000000003!2d9.7045!3d4.0483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0000000001%3A0x10610d0000000001!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1678901234567!5m2!1sen!2scm"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;