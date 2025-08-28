import React from 'react'
import { containerImage1, containerImage2, containerImage3 } from '../../../assets/images'

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={containerImage1} alt="EnginePro Full Synthetic" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EnginePro Full Synthetic</h3>
              <p className="text-gray-400 text-sm">Our premium full synthetic oil provides superior protection and performance for modern engines.</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={containerImage2} alt="EnginePro High Mileage" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EnginePro High Mileage</h3>
              <p className="text-gray-400 text-sm">Specially formulated for vehicles with over 75,000 miles, reducing leaks and oil consumption.</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={containerImage3} alt="EnginePro Diesel" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EnginePro Diesel</h3>
              <p className="text-gray-400 text-sm">Designed for diesel engines, offering excellent soot control and wear protection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts