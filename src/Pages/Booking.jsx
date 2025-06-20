import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Navigation from './Navigation.jsx';   // Assuming you have a Navigation component
import Footer from './Footer.jsx'; // Assuming you have a Footer component

// Booking Page Component
const BookingPage = () => {
   
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: location.state?.service || 'Bridal Makeup'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const whatsappLink = `https://wa.me/254790632614?text=Hello%20Barbie%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(formData.service)}%20appointment%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}.%20My%20name%20is%20${encodeURIComponent(formData.name)}%20and%20my%20phone%20number%20is%20${encodeURIComponent(formData.phone)}.%20Regards.`;

  const handleEmailBooking = (e) => {
  e.preventDefault();

  const { name, email, phone, date, time, service } = formData;

  if (!name || !email || !phone || !date || !time) {
    alert("Please fill in all required fields before sending an email.");
    return;
  }

  const subject = `Appointment Request for ${service}`;
  const body = `Hello Barbie, I would like to book a ${service} appointment on ${date} at ${time}.My contact details:Name: ${name}Email: ${email}Phone: ${phone}Thank you!`;

  const mailtoLink = `mailto:eliudgachuki130@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

  return (
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
            
            <button
  onClick={handleEmailBooking}
  className="bg-pink-600 text-white px-6 py-3 rounded-4xl flex items-center justify-center hover:bg-pink-700 transition-colors"
>
  <Mail className="w-5 h-5 mr-2" />
  Book via Email
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;



