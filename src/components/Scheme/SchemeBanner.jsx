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
    <div className="w-full max-w-screen-lg mx-auto my-6 overflow-hidden rounded-xl shadow-lg bg-white p-4">
      {/* Grid: Image - Button - Image */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        {/* First Image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={banner1}
            alt="SVC Scheme 1"
            className="w-full h-auto max-h-72 object-contain"
          />
        </div>

        {/* Center Button */}
        <div className="flex justify-center items-center">
  <div className="flex flex-col items-center space-y-4">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
   Want to WIN Exciting Giveaway Prizes? 🎉
  </h2>

  <button
    onClick={handleJoinClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
               px-6 py-3 text-base rounded-md shadow-md 
               transition-colors duration-300"
  >
    Shop & Join Now
  </button>
</div>


</div>


        {/* Second Image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={banner2}
            alt="SVC Scheme 2"
            className="w-full h-auto max-h-72 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SchemeBanner;
