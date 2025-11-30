import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Images
import categoryAll from "../../assets/category-all.jpg";
import categoryFurniture from "../../assets/category-furniture.jpg";
import categoryHome from "../../assets/category-home.jpg";
import categoryElectronics from "../../assets/category-electronics.jpg";
import lsofa from "../../assets/lsofa.jpg";
import usofa from "../../assets/usofa.jpg";
import threesofa from "../../assets/3sofa.jpg";
import setsofa from "../../assets/setsofa.jpg";
import diningtable from "../../assets/diningtable.jpg";
import wardrobe from "../../assets/wardrobe.jpg";
import bed from "../../assets/bed.jpg";
import bed2 from "../../assets/bed2.jpg";
import bed3 from "../../assets/bed3.jpg";
import cupboard from "../../assets/cupboard.jpg";
import Refrigerator from "../../assets/refirigerator.jpg";
import washingmachine from "../../assets/washingmachine.jpg";
import washingmachine2 from "../../assets/washingmachine2.jpg";
import ac from "../../assets/ac.jpg";
import oven from "../../assets/oven.jpg";
import smarttv from "../../assets/smart.jpg";
import ledtv from "../../assets/ledtv.jpg";
import waterpurifier from "../../assets/water.jpg";
import gasstove from "../../assets/stove.jpg";
import mixer from "../../assets/mixer.jpg";
import aircooler from "../../assets/cooler.jpg";
import cycle from "../../assets/cycle.jpg";
import purifier from "../../assets/waterpurifier.jpg";
import cookware from "../../assets/7set.jpg"; // Add these if you have them
import nonstick from "../../assets/pancombo.jpg";
import steelcombo from "../../assets/25set.jpg";
import grinder from "../../assets/grinder.jpg";
import sofa2 from "../../assets/sofa2.jpg";
import sofa3 from "../../assets/sofa3.jpg";
import usofa2 from "../../assets/usofa2.jpg";
import usofa3 from "../../assets/usofa3.jpg";
import threesofa2 from "../../assets/3sofa2.jpg";
import threesofa3 from "../../assets/3sofa3.jpg";
import setsofa2 from "../../assets/5set2.jpg";
import setsofa3 from "../../assets/5set3.jpg";
import diningtable2 from "../../assets/table.jpg";
import diningtable3 from "../../assets/table3.jpg";
import wardrobe2 from "../../assets/wardrobe2.jpg";
import wardrobe3 from "../../assets/wardrobe3.jpg";
import cupboard2 from "../../assets/cupboard2.jpg";
import cupboard3 from "../../assets/cupboard3.jpg";
import tv2 from "../../assets/tv2.jpg";
import tv3 from "../../assets/tv3.jpg";
import ledtv2 from "../../assets/ledtv3.jpg";
import ledtv3 from "../../assets/ledtv3.jpg";
import bat1 from "../../assets/battery3.jpg";
import bat2 from "../../assets/battery2.jpg";
import bat3 from "../../assets/battery3.jpg";
import flight from "../../assets/flight-cate.png";
import mobile from "../../assets/mobile-cate.png";
import gas from "../../assets/gas-cate.png";
import house from "../../assets/house-cate.jpeg";
import plastic from "../../assets/plastic-cate.png";
import money from "../../assets/money-cate.png";
import docu from "../../assets/document-cate.png";

{/* this is product image */}
import XeroxPhotocopy from "../../assets/XeroxPhotocopy.jpg";
import PrintingService from "../../assets/Printing Service.jpg";
import Scanning from "../../assets/Scanning.jpg";
import PCCService from "../../assets/pcc.webp";
import PANCardApplication from "../../assets/PAN Card Application.png";
import AadharCardUpdate from "../../assets/Aadhar Card Update.webp";
import VisaAttestation from "../../assets/Visa & Attestation.jpg";

import FlightTicketBooking from "../../assets/Flight Ticket Booking.jpg";
import TrainTicketBooking from "../../assets/Train Ticket Booking.webp";
import BusTicketBooking from "../../assets/Bus Ticket Booking.webp";
import CarRentalService from "../../assets/Car Rental Service.jpg";

import MoneyTransfer from "../../assets/Money Transfer.avif";
import PropertyTaxPayment from "../../assets/Property Tax Payment.jpg";
import ElectricityBillPayment from "../../assets/Electricity Bill Payment.jpg";
import WaterBillPayment from "../../assets/Water-Bill-Payment.jpg";

import RoomRent from "../../assets/Room Rent.jpg";
import RealEstateService from "../../assets/Real Estate Service.jpg";
import StudioService from "../../assets/Studio Service.webp";
import PassportSizePhotos from "../../assets/2.jpg";
import WeddingPhotoVideos from "../../assets/Wedding-Photo-Videos.jpg";
import DigitalPhotos from "../../assets/Digital Photos.jpg";

import CleaningMaterials from "../../assets/Cleaning Materials.jpg";

import GasSales from "../../assets/Gas Sales.webp";
import GasStoveService from "../../assets/Gas Stove Service.jpg";

import MobileSales from "../../assets/Mobile Sales.jpg";
import MobileRepairService from "../../assets/Mobile Repair Service.webp";
import MobileAccessories from "../../assets/Mobile Accessories.jpg";
import lam from "../../assets/lam.webp";
import plastic1 from "../../assets/Plastic.png";
import sim from "../../assets/sim.jpeg";
import tra from "../../assets/transp.jpg";












const categories = [
  { name: "all", image: categoryAll },
  { name: "Document", image: docu },
  { name: "Transport", image: flight },
  { name: "Financial", image: money },
  { name: "Rooms", image: house },
  { name: "Plastic-Items", image: plastic },
  { name: "Gas-Services", image: gas },
  { name: "Mobile", image: mobile },





];

const allProducts = [
  { 
    id: 1, 
    name: "Capital Room Rent", 
    description: "Clean and comfortable rooms available for daily, weekly, or monthly stays. Suitable for students, travelers, and working professionals.", 
    image: RoomRent, 
    category: "Rooms" 
  },

   { 
    id: 2, 
    name: "Cleaning Materials", 
    description: "All types of cleaning products including detergents, floor cleaners, brushes, and housekeeping materials for home and business use.", 
    image: CleaningMaterials, 
    category: "Plastic-Items" 
  },
   { 
    id: 25, 
    name: "Plastic Household Items", 
    description: "Durable and affordable plastic products such as buckets, containers, boxes, kitchenware, and daily-use home items.", 
    image: plastic1, 
    category: "Plastic-Items" 
  },

  { 
    id: 3, 
    name: "Gas Sales", 
    description: "Domestic and commercial LPG cylinder sales with quick delivery and verified safety checks.", 
    image: GasSales, 
    category: "Gas-Services" 
  },


  { 
    id: 4, 
    name: "Car Rental Service", 
    description: "Well-maintained cars available for rent for personal trips, events, functions, airport rides, and long journeys. Professional drivers and flexible packages.", 
    image: CarRentalService, 
    category: "Transport" 
  },

  { 
    id: 5, 
    name: "Mobile Sales", 
    description: "Brand-new smartphones from all top brands at the best prices. Warranty included with fast delivery options.", 
    image: MobileSales, 
    category: "Mobile" 
  },
   {
  id: 31,
  name: "Transport & Logistics",
  description: "Reliable transport and logistics services including goods delivery, cargo handling, courier support, and doorstep pickup and drop solutions.",
  image: tra, 
  category: "Transport"
},

  { 
    id: 6, 
    name: "PAN Card Application", 
    description: "Support for new PAN card applications, corrections, updates, and reissues. Hassle-free documentation and guided processing for faster approval.", 
    image: PANCardApplication, 
    category: "Document" 
  },

  { 
    id: 7, 
    name: "Aadhar Card Update", 
    description: "Aadhar card correction and update services including name, address, DOB, mobile number, and biometric updates. Quick, smooth, and error-free processing.", 
    image: AadharCardUpdate, 
    category: "Document" 
  },

  { 
    id: 8, 
    name: "Visa & Attestation", 
    description: "Professional assistance for visa stamping, document attestation, embassy verification, and approval processes for all major countries. Fast and trusted service.", 
    image: VisaAttestation, 
    category: "Document" 
  },

  { 
    id: 9, 
    name: "Flight Ticket Booking", 
    description: "Domestic and international flight ticket booking at the best prices. Quick confirmations, zero hassle, and complete travel assistance for all destinations.", 
    image: FlightTicketBooking, 
    category: "Transport" 
  },

  { 
    id: 10, 
    name: "Train Ticket Booking", 
    description: "IRCTC train ticket booking made simple. We help you with tatkal, general, and advance bookings for a smooth travel experience.", 
    image: TrainTicketBooking, 
    category: "Transport" 
  },

  { 
    id: 11, 
    name: "Bus Ticket Booking", 
    description: "Fast and affordable bus ticket booking for all routes. Choose from AC, non-AC, sleeper, semi-sleeper, and luxury buses with instant confirmation.", 
    image: BusTicketBooking, 
    category: "Transport" 
  },

  { 
    id: 12, 
    name: "Lamination", 
    description: "Premium lamination service to protect certificates, ID cards, mark sheets, photos, and important documents from damage, scratches, and moisture. Available in multiple sizes.", 
    image: lam, 
    category: "Document" 
  },

  { 
    id: 13, 
    name: "Money Transfer", 
    description: "Secure and instant domestic money transfers to any bank across India. Reliable service for quick financial support and transactions.", 
    image: MoneyTransfer, 
    category: "Financial" 
  },

  { 
    id: 14, 
    name: "All Type of Recharge", 
    description: "Mobile, DTH, internet, and data pack recharges for all networks. Fast processing with the best available plans and offers.", 
    image: sim, 
    category: "Financial" 
  },

  { 
    id: 15, 
    name: "Property Tax Payment", 
    description: "Complete assistance for paying property tax bills safely and quickly. Avoid long queues and ensure timely submissions.", 
    image: PropertyTaxPayment, 
    category: "Financial" 
  },

  { 
    id: 16, 
    name: "Electricity Bill Payment", 
    description: "Quick electricity bill payment for all state and private electricity boards. Instant confirmation and receipt generation.", 
    image: ElectricityBillPayment, 
    category: "Financial" 
  },

  { 
    id: 17, 
    name: "Water Bill Payment", 
    description: "Fast and error-free water bill payment service for all water supply boards. Get instant receipt and confirmation.", 
    image: WaterBillPayment, 
    category: "Financial" 
  },

  { 
    id: 18, 
    name: "Xerox / Photocopy", 
    description: "Instant and reliable black & white or color photocopy service with sharp output quality. Suitable for documents, forms, certificates, and all office-related needs. Fast processing ensures you never have to wait long.", 
    image: XeroxPhotocopy, 
    category: "Document" 
  },

  { 
    id: 19, 
    name: "Real Estate Service", 
    description: "Buy, sell, or rent residential and commercial properties with expert guidance. Transparent deals and professional support.", 
    image: RealEstateService, 
    category: "Rooms" 
  },

  { 
    id: 20, 
    name: "Studio Service", 
    description: "Professional studio setup for photography, videography, product shoots, and creative content creation. High-quality lighting and equipment.", 
    image: StudioService, 
    category: "Rooms" 
  },

  { 
    id: 21, 
    name: "Passport Size Photos", 
    description: "Instant passport-size and visa-size photo service with perfect clarity, lighting, and correct document-size formatting.", 
    image: PassportSizePhotos, 
    category: "Rooms" 
  },

  { 
    id: 22, 
    name: "Wedding Photo & Videos", 
    description: "Premium wedding photography and videography service capturing every beautiful moment with professional equipment.", 
    image: WeddingPhotoVideos, 
    category: "Rooms" 
  },

  { 
    id: 23, 
    name: "Digital Photos", 
    description: "High-quality digital photo editing, enhancement, retouching, and image correction for personal and professional use.", 
    image: DigitalPhotos, 
    category: "Rooms" 
  },

  { 
    id: 24, 
    name: "Printing Service", 
    description: "High-quality A4 and A3 printing for office documents, resumes, project reports, photos, and more. We ensure clear, professional, and premium print results for all personal and business requirements.", 
    image: PrintingService, 
    category: "Document" 
  },

 

  { 
    id: 26, 
    name: "Scanning", 
    description: "Fast and accurate digital scanning for documents, certificates, photos, IDs, and handwritten pages. Get high-resolution digital copies instantly for online submission or safe storage.", 
    image: Scanning, 
    category: "Document" 
  },

  { 
    id: 27, 
    name: "Gas Stove Service", 
    description: "Repair, cleaning, and maintenance service for all types of gas stoves. Reliable and safe service by trained technicians.", 
    image: GasStoveService, 
    category: "Gas-Services" 
  },

  { 
    id: 28, 
    name: "PCC Service", 
    description: "Complete assistance for applying, updating, and processing Police Clearance Certificates (PCC). We guide you through every step for quick and smooth approval.", 
    image: PCCService, 
    category: "Document" 
  },

  { 
    id: 29, 
    name: "Mobile Repair Service", 
    description: "Screen replacement, battery change, software fixing, hardware repair, and diagnostics for all smartphone models.", 
    image: MobileRepairService, 
    category: "Mobile" 
  },

  { 
    id: 30, 
    name: "Mobile Accessories", 
    description: "Wide range of high-quality accessories including chargers, cables, earphones, cases, tempered glass, and more.", 
    image: MobileAccessories, 
    category: "Mobile" 
  },



];




const CartIcon = () => (
  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 4h12a2 2 0 002-2v-1M6 21a1 1 0 100-2 1 1 0 000 2zm12 0a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

// ... (Keep all imports and allProducts list as you provided above)

const Listing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCartBanner, setShowCartBanner] = useState(false);
  const [quantities, setQuantities] = useState({});

useEffect(() => {
  const path = location.pathname.replace("/", "").toLowerCase();

  // convert category name to URL-friendly format
  const normalize = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const matchedCategory = categories.find((c) => normalize(c.name) === path);

  setSelectedCategory(matchedCategory ? matchedCategory.name : "all");
}, [location.pathname]);



  useEffect(() => {
    document.title = `SVC | ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
  }, [selectedCategory]);

  const categoryAliases = {
    furniture: ["sofa", "bed", "table", "chair", "wardrobe", "cupboard"],
    homeappliances: ["refrigerator", "fridge", "washing machine", "ac", "air conditioner", "oven", "microwave", "gas stove", "mixer", "kitchen", "water purifier"],
    electronics: ["tv", "television", "smarttv", "ledtv", "smart", "led"],
    carRent: ["tv", "television", "smarttv", "ledtv", "smart", "led"],


  };

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    if (!searchTerm.trim()) return categoryMatch;

    const lowerSearch = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(lowerSearch);
    const aliasMatch = categoryAliases[product.category]?.some((alias) =>
      alias.toLowerCase().includes(lowerSearch) || lowerSearch.includes(alias.toLowerCase())
    );

    return categoryMatch && (nameMatch || aliasMatch);
  });

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    for (let i = 0; i < qty; i++) addToCart(product);
    setShowCartBanner(true);
  };

  const incrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1),
    }));
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/${categoryName}`);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="max-w-screen-xl mx-auto px-4 py-10">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Discover Our Top Deals</h2>
          <p className="text-gray-600 text-lg">Best-selling CAPITAL MART products across trending categories</p>
        </section>

        <div className="flex overflow-x-auto gap-4 mb-12 pb-2 sm:justify-center no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg w-28 h-28 transition ring-offset-2 ${
                selectedCategory === category.name ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 mb-2">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-center font-medium text-gray-700 capitalize">
                {category.name.replace("-", " ")}
              </span>
            </button>
          ))}
        </div>

        <section>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600 mt-8 text-lg">
              No products found for "{searchTerm || selectedCategory}".
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col">
                  <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
                    {product.images ? (
                      <Slider
                        dots={true}
                        arrows={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay
                        autoplaySpeed={3000}
                        className="w-full h-full"
                      >
                        {product.images.map((img, idx) => (
                          <div key={idx} className="w-full h-48 flex justify-center items-center">
                            <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" />
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    )}
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {product.discount}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex items-center mb-1">
                      <span className="text-sm text-gray-500 line-through mr-2">{product.originalPrice}</span>
                      <span className="text-lg font-bold text-red-600">{product.discountedPrice}</span>
                    </div>

                    {/* Stock and review section */}
                    {/*
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {"★".repeat(4)}<span className="text-gray-500 ml-1">({product.reviews} Reviews)</span>
                      </div>
                      <span className="text-green-600 font-semibold">Stock</span>
                    </div>

                    <div className="flex items-center justify-between mb-2 gap-2">
                      <button
                        onClick={() => decrementQuantity(product.id)}
                        className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm text-gray-700">Qty: {quantities[product.id] || 1}</span>
                      <button
                        onClick={() => incrementQuantity(product.id)}
                        className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
              */}

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-auto bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-colors group"
                    >
                      <CartIcon />
                      Book Now 
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {showCartBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-4 flex justify-center shadow-md animate-slideUp">
          <Link to="/cart" className="text-lg sm:text-xl font-semibold underline hover:opacity-90 transition">
            Go to Cart →
          </Link>
        </div>
      )}
    </div>
  );
};

export default Listing;

