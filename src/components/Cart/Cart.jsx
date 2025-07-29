// src/pages/Cart/Cart.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import couponImage from "../../assets/coupon.jpg";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    setCouponApplied(true); // Only show success message, no redirect
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            Your cart is empty.
            <br />
            <Link to="/all" className="text-blue-600 underline mt-2 inline-block">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md bg-gray-50"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-red-600 font-bold">₹{item.discountedPrice}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b border-gray-200 text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium ml-4"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* 🏷️ Coupon Section */}
            <div className="bg-gray-50 rounded-lg p-4 mt-4 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <img
                  src={couponImage}
                  alt="Coupon"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {!couponApplied ? (
                  <>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">
                      Apply for Coupon
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Get exclusive discounts with our limited-time coupons.
                    </p>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-max"
                      onClick={handleApplyCoupon}
                    >
                      Apply for Giveaway Coupon
                    </button>
                  </>
                ) : (
                  <div className="text-green-600 font-semibold text-md">
                    🎉 Coupon successfully applied! Our team will contact you soon.
                  </div>
                )}
              </div>
            </div>

            {/* ✅ Cart Summary */}
            <div className="pt-6 border-t">
              <div className="flex justify-between text-xl font-semibold text-gray-800">
                <span>Total</span>
                <span>
                  ₹
                  {cartTotal.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
