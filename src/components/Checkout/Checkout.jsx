import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    const ownerPhone = "9535956247"; // Replace with your number

    const cartDetails = cartItems
      .map((item) => `• ${item.name} - ₹${item.discountedPrice}`)
      .join("\n");

    const message = `Hello, I'd like to place an order:\n\n${cartDetails}\n\nTotal: ₹${cartTotal.toLocaleString(
      "en-IN"
    )}\n\nCustomer Name: ${name}\nContact Number: ${phone}\nCustomer Address: ${address}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${ownerPhone}?text=${encodedMessage}`;

    const isMobile = /iPhone|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open in new tab for mobile
      window.open(url, "_blank");
    } else {
      // Open in current tab for desktop with slight delay
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            Your cart is empty.{" "}
            <Link to="/all" className="text-blue-600 underline">
              Go shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              {cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b py-2 text-gray-700"
                >
                  <span>{item.name}</span>
                  <span>₹{item.discountedPrice}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total:</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Contact Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full border px-3 py-2 rounded"
                />
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={!name || !phone}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
              >
                Place Order on WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
