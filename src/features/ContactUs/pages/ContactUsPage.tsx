import React from 'react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8 text-center">Get in Touch with Engine SARL</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="bg-neutral-light-gray p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary-blue mb-4">Contact Information</h2>
          <p className="text-neutral-darker-gray leading-relaxed mb-4">
            Have questions, inquiries, or need assistance? Reach out to us through the following channels:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                  src="/path/to/phone-icon.svg"
                alt="Phone Icon"
                className="w-6 h-6 mr-3 text-primary-blue"
              />
              <span className="text-neutral-darker-gray font-semibold">Phone:</span>
              <a href="tel:+237677777777" className="ml-2 text-primary-blue hover:underline">+237 677 777 777</a>
            </li>
            <li className="flex items-center">
              <img
                  src="/path/to/whatsapp-icon.svg"
                alt="WhatsApp Icon"
                className="w-6 h-6 mr-3 text-primary-blue"
              />
              <span className="text-neutral-darker-gray font-semibold">WhatsApp:</span>
              <a href="https://wa.me/237677777777" target="_blank" rel="noopener noreferrer" className="ml-2 text-primary-blue hover:underline">+237 677 777 777</a>
            </li>
            <li className="flex items-center">
              <img
                  src="/path/to/email-icon.svg"
                alt="Email Icon"
                className="w-6 h-6 mr-3 text-primary-blue"
              />
              <span className="text-neutral-darker-gray font-semibold">Email:</span>
              <a href="mailto:info@enginesarl.com" className="ml-2 text-primary-blue hover:underline">info@enginesarl.com</a>
            </li>
            <li className="flex items-center">
              <img
                  src="/path/to/location-icon.svg"
                alt="Location Icon"
                className="w-6 h-6 mr-3 text-primary-blue"
              />
              <span className="text-neutral-darker-gray font-semibold">Address:</span>
              <span className="ml-2 text-neutral-darker-gray">Douala, Cameroon</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-neutral-darker-gray mb-4 text-center">Find Us on the Map</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.6799000000003!2d9.7045!3d4.0483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0000000001%3A0x10610d0000000001!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1678901234567!5m2!1sen!2scm"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-neutral-darker-gray mb-4">Connect With Us</h2>
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
              src="/path/to/twitter-icon.svg"
              alt="Twitter Icon"
              className="w-10 h-10 text-primary-blue hover:text-accent-orange transition duration-300"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/linkedin-icon.svg"
              alt="LinkedIn Icon"
              className="w-10 h-10 text-primary-blue hover:text-accent-orange transition duration-300"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;