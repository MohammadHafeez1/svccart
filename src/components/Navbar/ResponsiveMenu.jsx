import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const categories = [
  { name: "Furniture", path: "/furniture" },
  { name: "Home Appliances", path: "/home-appliances" },
  { name: "Electronics", path: "/electronics" },
  { name: "Fashion", path: "/fashion" },
  { name: "Beauty", path: "/beauty" },
];

const ResponsiveMenu = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/all-categories", label: "Catalog", icon: "📂" },
    { path: "/cart", label: "Cart", icon: "🛒" },
    { path: "/scheme", label: "Account", icon: "👤" },
  ];

  return (
    <>
      {/* Top Mobile Menu (Hamburger near search area) */}
      <div className="sm:hidden fixed top-0 left-0 w-full z-40 bg-white border-b px-4 py-2 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-800">MyShop</span>
        <div className="flex items-center gap-4">
          {/* Placeholder for Search */}
          <div className="text-gray-500 text-sm">🔍</div>
          {/* Hamburger Button */}
          <button onClick={toggleSidebar} className="text-2xl text-gray-700">
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Sidebar Drawer */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 sm:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button onClick={closeSidebar} className="text-2xl text-gray-600">
            <IoClose />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              onClick={closeSidebar}
              className="text-gray-700 hover:text-yellow-600 font-medium"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation Bar - Mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-md border-t flex justify-between px-4 py-2 sm:hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-xs ${
              location.pathname === item.path
                ? "text-yellow-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ResponsiveMenu;
