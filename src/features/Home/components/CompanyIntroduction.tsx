import React from 'react';

const CompanyIntroduction: React.FC = () => {
  return (
    <section className="py-16 bg-background text-[var(--color-text)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-heading">
            About Engine SARL
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Founded in the heart of Cameroon, Engine SARL is a leading provider of premium engine oils, dedicated to enhancing the performance and longevity of vehicles and machinery across the nation. Our mission is to deliver the highest quality engine oils that ensure peak performance, durability, and reliability for all types of engines—whether for cars, motorbikes, or industrial applications. We cater to the diverse needs of individuals, companies, and distributors throughout Cameroon.
          </p>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto mt-4">
            With a vision to become the most trusted engine oil supplier in Cameroon and set the standard for excellence in Africa, we combine innovation, consistency, and unwavering customer satisfaction. Our manufactured products, including ATF 45, 15W 40, 10W 30, and 0W 20, are engineered to meet the highest standards, supported by value-added services like free oil replacement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Icon/Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-accent text-5xl mb-4">⚙️</div> {/* Placeholder icon */}
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 font-heading">Quality Assurance</h3>
            <p className="text-sm sm:text-md text-[var(--color-text)]">
              Rigorous testing for superior performance.
            </p>
          </div>
          {/* Icon/Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-accent text-5xl mb-4">🌍</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 font-heading">Nationwide Presence</h3>
            <p className="text-sm sm:text-md text-[var(--color-text)]">
              Serving multiple regions in Cameroon.
            </p>
          </div>
          {/* Icon/Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-accent text-5xl mb-4">🤝</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 font-heading">Customer-Centric</h3>
            <p className="text-sm sm:text-md text-[var(--color-text)]">
              Tailored solutions and exceptional support.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg transition duration-300 ease-in-out">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;