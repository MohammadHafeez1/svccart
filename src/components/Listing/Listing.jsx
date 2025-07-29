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




const categories = [
  { name: "all", image: categoryAll },
  { name: "furniture", image: categoryFurniture },
  { name: "home-appliances", image: categoryHome },
  { name: "electronics", image: categoryElectronics },
];

const allProducts = [
  { id: 1, name: "SVC L-Shaped Sofa", description: "Comfortable L-shaped sofa perfect for corner spaces.", discount: "-15%", image: lsofa,images: [lsofa, sofa2, sofa3],  reviews: 10, originalPrice: "₹63,529.41", discountedPrice: "₹54,000", category: "furniture" },
  { id: 2, name: "SVC U-Shaped Luxury Sofa", description: "Spacious U-shaped sofa with plush cushions.", discount: "-20%", image: usofa,images: [usofa, usofa2, usofa3], reviews: 8, originalPrice: "₹1,37,500.00", discountedPrice: "₹1,10,000", category: "furniture" },
  { id: 3, name: "SVC 3-Seater Fabric Sofa", description: "Stylish and cozy 3-seater fabric sofa.", discount: "-10%", image: threesofa,images: [threesofa, threesofa2, threesofa3], reviews: 15, originalPrice: "₹32,221.11", discountedPrice: "₹28,999", category: "furniture" },
  { id: 4, name: "SVC Sofa Set (5 Piece)", description: "Complete 5-piece sofa set with modern design.", discount: "-18%", image: setsofa,images: [setsofa, setsofa2, setsofa3], reviews: 12, originalPrice: "₹91,463.41", discountedPrice: "₹74,999", category: "furniture" },
  { id: 5, name: "SVC Wooden Dining Table Set", description: "Elegant 6-seater dining table with chairs.", discount: "-12%", image: diningtable,images: [diningtable, diningtable2, diningtable3], reviews: 5, originalPrice: "₹45,453.41", discountedPrice: "₹39,999", category: "furniture" },
  { id: 6, name: "SVC Premium Wardrobe", description: "Spacious wardrobe with shelves and mirror.", discount: "-10%", image: wardrobe,images: [wardrobe, wardrobe2, wardrobe3], reviews: 9, originalPrice: "₹48,887.78", discountedPrice: "₹43,999", category: "furniture" },
  { id: 7, name: "SVC King Size Bed", description: "Luxury king-size bed with strong wooden frame.", discount: "-14%", image: bed,images: [bed, bed2, bed3], reviews: 7, originalPrice: "₹37,209.30", discountedPrice: "₹32,000", category: "furniture" },
  { id: 8, name: "SVC Multi-Storage Cupboard", description: "Compact cupboard with multiple storage sections.", discount: "-10%", image: cupboard,images: [cupboard, cupboard2, cupboard3], reviews: 4, originalPrice: "₹16,665.56", discountedPrice: "₹14,999", category: "furniture" },
  { id: 9, name: "SVC Smart Refrigerator", description: "Energy-efficient double-door refrigerator.", discount: "-8%", image: Refrigerator, reviews: 8, originalPrice: "₹59,391.30", discountedPrice: "₹54,840", category: "home-appliances" },
  { id: 10, name: "SVC Fully Automatic Washing Machine", description: "Top-loading washing machine with smart features.", discount: "-15%", image: washingmachine, reviews: 11, originalPrice: "₹65,058.82", discountedPrice: "₹55,300", category: "home-appliances" },
  { id: 11, name: "SVC 1.5 Ton Inverter Split AC", description: "Power-saving AC with rapid cooling and remote.", discount: "-10%", image: ac, reviews: 10, originalPrice: "₹42,221.11", discountedPrice: "₹37,999", category: "home-appliances" },
  { id: 12, name: "SVC Convection Microwave Oven", description: "Multi-function convection microwave for quick meals.", discount: "-12%", image: oven, reviews: 6, originalPrice: "₹14,500.00", discountedPrice: "₹12,999", category: "home-appliances" },
  { id: 13, name: "SVC 32\" Smart TV - Full HD", description: "Smart TV with HD display and built-in streaming.", discount: "-40%", image: smarttv,images: [smarttv, tv2, tv3], reviews: 1, originalPrice: "₹44,998.33", discountedPrice: "₹26,999", category: "electronics" },
  { id: 14, name: "SVC 40\" LED TV - 4K Ultra HD", description: "Crisp 4K UHD display with vibrant colors.", discount: "-35%", image: ledtv,images: [ledtv, ledtv2, ledtv3], reviews: 5, originalPrice: "₹59,998.46", discountedPrice: "₹38,999", category: "electronics" },
  { id: 15, name: "SVC Kent Advanced Water Purifier", description: "Removes 99.9% impurities with RO+UV tech.", discount: "-18%", image: waterpurifier, reviews: 6, originalPrice: "₹27,926.83", discountedPrice: "₹22,499", category: "home-appliances" },
  { id: 16, name: "SVC 3-Burner Gas Stove", description: "Toughened glass gas stove with 3 burners.", discount: "-15%", image: gasstove, reviews: 5, originalPrice: "₹9,410.59", discountedPrice: "₹7,999", category: "home-appliances" },
  { id: 17, name: "SVC Powerful Mixer Grinder", description: "High-speed mixer grinder with 3 jars.", discount: "-20%", image: mixer, reviews: 4, originalPrice: "₹9,998.75", discountedPrice: "₹7,999", category: "home-appliances" },
  { id: 18, name: "SVC High-Speed Grinder with Scrapper", description: "Durable and efficient grinder for daily kitchen use.", discount: "-18%", image: grinder, reviews: 6, originalPrice: "₹15,853.66", discountedPrice: "₹12,999", category: "home-appliances" },
  { id: 19, name: "SVC Mountain Gear Bicycle", description: "Sturdy gear cycle ideal for both city and trail riding.", discount: "-25%", image: cycle, reviews: 4, originalPrice: "₹17,332.00", discountedPrice: "₹12,999", category: "electronics" },
  { id: 20, name: "SVC TurboCool Air Cooler", description: "Powerful air cooler with 45L tank capacity.", discount: "-20%", image: aircooler, reviews: 5, originalPrice: "₹16,248.75", discountedPrice: "₹12,999", category: "home-appliances" },
  { id: 21, name: "SVC Aqua Water Purifier RO+UV", description: "Advanced RO+UV purification with mineral booster.", discount: "-22%", image: purifier, reviews: 3, originalPrice: "₹16,663.46", discountedPrice: "₹12,999", category: "home-appliances" },
  { id: 22, name: "Stainless Steel Cookware Combo (5 Pc)", description: "Premium quality stainless steel cookware for healthy cooking.", discount: "-28%", image: steelcombo, reviews: 8, originalPrice: "₹16,665.28", discountedPrice: "₹11,999", category: "home-appliances" },
  { id: 23, name: "Kitchen Cooking Combo – Pans & Pots Set", description: "Complete set of kitchen essentials for everyday use.", discount: "-30%", image: cookware, reviews: 10, originalPrice: "₹14,000.00", discountedPrice: "₹10,999", category: "home-appliances" },
  { id: 24, name: "Nonstick Cookware Combo Set", description: "Nonstick pans and pots combo – easy cooking and cleaning.", discount: "-26%", image: nonstick, reviews: 7, originalPrice: "₹11,729.73", discountedPrice: "₹7,999", category: "home-appliances" },
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
    const validCategory = categories.some((c) => c.name === path) ? path : "all";
    setSelectedCategory(validCategory);
  }, [location.pathname]);

  useEffect(() => {
    document.title = `SVC | ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
  }, [selectedCategory]);

  const categoryAliases = {
    furniture: ["sofa", "bed", "table", "chair", "wardrobe", "cupboard"],
    homeappliances: ["refrigerator", "fridge", "washing machine", "ac", "air conditioner", "oven", "microwave", "gas stove", "mixer", "kitchen", "water purifier"],
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
          <p className="text-gray-600 text-lg">Best-selling SVC products across trending categories</p>
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

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-auto bg-blue-100 text-blue-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-colors group"
                    >
                      <CartIcon />
                      Add to Cart
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

