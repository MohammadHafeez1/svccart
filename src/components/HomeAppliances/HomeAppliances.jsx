// HomeAppliances.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

// Appliance images (replace with actual images if needed)
import A1 from "../../assets/E1.jpeg";
import A2 from "../../assets/E2.jpeg";
import A3 from "../../assets/E3.jpeg";
import A4 from "../../assets/E4.jpeg";
import A5 from "../../assets/E5.jpeg";
import A6 from "../../assets/E6.jpeg";
import A7 from "../../assets/F1.jpeg";
import A8 from "../../assets/F2.jpeg";
import A9 from "../../assets/F3.jpeg";
import A10 from "../../assets/F4.jpeg";
import A11 from "../../assets/g1.avif";
import A12 from "../../assets/g2.jpg";

const appliances = [
  {
    id: 1,
    name: "Samsung 256L Double Door Fridge",
    price: 28000,
    brand: "Samsung",
    energy: "4 Star",
    capacity: "256L",
    type: "Refrigerator",
    color: "Silver",
    location: "Mangalore",
    warranty: "1 Year",
    features: "Digital Inverter, Frost Free",
    images: [A1, A2, A3, A4],
  },
  {
    id: 2,
    name: "LG 7kg Front Load Washing Machine",
    price: 31000,
    brand: "LG",
    energy: "5 Star",
    capacity: "7kg",
    type: "Washing Machine",
    color: "White",
    location: "Mangalore",
    warranty: "2 Years",
    features: "Inverter Direct Drive, Smart Diagnosis",
    images: [A5, A6, A7],
  },
  {
    id: 3,
    name: "Sony 50-inch 4K Smart LED TV",
    price: 52000,
    brand: "Sony",
    energy: "5 Star",
    capacity: "50 inch",
    type: "Television",
    color: "Black",
    location: "Mangalore",
    warranty: "1 Year",
    features: "4K UHD, Google TV, HDR",
    images: [A8, A9, A10, A11],
  },
  {
    id: 4,
    name: "IFB 25L Convection Microwave Oven",
    price: 10500,
    brand: "IFB",
    energy: "3 Star",
    capacity: "25L",
    type: "Microwave",
    color: "Black",
    location: "Mangalore",
    warranty: "1 Year",
    features: "Touch Panel, Auto Cook",
    images: [A12, A3, A4],
  },
];

const filterOptions = {
  brand: ["Samsung", "LG", "Sony", "IFB"],
  energy: ["5 Star", "4 Star", "3 Star"],
  capacity: ["256L", "7kg", "50 inch", "25L"],
  type: ["Refrigerator", "Washing Machine", "Television", "Microwave"],
  color: ["Silver", "White", "Black"],
  warranty: ["1 Year", "2 Years"],
};

const HomeAppliances = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [emiModalOpen, setEmiModalOpen] = useState(false);
  const [emiItem, setEmiItem] = useState(null);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(8);
  const [loanTenure, setLoanTenure] = useState(36);
  const [emiResult, setEmiResult] = useState(0);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  useEffect(() => {
    setItems(appliances);
    setFilteredItems(appliances);
    const initialIndices = {};
    appliances.forEach((item) => {
      initialIndices[item.id] = 0;
    });
    setCurrentImageIndices(initialIndices);
  }, []);

  const applyFilters = () => {
    let filtered = items.filter(
      (item) =>
        item.price >= priceRange[0] &&
        item.price <= priceRange[1] &&
        Object.keys(filters).every((key) =>
          filters[key] ? item[key] === filters[key] : true
        )
    );
    setFilteredItems(filtered);
  };

  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = loanTenure;
    const p = loanAmount;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(emi.toFixed(2));
  };

  const openEmiModal = (item) => {
    setEmiItem(item);
    setLoanAmount(item.price);
    setEmiModalOpen(true);
  };

  const closeEmiModal = () => {
    setEmiModalOpen(false);
    setEmiItem(null);
    setEmiResult(0);
  };

  const nextImage = (itemId) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] + 1) % items.find((i) => i.id === itemId).images.length,
    }));
  };

  const prevImage = (itemId) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] - 1 + items.find((i) => i.id === itemId).images.length) %
        items.find((i) => i.id === itemId).images.length,
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-black p-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-6 uppercase">Home Appliances</h1>
        <div className="flex flex-col md:flex-row">
          <button
            className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          <div className={`md:w-1/4 w-full bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg ${showFilters ? 'block' : 'hidden'} md:block`}>
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
            <label className="block font-semibold">Price Range:</label>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100000}
            />
            {Object.keys(filterOptions).map((filter) => (
              <select
                key={filter}
                className="w-full p-2 border rounded mt-4"
                onChange={(e) => setFilters({ ...filters, [filter]: e.target.value })}
              >
                <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
                {filterOptions[filter].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </div>

          {/* Products */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative">
                <div className="relative">
                  <img
                    src={item.images[currentImageIndices[item.id]]}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                  />
                  {item.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-500 transition"
                        onClick={() => prevImage(item.id)}
                      >
                        <FaArrowLeft className="text-white" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-500 transition"
                        onClick={() => nextImage(item.id)}
                      >
                        <FaArrowRight className="text-white" />
                      </button>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{item.features}</p>
                  <p className="text-gray-500 dark:text-gray-300">📍 {item.location}</p>
                  <div className="flex items-center">
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mr-12">₹{item.price.toLocaleString()}</p>
                    <button
                      className="text-xs bg-green-600 text-white py-1 px-2 rounded-md hover:bg-green-500 transition"
                      onClick={() => openEmiModal(item)}
                    >
                      EMI CALCULATOR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {emiModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4">EMI Calculator</h2>
              <p className="mb-2">Item: {emiItem.name}</p>
              <label className="block mb-2">Loan Amount (₹):</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <label className="block mb-2">Interest Rate (%):</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <label className="block mb-2">Loan Tenure (Months):</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition mb-4"
                onClick={calculateEMI}
              >
                Calculate EMI
              </button>
              {emiResult > 0 && <p className="text-lg font-semibold">Monthly EMI: ₹{emiResult}</p>}
              <button
                className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-300 transition"
                onClick={closeEmiModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomeAppliances;
