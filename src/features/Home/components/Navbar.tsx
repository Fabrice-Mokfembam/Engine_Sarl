
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { logo } from '../../../assets/images';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'fr' for French
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Current theme:', language);
  }, [theme]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setShowLanguagePopup(false);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className=" bg-[#F5F7FA] p-4 w-full h-[86px] border-b border-gray-50 flex justify-center">
      <div className="h-full w-[88vw] mx-auto flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="text-text text-2xl font-bold mt-16">
          <div className='size-40 bottom-0'>
            <img src={logo} alt="" />
          </div>
          
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-9 text-[17px]">

          <Link to="/" className="text-text hover:text-gray-300">Home</Link>
          <Link to="/products" className="text-text hover:text-gray-300">Products</Link>
          <Link to="/services" className="text-text hover:text-gray-300">Services</Link>
          <Link to="/blog" className="text-text hover:text-gray-300">Blog</Link>
          <Link to="/about" className="text-text hover:text-gray-300">About Us</Link>
        
        </div>

        {/* Right Section - Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Change Icon */}
          <div className="relative">
            <button onClick={() => setShowLanguagePopup(!showLanguagePopup)}>
              <Globe className="lucide lucide-globe" />
            </button>
            {showLanguagePopup && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-50">
                <button
                  onClick={() => { handleLanguageChange('en'); }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => { handleLanguageChange('fr'); }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  French
                </button>
              </div>
            )}
          </div>
          {/* Theme Toggle Icon */}
          <button
            onClick={toggleTheme}
            className=""
          >
            {theme === 'light' ? (
              <Moon className="lucide lucide-moon" />
            ) : (
              <Sun className="lucide lucide-sun" />
            )}
          </button>
          <Link to={'/contact'} className="bg-[#0056D2] text-white px-4 py-2  hover:bg-blue-700 transition duration-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#f5f7fa] z-50">
          <Link to="/" className="block text-text px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="block text-text px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/services" className="block text-text px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/blog" className="block text-text px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/about" className="block text-text px-4 py-2 hover:bg-gray-200" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="block bg-[#0056D2] text-white px-4 py-2  hover:bg-blue-700 mt-2 mx-4" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;