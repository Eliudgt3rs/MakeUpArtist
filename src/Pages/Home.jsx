import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// Home Page Component
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

  const handleCall = async () => {const phoneNumber = "+254790632614";
      try {
        await navigator.clipboard.writeText(phoneNumber);
        alert("Phone number copied to clipboard!");

        // Trigger phone dialer
        window.location.href = `tel:${phoneNumber}`;
      } catch (err) {
        console.error("Failed to copy number: ", err);
        alert("Failed to copy phone number.");
      }
    };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold text-stone-800 leading-tight mb-6">Enhance Your Natural Beauty</h2>
            <p className="text-stone-600 mb-8 text-lg">
              Professional makeup artistry in Nairobi, Kenya. Specializing in bridal, special occasions, and personal makeup lessons.
            </p>
            <Link
              to="/booking"
              className="bg-pink-600 text-white px-6 py-3 rounded-4xl shadow-md hover:bg-pink-700 font-semibold transition-colors inline-block"
            >
              Book an Appointment
            </Link>
             <button
              onClick={handleCall}
              className="bg-pink-600 text-white px-6 py-3 rounded-4xl font-semibold shadow-md hover:bg-pink-700 transition-colors inline-block ml-4"
            >
              Call Now
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
            <Link
              to="/services"
              className="px-6 py-2 border border-pink-600 text-pink-600 rounded-4xl hover:bg-pink-50 transition-colors inline-block"
            >
              View All Services
            </Link>
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
  );
};

export default HomePage;
// Note: This code assumes you have a Router setup in your main application file (e.g., App.jsx) to handle the routing.
