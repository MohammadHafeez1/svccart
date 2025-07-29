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

    // Allow only digits for phone
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, '');
      setForm({ ...form, phone: digitsOnly });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) return;

    const whatsappNumber = '919108896247';

    const message = `Login Request:
Name: ${form.fullName}
Phone: ${form.phone}
Promoter Name: ${form.promoterName || 'N/A'}
Promoter ID: ${form.promoterId || 'N/A'}
Address: ${form.address}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    setMessageSent(true);
    setForm({
      fullName: '',
      phone: '',
      promoterName: '',
      promoterId: '',
      address: '',
    });
  };

  const isFormValid = form.fullName && form.phone.length === 10 && form.address;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Login</h2>

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
            maxLength="10"
            className="w-full p-3 border rounded-md text-gray-800"
          />
          {form.phone && form.phone.length !== 10 && (
            <p className="text-sm text-red-600">Phone number must be exactly 10 digits.</p>
          )}
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
            disabled={!isFormValid}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            Send Details via WhatsApp
          </button>
        </form>

        {messageSent && (
          <p className="mt-4 text-green-600 text-center text-sm">
             Please send hi message to svc whatsapp and try agin if any issue in placing order or scheme request.
          </p>
        )}
      </div>
    </div>
  );
};

export default SchemeJoin;
