import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/scheme1.png';
import banner2 from '../../assets/scheme2.png';

const SchemeBanner = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/scheme');
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto my-6 overflow-hidden rounded-xl shadow-lg">
      {/* Images Grid - stay 2 cols even on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2">
        <div className="w-full aspect-[4/3]">
          <img
            src={banner1}
            alt="SVC Scheme"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>
        <div className="w-full aspect-[4/3]">
          <img
            src={banner2}
            alt="SVC Scheme Offer"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>

      {/* Floating Button – Bottom-center, responsive sizing */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-4">
        <button
          onClick={handleJoinClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     py-2 px-4 text-xs rounded-full shadow-xl 
                     sm:py-3 sm:px-6 sm:text-base 
                     transition-all duration-300 transform hover:scale-105 pointer-events-auto"
        >
          👉 Join Our Scheme Now
        </button>
      </div>
    </div>
  );
};

export default SchemeBanner;
