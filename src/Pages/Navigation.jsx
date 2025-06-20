// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-pink-600">Make up by Barbie</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery') ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
            >
              Gallery
            </Link>
            <Link 
              to="/booking" 
              className={`${isActive('/booking') ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
            >
              Book Now
            </Link>
          </div>
          
          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-stone-600 hover:text-pink-600 transition-colors p-2 rounded-lg hover:bg-pink-50"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden z-20 sticky:top-0 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden mt-0'
        }`}>
          <div className="bg-white border-t border-stone-200 py-4 space-y-2">
            <Link 
              to="/" 
              onClick={handleNavigation}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 block ${
                isActive('/') 
                  ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                  : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={handleNavigation}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 block ${
                isActive('/services') 
                  ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                  : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              onClick={handleNavigation}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 block ${
                isActive('/gallery') 
                  ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                  : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/booking" 
              onClick={handleNavigation}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 block ${
                isActive('/booking') 
                  ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                  : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              Book Now
            </Link>
            
            {/* Mobile Contact Info */}
            <div className="border-t border-stone-200 pt-4 mt-4">
              <div className="px-4 space-y-2">
                <a 
                  href="tel:+254790632614" 
                  className="flex items-center text-stone-600 hover:text-pink-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +254 790 632 614
                </a>
                <a 
                  href="mailto:makeupbybarbie@example.com" 
                  className="flex items-center text-stone-600 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  makeupbybarbie@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed bg-black bg-opacity-25 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';