// src/pages/TermsAndConditions.js
import React from 'react';
import termsImage from '../../assets/terms.jpg'; // Adjust path based on your folder structure

const TermsAndConditions = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h1>
      <img
        src={termsImage}
        alt="Terms and Conditions"
        className="w-full h-auto rounded shadow"
      />
    </div>
  );
};

export default TermsAndConditions;
