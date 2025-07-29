import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

// Category and product images
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
import cupboard from "../../assets/cupboard.jpg";
import Refrigerator from "../../assets/refirigerator.jpg";
import washingmachine from "../../assets/washingmachine.jpg";
import ac from "../../assets/ac.jpg";
import oven from "../../assets/oven.jpg";
import smarttv from "../../assets/smart.jpg";
import ledtv from "../../assets/ledtv.jpg";

const categories = [
  { name: "all", image: categoryAll },
  { name: "furniture", image: categoryFurniture },
  { name: "home-appliances", image: categoryHome },
  { name: "electronics", image: categoryElectronics },
];

const allProducts = [
  { id: 1, name: "SVC L-Shaped Sofa", discount: "-15%", image: lsofa, reviews: 10, originalPrice: "₹35,000.00", discountedPrice: "₹29,750", category: "furniture" },
  { id: 2, name: "SVC U-Shaped Luxury Sofa", discount: "-20%", image: usofa, reviews: 8, originalPrice: "₹50,000.00", discountedPrice: "₹40,000", category: "furniture" },
  { id: 3, name: "SVC 3-Seater Fabric Sofa", discount: "-10%", image: threesofa, reviews: 15, originalPrice: "₹25,000.00", discountedPrice: "₹22,500", category: "furniture" },
  { id: 4, name: "SVC Sofa Set (5 Piece)", discount: "-18%", image: setsofa, reviews: 12, originalPrice: "₹45,000.00", discountedPrice: "₹36,900", category: "furniture" },
  { id: 5, name: "SVC Wooden Dining Table Set", discount: "-12%", image: diningtable, reviews: 5, originalPrice: "₹20,000.00", discountedPrice: "₹17,600", category: "furniture" },
  { id: 6, name: "SVC Premium Wardrobe", discount: "-10%", image: wardrobe, reviews: 9, originalPrice: "₹15,000.00", discountedPrice: "₹13,500", category: "furniture" },
  { id: 7, name: "SVC King Size Bed", discount: "-14%", image: bed, reviews: 7, originalPrice: "₹30,000.00", discountedPrice: "₹25,800", category: "furniture" },
  { id: 8, name: "SVC Multi-Storage Cupboard", discount: "-10%", image: cupboard, reviews: 4, originalPrice: "₹12,000.00", discountedPrice: "₹10,800", category: "furniture" },
  { id: 9, name: "SVC Smart Refrigerator", discount: "-8%", image: Refrigerator, reviews: 8, originalPrice: "₹60,000.00", discountedPrice: "₹54,840", category: "home-appliances" },
  { id: 10, name: "SVC Fully Automatic Washing Machine", discount: "-15%", image: washingmachine, reviews: 11, originalPrice: "₹65,000.00", discountedPrice: "₹55,300", category: "home-appliances" },
  { id: 11, name: "SVC 1.5 Ton Inverter Split AC", discount: "-10%", image: ac, reviews: 0, originalPrice: "₹41,999.00", discountedPrice: "₹37,999", category: "home-appliances" },
  { id: 12, name: "SVC Convection Microwave Oven", discount: "-12%", image: oven, reviews: 6, originalPrice: "₹12,000.00", discountedPrice: "₹10,560", category: "home-appliances" },
  { id: 13, name: "SVC 32\" Smart TV - Full HD", discount: "-40%", image: smarttv, reviews: 1, originalPrice: "₹24,999.00", discountedPrice: "₹14,999", category: "electronics" },
  { id: 14, name: "SVC 40\" LED TV - 4K Ultra HD", discount: "-35%", image: ledtv, reviews: 5, originalPrice: "₹29,000.00", discountedPrice: "₹18,850", category: "electronics" },
];

const ShoppingBagIcon = () => (
  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Listing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCartBanner, setShowCartBanner] = useState(false);

  useEffect(() => {
    const path = location.pathname.replace("/", "").toLowerCase();
    const validCategory = categories.some((c) => c.name === path) ? path : "all";
    setSelectedCategory(validCategory);
  }, [location.pathname]);

  useEffect(() => {
    document.title = `SVC | ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
  }, [selectedCategory]);

  const categoryAliases = {
    furniture: ["sofa", "bed", "table", "chair", "wardrobe", "cupboard"],
    homeappliances: ["refrigerator", "fridge", "washing machine", "ac", "air conditioner", "oven", "microwave"],
    electronics: ["tv", "television", "smarttv", "ledtv", "smart", "led"],
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
    addToCart(product);
    setShowCartBanner(true);
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
          <p className="text-gray-600 text-lg">Best-selling SVC products across trending categories</p>
        </section>

        {/* Mobile-optimized scrollable category buttons */}
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

        {/* Product listing */}
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
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {product.discount}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500 line-through mr-2">{product.originalPrice}</span>
                      <span className="text-lg font-bold text-red-600">{product.discountedPrice}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-auto bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-colors group"
                    >
                      <ShoppingBagIcon />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Cart banner */}
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
