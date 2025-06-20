import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram, Music2 } from 'lucide-react';
import "./App.css"

// Main component for the Makeup Website
const MakeupWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'Bridal Makeup'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle navigation and close mobile menu
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    {
      title: 'Bridal Makeup',
      description: 'Stunning makeup for your special day, includes trial session',
      price: 'KSh 8,000'
    },
    {
      title: 'Special Occasion',
      description: 'Perfect for parties, photoshoots, and special events',
      price: 'KSh 4,000'
    },
    {
      title: 'Natural Everyday Look',
      description: 'Subtle enhancement for daily wear',
      price: 'KSh 2,500'
    },
    {
      title: 'Makeup Class',
      description: 'Learn techniques to create your own stunning looks',
      price: 'KSh 7,500'
    }
  ];

  const gallery = [
    { src: 'src/Happy Clients/Image1.jpg', alt: 'Glamour makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0006.jpg', alt: 'Natural makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0008.jpg', alt: 'Bridal makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0035.jpg', alt: 'Evening makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0011.jpg', alt: 'Bridal makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0015.jpg', alt: 'Editorial makeup look' },
    { src: 'src/Happy Clients/New.jpg', alt: 'Colorful creative makeup' },
    { src: 'src/Happy Clients/IMG-20250526-WA0007.jpg', alt: 'Classic makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0024.jpg', alt: 'Fashion makeup look' },
    { src: 'src/Happy Clients/IMG-20250526-WA0039.jpg', alt: 'Makeup for photoshoot' }
  ];

  const whatsappLink = `https://wa.me/254790632614?text=Hello%20Barbie%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(formData.service)}%20appointment%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}%20and%20my%20phone%20number%20is%20${encodeURIComponent(formData.phone)}.%20Regards.`;

  const emailLink = `mailto:makeupbybarbie@gmail.com?subject=Appointment%20Request%20for%20${encodeURIComponent(formData.service)}&body=Hello%20Barbie%2C%0A%0AI%20would%20like%20to%20book%20a%20${encodeURIComponent(formData.service)}%20appointment%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}.%0A%0AMy%20contact%20details%3A%0AName%3A%20${encodeURIComponent(formData.name)}%0AEmail%3A%20${encodeURIComponent(formData.email)}%0APhone%3A%20${encodeURIComponent(formData.phone)}%0A%0AThank%20you!`;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Enhanced Navigation with Dropdown */}
      <nav className="bg-white shadow-md relative z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-semibold text-pink-600">Make up by Barbie</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => setActiveTab('home')} 
                className={`${activeTab === 'home' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveTab('services')} 
                className={`${activeTab === 'services' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
              >
                Services
              </button>
              <button 
                onClick={() => setActiveTab('gallery')} 
                className={`${activeTab === 'gallery' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
              >
                Gallery
              </button>
              <button 
                onClick={() => setActiveTab('booking')} 
                className={`${activeTab === 'booking' ? 'text-pink-600 border-b-2 border-pink-600' : 'text-stone-600 hover:text-pink-600'} transition-all duration-200 py-1`}
              >
                Book Now
              </button>
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
              <button 
                onClick={() => handleNavigation('home')} 
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'home' 
                    ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                    : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'services' 
                    ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                    : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('gallery')} 
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'gallery' 
                    ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                    : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('booking')} 
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === 'booking' 
                    ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                    : 'text-stone-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Book Now
              </button>
              
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
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed bg-black bg-opacity-25 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Home Section */}
      {activeTab === 'home' && (
        <div>
          {/* Hero Section */}
          <div className="bg-pink-50 py-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-4xl font-bold text-stone-800 leading-tight mb-6">Enhance Your Natural Beauty</h2>
                <p className="text-stone-600 mb-8 text-lg">
                  Professional makeup artistry in Nairobi, Kenya. Specializing in bridal, special occasions, and personal makeup lessons.
                </p>
                <button
                  onClick={() => setActiveTab('booking')}
                  className="bg-pink-600 text-white px-6 py-3 rounded-4xl shadow-md hover:bg-pink-700 transition-colors"
                >
                  Book an Appointment
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="src/Happy Clients/IMG-20250526-WA0030.jpg" 
                  alt="Makeup by Barbie hero image" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Featured Services */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-semibold text-center mb-12">Featured Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold mb-2 text-pink-600">{service.title}</h4>
                    <p className="text-stone-600 mb-4">{service.description}</p>
                    <p className="font-bold text-stone-800">{service.price}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-6 py-2 border border-pink-600 text-pink-600 rounded-4xl hover:bg-pink-50 transition-colors"
                >
                  View All Services
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="py-16 bg-stone-100">
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-semibold text-center mb-12">Client Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-stone-600 mb-4">
                    "Barbie did my bridal makeup and I couldn't have been happier with the results. She truly understood the look I wanted and made me feel beautiful on my special day."
                  </p>
                  <p className="font-semibold text-stone-800">- Sarah M.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-stone-600 mb-4">
                    "I took a makeup class with Barbie and learned so many techniques I now use daily. She's patient, knowledgeable, and really passionate about makeup!"
                  </p>
                  <p className="font-semibold text-stone-800">- Michelle K.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-stone-600 mb-4">
                    "The makeup Barbie did for my corporate photoshoot was perfect - professional yet flattering. She knows exactly how to enhance your best features."
                  </p>
                  <p className="font-semibold text-stone-800">- Jane A.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <div className="py-16 bg-pink-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">Bridal Makeup</h3>
                <p className="text-stone-600 mb-4">
                  Looking your absolute best on your special day is our priority. Our bridal package includes:
                </p>
                <ul className="list-disc list-inside mb-4 text-stone-600">
                  <li>Consultation and trial session</li>
                  <li>Premium, long-lasting products</li>
                  <li>Day-of makeup application</li>
                  <li>Touch-up kit for the day</li>
                </ul>
                <p className="font-bold text-stone-800 mb-4">KSh 8,000</p>
                <button
                  onClick={() => {
                    setFormData(prev => ({...prev, service: 'Bridal Makeup'}));
                    setActiveTab('booking');
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors"
                >
                  Book This Service
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">Special Occasion</h3>
                <p className="text-stone-600 mb-4">
                  Perfect for parties, events, photoshoots, and special celebrations. This service includes:
                </p>
                <ul className="list-disc list-inside mb-4 text-stone-600">
                  <li>Consultation to determine desired look</li>
                  <li>High-quality, camera-friendly makeup</li>
                  <li>Lashes (optional)</li>
                  <li>Basic touch-up tips</li>
                </ul>
                <p className="font-bold text-stone-800 mb-4">KSh 4,000</p>
                <button
                  onClick={() => {
                    setFormData(prev => ({...prev, service: 'Special Occasion'}));
                    setActiveTab('booking');
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors"
                >
                  Book This Service
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">Natural Everyday Look</h3>
                <p className="text-stone-600 mb-4">
                  A subtle enhancement that's perfect for daily wear or a professional setting:
                </p>
                <ul className="list-disc list-inside mb-4 text-stone-600">
                  <li>Lightweight foundation or tinted moisturizer</li>
                  <li>Natural-looking enhancements</li>
                  <li>Quick application (approximately 45 minutes)</li>
                  <li>Workplace-appropriate options</li>
                </ul>
                <p className="font-bold text-stone-800 mb-4">KSh 2,500</p>
                <button
                  onClick={() => {
                    setFormData(prev => ({...prev, service: 'Natural Everyday Look'}));
                    setActiveTab('booking');
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors"
                >
                  Book This Service
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">Makeup Class</h3>
                <p className="text-stone-600 mb-4">
                  Learn to create your own stunning looks with a personalized makeup lesson:
                </p>
                <ul className="list-disc list-inside mb-4 text-stone-600">
                  <li>2-hour personal or group session for one week</li>
                  <li>Learn techniques customized to your features</li>
                  <li>Product recommendations</li>
                  <li>Written notes to take home</li>
                </ul>
                <p className="font-bold text-stone-800 mb-4">KSh 7,500</p>
                <button
                  onClick={() => {
                    setFormData(prev => ({...prev, service: 'Makeup Class'}));
                    setActiveTab('booking');
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <div className="py-8 bg-pink-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Happy Clients</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-stone-800">{image.alt}</h4>
                  </div>
                </div>
              ))}

              {/* Additional placeholder images */}
              <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-stone-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-center mb-4">More Looks</h3>
                <p className="text-stone-600 text-center">
                  Explore more of my work on Instagram for daily updates and inspiration.
                </p>
                <div className="flex justify-center mt-4">
                  <a 
                    href="https://www.instagram.com/makeupby_.barbie?igsh=ZXphYTd6MzF6OGV6&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-600 outline rounded-4xl p-1 hover:text-pink-700 transition-colors"
                  >
                    Follow me on Instagram
                  </a>
                </div>
                </div>
            </div>
            <p className="text-center mt-8 text-stone-600">
              These are just a few examples of my work. Each look is customized to enhance your unique features.
            </p>
          </div>
        </div>
      )}

      {/* Booking Section */}
      {activeTab === 'booking' && (
        <div className="py-10 bg-pink-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-4">Book an Appointment</h2>
            <p className="text-center text-stone-600 mb-6">
              Fill out the form below and choose whether to send your booking request via WhatsApp or Email.
            </p>
            
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Enter your full name'
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder='Enter your email address'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder='Enter your phone number'
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="service">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Special Occasion">Special Occasion</option>
                    <option value="Natural Everyday Look">Natural Everyday Look</option>
                    <option value="Makeup Class">Makeup Class</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-stone-700 mb-2" htmlFor="time">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-4xl flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                
                <a
                  href={emailLink}
                  className="bg-pink-600 text-white px-6 py-3 rounded-4xl flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Book via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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
                <a href="https://www.tiktok.com/@makeupby_.barbie?_t=ZM-8wf9C35DNZd&_r=1" className="text-white hover:text-pink-400 transition-colors" aria-label="Instagram" title="Instagram">
                  <Music2 className="w-6 h-6" />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MakeupWebsite;
            