import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import PaymentLogos from "../../assets/payment-methods.png"; // Rename your screenshot to this

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-100 px-6 md:px-16 py-8 border-t border-gray-300 text-sm text-gray-600 scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Side - Logo + Company Info */}
        <div className="flex md:w-1/3 w-full rounded-md shadow-md overflow-hidden bg-white">
          <div className="flex items-center justify-center p-4">
            <img
              src={Logo}
              alt="Smart Vision Corporation Logo"
              className="h-full max-h-60 w-auto object-contain"
            />
          </div>

          <div className="p-4 flex flex-col justify-center space-y-2 text-left">
            <h3 className="text-xl font-bold text-gray-800">
              SMART VISION CORPORATION
            </h3>
            <p className="font-medium">
              Smart Vision Corporation Group Pvt. Ltd.
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@svcgroup.in"
                className="text-blue-500 hover:underline"
              >
                info@svcgroup.in
              </a>
            </p>
            <p>GST No: 29AFPFS5082N1ZY</p>
            <p>
              <strong>Head Office:</strong>
              <br />
              Creek Galaxy,
              <br />
              Pumpwell, Mangalore 
              <br />
            </p>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="flex flex-col md:flex-row flex-1 justify-between mt-8 md:mt-0">
          <div className="flex flex-row flex-wrap w-full justify-between gap-6 text-sm">
            {/* Information */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                Information
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="hover:underline">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="hover:underline">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            

            {/* Tags */}
            <div className="flex-1 min-w-[120px]">
              <h3 className="text-base font-semibold text-gray-800 mb-3 text-center md:text-left">
                Tags
              </h3>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["Electronics", "Home Appliances", "Furniture"].map((tag) => (
                  <li
                    key={tag}
                    className="bg-white border border-gray-300 rounded-full px-4 py-1 text-gray-700 text-xs hover:bg-gray-200 transition-all w-fit"
                  >
                    <Link to={`/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Logos */}
      <div className="mt-10 flex justify-center">
        <img
          src={PaymentLogos}
          alt="Payment Methods"
          className="max-w-full h-auto w-72 sm:w-96 object-contain"
        />
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
        &copy; <span className="text-lime-600 font-semibold">SvcCart</span> 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
