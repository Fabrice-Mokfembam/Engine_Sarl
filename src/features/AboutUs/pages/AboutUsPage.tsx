const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-primary-blue mb-8">About Us</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-darker-gray mb-4">Who We Are</h2>
        <p className="text-lg text-neutral-darker-gray leading-relaxed mb-6">
          Engine SARL is a leading provider of high-quality engine oils, dedicated to ensuring the peak performance,
          durability, and reliability of all mechanical engines. With a strong commitment to excellence, we serve
          a diverse clientele including companies, distributors, and individuals across Cameroon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/path/to/about-us-image-1.jpg"
              alt="Engine SARL Team"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary-blue mb-3">Our Journey</h3>
            <p className="text-neutral-darker-gray leading-relaxed">
              Founded with a vision to revolutionize the engine oil market in Cameroon, Engine SARL has grown
              steadily, building a reputation for quality and reliability. Our journey is marked by continuous
              innovation and a relentless pursuit of customer satisfaction.
            </p>
          </div>
        </div>
      </section>


  <section className="py-16 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-primary mb-4">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600">Driving excellence through dedication and innovation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <h3 className="text-3xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  To deliver the highest quality engine oil that ensures peak performance, durability, and reliability for all mechanical engines, while meeting the diverse needs of companies, distributors, and individuals across Cameroon.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <h3 className="text-3xl font-semibold text-primary mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  To become the leading and most trusted engine oil supplier in Cameroon, setting the standard for excellence in Africa through innovation, consistency, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>


      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-neutral-darker-gray mb-4">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/path/to/value-icon-1.svg"
              alt="Quality Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Quality</h3>
            <p className="text-neutral-darker-gray">We are committed to providing only the best products that meet international standards.</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/value-icon-2.svg"
              alt="Innovation Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Innovation</h3>
            <p className="text-neutral-darker-gray">Continuously seeking new ways to improve our products and services.</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/value-icon-3.svg"
              alt="Customer Satisfaction Icon"
              className="mx-auto mb-4 w-16 h-16 text-primary-blue"
            />
            <h3 className="text-xl font-semibold text-primary-blue mb-2">Customer Satisfaction</h3>
            <p className="text-neutral-darker-gray">Our customers are at the heart of everything we do, and their satisfaction is our priority.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-primary-blue text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Engine SARLs?</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Uncompromising Quality: Our oils are rigorously tested to ensure superior performance.</li>
          <li>Expertise and Experience: Years of industry knowledge backing every product.</li>
          <li>Customer-Centric Approach: Dedicated to meeting your specific needs with tailored solutions.</li>
          <li>Local Presence, Global Standards: Proudly serving Cameroon with products that meet international benchmarks.</li>
        </ul>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-neutral-darker-gray mb-4">Join Our Journey</h2>
        <p className="text-lg text-neutral-darker-gray leading-relaxed mb-6">
          We invite you to explore our range of products and experience the Engine SARL difference.
          For partnerships, distribution, or any inquiries, please do not hesitate to contact us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-orange text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;