import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../../data/productData';
import { tenw } from '../../../assets/videos';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product images for demonstration
  const productImages = [
    '/path/to/product-image-1.jpg',
    '/path/to/product-image-2.jpg',
    '/path/to/product-image-3.jpg',
    '/path/to/product-image-4.jpg'
  ];

  useEffect(() => {
    // Auto-rotate product images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [productImages.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Video background */}
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
            poster="/path/to/video-poster.jpg"
          >
            <source src={tenw} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              {product.name} <span className="text-secondary">Engine Oil</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Premium performance for your engine in Cameroonian conditions
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link 
                to="/products" 
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                View All Products
              </Link>
              <a 
                href="#product-info" 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                Product Details
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 z-10">
          <a href="#product-info" className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Product Detail Section */}
      <div id="product-info" className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Gallery */}
            <div className="relative">
              <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl font-bold text-primary">{product.name}</span>
                    </div>
                    <p className="text-gray-600 font-medium">High-resolution product image</p>
                  </div>
                </div>
              </div>
              
              {/* Image thumbnails */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {productImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${currentImage === index ? 'ring-2 ring-secondary' : 'opacity-70'}`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500">Image {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full mb-2">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Oil
                  </span>
                  <h1 className="text-4xl font-bold text-primary mb-2">{product.name}</h1>
                </div>
                <div className="bg-white rounded-full px-3 py-1 shadow-md flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-gray-800">{product.rating}</span>
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{product.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12v.01M15 12v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <span className="text-gray-600 block mb-1">Viscosity:</span>
                    <p className="font-semibold text-primary">{product.specifications.viscosity}</p>
                  </div>
                  <div>
                    <span className="text-gray-600 block mb-1">Type:</span>
                    <p className="font-semibold text-primary">{product.specifications.type}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-600 block mb-1">Applications:</span>
                    <p className="font-semibold text-primary">{product.specifications.applications}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector and Price */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
           
                
                <div className="text-right">
                  <span className="text-3xl font-bold text-secondary block">{product.price.toLocaleString()} FCFA</span>
                  <span className="text-sm text-gray-500">per container</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
               
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 shadow-lg transition-all duration-300">
                  Contact to Order Now
                </button>
              </div>

           
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 3).map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{relatedProduct.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">{relatedProduct.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-secondary">{relatedProduct.price.toLocaleString()} FCFA</span>
                    <Link 
                      to={`/products/${relatedProduct.id}`}
                      className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;