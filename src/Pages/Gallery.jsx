/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
<Helmet>
  <title>Gallery – Makeup by Barbie</title>
  <meta name="description" content="View beautiful glam and bridal makeup work by Barbie." />
</Helmet>

const GalleryPage = () => {
  const gallery = [
    { src: 'WhatsAppVideo2025-06-21at00.20.52_11633a2a.mp4', alt: 'The process' },
    { src: 'WhatsAppVideo2025-06-21at00.20.37_ce4ec2a5.mp4', alt: 'Classic makeup look' },
    { src: 'Image1.jpg', alt: 'Glamour makeup look' },
    { src: 'IMG-20250526-WA0006.jpg', alt: 'Natural makeup look' },
    { src: 'IMG-20250526-WA0035.jpg', alt: 'Evening makeup look' },
    { src: 'IMG-20250526-WA0011.jpg', alt: 'Bridal makeup look' },
    { src: 'IMG-20250526-WA0015.jpg', alt: 'Editorial makeup look' },
    { src: 'New.jpg', alt: 'Colorful creative makeup' },
    { src: 'IMG-20250526-WA0007.jpg', alt: 'Classic makeup look' },
    { src: 'IMG-20250526-WA0024.jpg', alt: 'Fashion makeup look' },
    { src: 'IMG-20250526-WA0039.jpg', alt: 'Makeup for photoshoot' },
  
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
      className="py-12 bg-pink-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-stone-800 mb-14">
          Happy Clients
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gallery.map((item, index) => {
  const isVideo = item.src.endsWith('.mp4');

  return (
    <motion.div
      key={index}
      className="overflow-hidden rounded-2xl shadow-md bg-white"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 150 }}
    >
      {isVideo ? (
        <video
          src={item.src}
          controls
          className="w-full h-64 object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      )}
      <div className="p-3">
        <h4 className="text-sm font-medium text-stone-700">{item.alt}</h4>
      </div>
    </motion.div>
  );
})}


          {/* Instagram CTA */}
          <motion.div
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-white p-8 rounded-2xl shadow-md text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-stone-800 mb-3">More Looks</h3>
            <p className="text-stone-600 mb-6">
              Explore more of my work on Instagram for daily updates and inspiration.
            </p>
            <a
              href="https://www.instagram.com/makeupby_.barbie?igsh=ZXphYTd6MzF6OGV6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition-colors inline-block font-semibold"
            >
              Follow me on Instagram
            </a>
          </motion.div>
        </div>

        <p className="text-center mt-10 text-stone-600 max-w-2xl mx-auto text-lg">
          These are just a few examples of my work. Every look is tailored to bring out your natural beauty and personal style.
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryPage;
