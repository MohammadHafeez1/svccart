import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
      <p className="mb-4">
        Orders are processed within 1-2 business days. Delivery times vary by location but typically range from 3–7 business days.
      </p>
      <p>
        We currently ship only within India. Tracking information will be provided once your order is shipped.
      </p>
      <p>
        Free shipping above 10000 rupees order only.
      </p>
    </div>
  );
};

export default ShippingPolicy;
