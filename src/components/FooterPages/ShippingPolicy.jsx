import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Shipping Policy</h1>

      <ul className="list-disc list-inside mb-10 space-y-4 text-gray-800 text-base leading-relaxed">
        <li>For products above ₹13,000, shipping charges will be free.</li>
        <li>For products below ₹8,000, shipping charges will be applicable.</li>
        <li>Customers redeeming vouchers will be exempted from shipping costs.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-center">ಶಿಪ್ಪಿಂಗ್ ನೀತಿ</h2>

      <ul className="list-disc list-inside space-y-4 text-gray-800 text-base leading-relaxed">
        <li>₹13,000/- ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಉತ್ಪನ್ನಗಳಿಗೆ ಶಿಪ್ಪಿಂಗ್ ಶುಲ್ಕಗಳು ಉಚಿತ.</li>
        <li>₹8,000/- ಕ್ಕಿಂತ ಕಡಿಮೆ ಉತ್ಪನ್ನಗಳಿಗೆ ಶಿಪ್ಪಿಂಗ್ ಶುಲ್ಕಗಳು ಅನ್ವಯವಾಗುತ್ತವೆ.</li>
        <li>ವೋಚರ್‌ಗಳನ್ನು ರಿಡೀಮ್ ಮಾಡುವ ಗ್ರಾಹಕರಿಗೆ ಶಿಪ್ಪಿಂಗ್ ವೆಚ್ಚಗಳು ಉಚಿತವಾಗಿರುತ್ತವೆ.</li>
      </ul>
    </div>
  );
};

export default ShippingPolicy;
