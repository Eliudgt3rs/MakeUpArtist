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
      <footer className="bg-stone-800 text-white py-6">
        <div className="container mx-auto px-6">
          <a
  href="https://wa.me/254790632614"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition duration-300"
  title="Chat with me on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.77 11.77 0 0 0 12.01 0C5.37 0 .01 5.36.01 12c0 2.11.55 4.16 1.59 5.98L0 24l6.26-1.64A11.86 11.86 0 0 0 12.01 24c6.63 0 11.99-5.36 11.99-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.9c-1.95 0-3.88-.51-5.55-1.48l-.4-.23-3.71.97.99-3.61-.25-.43a9.9 9.9 0 0 1-1.43-5.23C2.65 6.3 6.93 2.1 12 2.1c2.63 0 5.1 1.02 6.95 2.86a9.77 9.77 0 0 1 2.89 6.94c0 5.07-4.28 9.2-9.84 9.2zm5.3-7.4c-.29-.14-1.72-.85-1.99-.95s-.46-.14-.66.14-.76.95-.93 1.15-.34.21-.63.07a8.1 8.1 0 0 1-2.38-1.47 8.74 8.74 0 0 1-1.6-1.99c-.17-.29 0-.45.13-.6.13-.14.29-.34.43-.51.14-.17.17-.29.26-.48.08-.17.04-.37-.02-.51s-.66-1.59-.9-2.17c-.24-.57-.48-.5-.66-.51h-.57c-.19 0-.5.07-.76.37s-1 1-.98 2.44 1 2.83 1.14 3.03c.14.19 2.04 3.12 4.95 4.38.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.57-.08 1.72-.7 1.96-1.37.24-.68.24-1.26.17-1.37-.06-.11-.26-.17-.54-.31z" />
  </svg>
</a>
          {/* Back to Top Button */}
          <div className="text-center">
            <button 
              onClick={scrollToTop}
              className={`fixed bottom-6 left-6 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-300 ${
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
            
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-pink-400">Contact</h4>
              <p className="text-stone-300 mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +254 790 632 614
              </p>
              <p className="text-stone-300 mb-6 flex items-center">
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
          <div className="text-right ">
            <p className="text-stone-300 text-sm">
              &copy; {new Date().getFullYear()} Makeup by Barbie. All rights reserved.
            </p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
import React, { useState } from 'react';
import { Phone, Mail, Instagram, Music2 } from 'lucide-react';