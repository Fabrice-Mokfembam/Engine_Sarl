import React from 'react'
import { logo } from '../../../assets/images';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#2c2c2c' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logo} 
              alt="Engine SARL Logo" 
              className="h-16 mb-4"
            />
            <p className="text-sm">
              Cameroon's premier engine oil manufacturer and distributor.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>ATF 45 Engine Oil</li>
              <li>15W 40 Engine Oil</li>
              <li>10W 30 Engine Oil</li>
              <li>0W 20 Engine Oil</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Oil Replacement</li>
              <li>Oil Distribution</li>
              <li>Consultation</li>
              <li>Maintenance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6" />
              <Instagram className="h-6 w-6" />
              <Twitter className="h-6 w-6" />
              <Linkedin className="h-6 w-6" />
            </div>
            <p className="mt-4 text-sm">
              Email: info@engine-sarl.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Engine SARL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer