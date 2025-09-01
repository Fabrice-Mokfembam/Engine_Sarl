import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { logo } from '../../../assets/images';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setShowLanguagePopup(false);
  };

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#F5F7FA] py-4'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Engine SARL" className="h-12 md:h-16 transition-all duration-300" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-[16px] font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                location.pathname === item.path 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section - Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Change Icon */}
          <div className="relative">
            <button 
              onClick={() => setShowLanguagePopup(!showLanguagePopup)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Change language"
            >
              <Globe size={20} className="text-gray-700" />
            </button>
            {showLanguagePopup && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg z-50 border border-gray-200 overflow-hidden animate-fadeIn">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                    language === 'en' 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                    language === 'fr' 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Français
                </button>
              </div>
            )}
          </div>
          
          <Link 
            to="/contact" 
            className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <div className="relative">
            <button 
              onClick={() => setShowLanguagePopup(!showLanguagePopup)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Change language"
            >
              <Globe size={20} className="text-gray-700" />
            </button>
            {showLanguagePopup && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg z-50 border border-gray-200 overflow-hidden animate-fadeIn">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                    language === 'en' 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 ${
                    language === 'fr' 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Français
                </button>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                location.pathname === item.path 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="block bg-primary text-white px-4 py-3 rounded-lg text-center font-medium mt-2 hover:bg-primary/90 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;