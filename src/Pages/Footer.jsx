// Footer Component
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Back to Top Button */}
          <div className="text-center">
            <button 
              onClick={scrollToTop}
              className={`fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-300 ${
                isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              aria-label="Back to top"
            >
              {/* Up arrow icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4 text-pink-400">Make up by Barbie</h4>
              <p className="text-stone-300 mb-2">Professional Makeup Artist</p>
              <p className="text-stone-300">Nairobi, Kenya</p>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4 text-pink-400">Contact</h4>
              <p className="text-stone-300 mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +254 790 632 614
              </p>
              <p className="text-stone-300 mb-4 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                makeupbybarbie@gmail.com
              </p>
              <div className="flex space-x-4">
                <div className="space-y-4">
                  <a href="https://www.instagram.com/makeupby_.barbie?igsh=MWw4Z3F2Y3AzdnQ2Yg==" className="text-white hover:text-pink-400 transition-colors" aria-label="Instagram" title="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="https://www.tiktok.com/@makeupby_.barbie?_t=ZM-8wf9C35DNZd&_r=1" className="text-white hover:text-pink-400 transition-colors" aria-label="TikTok" title="TikTok">
                    <Music2 className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
import React, { useState } from 'react';
import { Phone, Mail, Instagram, Music2 } from 'lucide-react';