/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      description: 'Stunning makeup for your special day, includes trial session',
      price: 'KSh 8,000'
    },
    {
      title: 'Special Occasion',
      description: 'Perfect for parties, photoshoots, and special events',
      price: 'KSh 4,500'
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

  const handleCall = async () => {
    const phoneNumber = "+254790632614";
    try {
      await navigator.clipboard.writeText(phoneNumber);
      
      window.location.href = `tel:${phoneNumber}`;
    } catch (err) {
      console.error("Failed to copy number: ", err);
      alert("Failed to copy phone number.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      {/* Hero Section */}
      <section className="bg-pink-50 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-stone-800 leading-tight mb-6">
              Enhance Your Natural Beauty.
            </h2>
            <p className="text-stone-600 mb-8 text-lg">
              Professional make up services tailored to your unique style and occasion. From bridal glam to everyday elegance, I bring out the best in you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="bg-pink-600 text-white px-4 py-3 rounded-4xl shadow-md hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600 transition duration-300 font-semibold"
              >
                Book an Appointment
              </Link>
              <button
                onClick={handleCall}
                className="bg-white text-pink-600 px-4 rounded-4xl shadow-md hover:bg-pink-600 hover:text-white transition duration-300 border border-pink-600 font-semibold"
              >
               📞 Call Now
              </button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img
              src="src/Happy Clients/IMG-20250526-WA0030.jpg"
              alt="Makeup by Barbie"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-6 bg-pink-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6 text-stone-800">Featured Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-stone-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-pink-600">{service.title}</h4>
                <p className="text-stone-600 mb-3">{service.description}</p>
                <p className="font-bold text-stone-800">{service.price}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/services"
              className="px-6 py-2 border border-pink-600 text-pink-600 rounded-3xl hover:bg-pink-100 transition-colors duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 bg-pink-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6 text-stone-800">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: `"Barbie did my bridal makeup and I couldn't have been happier with the results. She truly understood the look I wanted and made me feel beautiful on my special day."`,
                name: '- Gloria M.'
              },
              {
                quote: `"I took a makeup class with Barbie and learned so many techniques I now use daily. She's patient, knowledgeable, and really passionate about makeup!"`,
                name: '- Natalie K.'
              },
              {
                quote: `"The makeup Barbie did for my corporate photoshoot was perfect – professional yet flattering. She knows exactly how to enhance your best features."`,
                name: '- Irene A.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -3 }}
              >
                <p className="italic text-stone-600 mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-stone-800">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-pink-600 py-6">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Glow?</h3>
          <p className="text-white mb-6">Book your appointment today and let us bring out the best in you!</p>
          <Link
            to="/booking"
            className="bg-white text-pink-600 px-8 py-3 rounded-full shadow-md hover:bg-pink-100 transition-colors duration-300 font-semibold"
          >
            Book Now
          </Link>
        </div> 
      </section>
    </motion.div>
  );
};


export default HomePage;
