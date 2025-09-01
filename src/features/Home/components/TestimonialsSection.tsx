import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
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

  return (
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
  );
};

export default TestimonialsSection;
