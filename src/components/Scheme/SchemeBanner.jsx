import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../assets/scheme1.jpg';
import banner2 from '../../assets/scheme2.jpg';
import banner3 from '../../assets/scheme3.jpg';

const SchemeBanner = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/scheme');
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto my-6 overflow-hidden rounded-xl shadow-lg bg-white">
      {/* Image Grid - 1 column on mobile, 3 columns on medium and up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[banner1, banner2, banner3].map((img, idx) => (
          <div
            key={idx}
            className="w-full h-full flex items-center justify-center p-2"
          >
            <img
              src={img}
              alt={`SVC Scheme ${idx + 1}`}
              className="w-full h-auto max-h-72 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Button Below the Images */}
      <div className="flex justify-center py-6">
        <button
          onClick={handleJoinClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     py-2 px-4 text-sm rounded-full shadow-xl 
                     sm:py-3 sm:px-6 sm:text-base 
                     transition-all duration-300 transform hover:scale-105"
        >
          👉 Join Our Scheme Now
        </button>
      </div>
    </div>
  );
};

export default SchemeBanner;
