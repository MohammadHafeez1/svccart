import React, { useEffect, useState } from 'react';
import slide1 from '../../assets/slide1.jpg'; // Furniture
import slide2 from '../../assets/slide2.jpg'; // Home Appliances
import slide3 from '../../assets/slide3.jpg'; // Electronics
import offer1 from '../../assets/offer1.jpg'; // Replace with real offer image
import offer2 from '../../assets/offer2.jpg'; // Replace with real offer image

const slides = [
  {
    title: "Modern Furniture",
    description: "Style and comfort for every room in your home.",
    image: slide1,
    buttonText: "Shop Furniture",
    buttonLink: "/furniture",
    bgColor: "bg-[#fef5ef]",
    buttonColor: "bg-red-600"
  },
  {
    title: "Smart Home Appliances",
    description: "Upgrade your home with the latest smart appliances.",
    image: slide2,
    buttonText: "Explore Appliances",
    buttonLink: "/home-appliances",
    bgColor: "bg-[#f4f4f4]",
    buttonColor: "bg-gray-800"
  },
  {
    title: "Latest Electronics",
    description: "Discover the newest tech to power your lifestyle.",
    image: slide3,
    buttonText: "Browse Electronics",
    buttonLink: "/electronics",
    bgColor: "bg-[#eef6f7]",
    buttonColor: "bg-blue-600"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className={`${currentSlide.bgColor} transition-all duration-700`}>
      <div className="w-full px-4 py-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Hero Slide */}
          <div className="lg:col-span-2 relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-2xl h-[50vh] lg:h-[calc(100vh-130px)]">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8 text-white text-center">
              <div className="max-w-xl">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
                  {currentSlide.title}
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl mb-6 leading-relaxed">
                  {currentSlide.description}
                </p>
                <a
                  href={currentSlide.buttonLink}
                  className={`bg-white text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:scale-105 transition-transform duration-300 inline-block text-sm sm:text-lg font-semibold shadow-lg`}
                >
                  {currentSlide.buttonText}
                </a>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 flex gap-2 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === activeIndex ? 'bg-yellow-400' : 'bg-gray-300 bg-opacity-70'} hover:bg-yellow-300`}
                />
              ))}
            </div>
          </div>

          {/* Offer Banners for desktop */}
          <div className="hidden lg:flex flex-col gap-4 justify-between h-[calc(100vh-130px)]">
            <OfferCard src={offer1} title="Exclusive Offer" desc="Save big on furniture this week!" />
            <OfferCard src={offer2} title="Limited Time Deal" desc="Up to 40% off electronics." />
          </div>
        </div>

        {/* Offer Banners for mobile */}
        <div className="flex flex-col items-center gap-4 mt-4 lg:hidden">
          <OfferCard
            src={offer1}
            title="Exclusive Offer"
            desc="Save big on furniture this week!"
            isMobile
          />
          <OfferCard
            src={offer2}
            title="Limited Time Deal"
            desc="Up to 40% off electronics."
            isMobile
          />
        </div>
      </div>
    </section>
  );
};

const OfferCard = ({ src, title, desc, isMobile = false }) => {
  const mobileStyles = isMobile ? "w-full h-52" : "flex-1 h-48 sm:h-60";
  return (
    <div className={`relative bg-white rounded-xl overflow-hidden shadow-md flex items-end ${mobileStyles}`}>
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-4 text-center w-full bg-black bg-opacity-40 text-white">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Hero;
