import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";



// Import components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Footer from "./components/Footer/Footer";

import ResponsiveMenu from "./components/Navbar/ResponsiveMenu";
import InfoFeatures from "./components/InfoFeatures/InfoFeatures";
import Listing from "./components/Listing/Listing";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import SchemeJoin from "./components/Scheme/SchemeJoin";
import SchemeBanner from "./components/Scheme/SchemeBanner";
import PrivacyPolicy from "./components/FooterPages/PrivacyPolicy";
import TermsOfUse from "./components/FooterPages/TermsOfUse";
import ShippingPolicy from "./components/FooterPages/ShippingPolicy";
import TermsAndConditions from "./components/FooterPages/TermsAndConditions";


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  return (
    <Router>
      {/* Removed CartProvider wrapper from here */}
      <div className=" bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        {/* Navbar will need to use `useCart` internally to get cart count */}
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="pt-20 pb-[70px]"/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero theme={theme} />
                <InfoFeatures />
                <Listing />
                <SchemeBanner/>
                <Footer />
              </>
            }
          />

          {/* Category routes */}
          <Route path="/all" element={<Listing />} />
          <Route path="/furniture" element={<Listing />} />
          <Route path="/document" element={<Listing />} />
          <Route path="/transport" element={<Listing />} />
          <Route path="/financial" element={<Listing />} />
          <Route path="/rooms" element={<Listing />} />
          <Route path="/Plastic-Items" element={<Listing />} />
          <Route path="/Gas-Services" element={<Listing />} />
          <Route path="/mobile" element={<Listing />} />

          <Route path="/electronics" element={<Listing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/scheme" element={<SchemeJoin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/shipping-policy" element={<ShippingPolicy/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          
          <Route path="/footer" element={<Footer />} />
          
          
          
          

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          

          {/* Optional: Redirect any unknown paths to /all */}
          <Route path="*" element={<Navigate to="/all" replace />} />
        </Routes>

        <ResponsiveMenu />
      </div>
    </Router>
  );
};

export default App;