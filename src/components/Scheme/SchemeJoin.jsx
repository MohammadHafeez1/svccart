// src/pages/SchemeJoin.jsx

import React, { useState } from 'react';

const SchemeJoin = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    promoterName: '',
    promoterId: '',
    address: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownerWhatsAppNumber = '9535956247';

    const message = `
New Scheme Join Request:
-----------------------
Name: ${form.fullName}
Phone: ${form.phone}
Promoter Name: ${form.promoterName}
Promoter ID: ${form.promoterId}
Address: ${form.address}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setMessageSent(true);
    setForm({
      fullName: '',
      phone: '',
      promoterName: '',
      promoterId: '',
      address: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Join the Scheme</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md text-gray-800"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md text-gray-800"
          />
          <input
            type="text"
            name="promoterName"
            placeholder="Promoter Name (Optional)"
            value={form.promoterName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-gray-800"
          />
          <input
            type="text"
            name="promoterId"
            placeholder="Promoter ID (Optional)"
            value={form.promoterId}
            onChange={handleChange}
            className="w-full p-3 border rounded-md text-gray-800"
          />
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full p-3 border rounded-md text-gray-800"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Details via WhatsApp
          </button>
        </form>

        {messageSent && (
          <p className="mt-4 text-green-600 text-center text-sm">
            Message sent! Please check your WhatsApp.
          </p>
        )}
      </div>
    </div>
  );
};

export default SchemeJoin;
