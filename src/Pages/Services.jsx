// Services Page Component
const ServicesPage = () => {
  return (
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
            <Link
              to="/booking"
              state={{ service: 'Bridal Makeup' }}
              className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors inline-block"
            >
              Book This Service
            </Link>
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
            <Link
              to="/booking"
              state={{ service: 'Special Occasion' }}
              className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors inline-block"
            >
              Book This Service
            </Link>
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
            <Link
              to="/booking"
              state={{ service: 'Natural Everyday Look' }}
              className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors inline-block"
            >
              Book This Service
            </Link>
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
            <Link
              to="/booking"
              state={{ service: 'Makeup Class' }}
              className="bg-pink-600 text-white px-4 py-2 rounded-4xl hover:bg-pink-700 transition-colors inline-block"
            >
              Book This Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
import React from 'react';
import { Link } from 'react-router-dom';