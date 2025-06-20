// Gallery Page Component
const GalleryPage = () => {
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

  return (
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
  );
};

export default GalleryPage;