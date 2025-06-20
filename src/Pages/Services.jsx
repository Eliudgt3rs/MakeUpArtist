import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const ServicesPage = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      price: 'KSh 8,000',
      state: 'Bridal Makeup',
      description: 'Looking your absolute best on your special day is our priority. Our bridal package includes:',
      features: [
        'Consultation and trial session',
        'Premium, long-lasting products',
        'Day-of makeup application',
        'Touch-up kit for the day',
      ],
    },
    {
      title: 'Special Occasion',
      price: 'KSh 4,000',
      state: 'Special Occasion',
      description: 'Perfect for parties, events, photoshoots, and special celebrations. This service includes:',
      features: [
        'Consultation to determine desired look',
        'High-quality, camera-friendly makeup',
        'Lashes (optional)',
        'Basic touch-up tips',
      ],
    },
    {
      title: 'Natural Everyday Look',
      price: 'KSh 2,500',
      state: 'Natural Everyday Look',
      description: "A subtle enhancement that's perfect for daily wear or a professional setting:",
      features: [
        'Lightweight foundation or tinted moisturizer',
        'Natural-looking enhancements',
        'Quick application (approximately 45 minutes)',
        'Workplace-appropriate options',
      ],
    },
    {
      title: 'Makeup Class',
      price: 'KSh 7,500',
      state: 'Makeup Class',
      description: 'Learn to create your own stunning looks with a personalized makeup lesson:',
      features: [
        '2-hour personal or group session for one week',
        'Learn techniques customized to your features',
        'Product recommendations',
        'Written notes to take home',
      ],
    },
  ];

  return (
    <motion.div
      className="py-6 bg-pink-50"
      initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-semibold text-center mb-6 text-stone-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              custom={i}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-600">{service.title}</h3>
              <p className="text-stone-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside mb-4 text-stone-600">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="font-bold text-stone-800 mb-4">{service.price}</p>
              <Link
                to="/booking"
                state={{ service: service.state }}
                className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition-colors font-semibold"
              >
                Book This Service
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
