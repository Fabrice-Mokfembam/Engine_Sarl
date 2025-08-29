import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8 text-center">Our Comprehensive Services</h1>

      {/* Free Oil Replacement Service */}
      <section className="mb-12 p-6 bg-neutral-light-gray rounded-lg shadow-md flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <img
            src="/path/to/oil-replacement-service.jpg"
            alt="Free Oil Replacement Service"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-blue mb-4">Free Oil Replacement Service</h2>
          <p className="text-neutral-darker-gray leading-relaxed mb-4">
            At Engine SARL, we believe in providing complete care for your vehicle. That's why we offer a
            complimentary oil replacement service when you purchase our premium engine oils. Our skilled technicians
            ensure a quick and efficient oil change, using the right tools and techniques to keep your engine running smoothly.
          </p>
          <ul className="list-disc list-inside text-neutral-darker-gray mb-4">
            <li>Professional and experienced technicians</li>
            <li>Quick and hassle-free service</li>
            <li>Ensures optimal engine performance</li>
            <li>Available at our service centers</li>
          </ul>
          <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Distribution Services */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
          <img
            src="/path/to/distribution-service.jpg"
            alt="Distribution Services"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-primary-blue mb-4">Distribution Services</h2>
          <p className="text-neutral-darker-gray leading-relaxed mb-4">
            Engine SARL is actively seeking partners to expand our reach across Cameroon and beyond. We offer robust
            distribution channels for our high-quality engine oils, ensuring timely and efficient delivery to your
            location. Partner with us to bring premium engine care products to your customers.
          </p>
          <ul className="list-disc list-inside text-neutral-darker-gray mb-4">
            <li>Reliable supply chain and logistics</li>
            <li>Competitive partnership terms</li>
            <li>Support for marketing and sales</li>
            <li>Opportunity to grow with a leading brand</li>
          </ul>
          <button className="bg-accent-orange text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
            Become a Distributor
          </button>
        </div>
      </section>

      {/* Other Potential Services (Example) */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-neutral-darker-gray mb-6">Our Commitment to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-light-gray rounded-lg shadow-md">
            <img

              src="/path/to/icon-expertise.svg"
              alt="Expertise Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Expertise & Support</h3>
            <p className="text-neutral-darker-gray">Benefit from our deep industry knowledge and dedicated customer support.</p>
          </div>
          <div className="p-6 bg-neutral-light-gray rounded-lg shadow-md">
            <img

              src="/path/to/icon-quality.svg"
              alt="Quality Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Quality Assurance</h3>
            <p className="text-neutral-darker-gray">Every product and service meets the highest standards of quality.</p>
          </div>
          <div className="p-6 bg-neutral-light-gray rounded-lg shadow-md">
            <img

              src="/path/to/icon-sustainability.svg"
              alt="Sustainability Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Sustainability</h3>
            <p className="text-neutral-darker-gray">Committed to environmentally responsible practices in all our operations.</p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12 bg-primary-blue text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Engine SARL Difference?</h2>
        <p className="text-lg leading-relaxed mb-6">
          Whether you need an oil change or are looking to distribute premium engine oils,
          we are here to serve you. Contact us today to learn more.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-orange text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;