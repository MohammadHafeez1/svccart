import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const categories = [
  { name: 'Furniture', path: '/furniture' },
  { name: 'Home Appliances', path: '/home-appliances' },
  { name: 'Electronics', path: '/electronics' },
  
];

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems?.length || 0;

  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate('/all');
    }
  };

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Top Bar – Hidden on mobile */}
      <div className="hidden sm:flex bg-gray-100 text-sm text-gray-600 px-4 py-2 justify-between items-center">
        <span>Welcome to Smart Vision Corporation Group</span>
        <div className="flex gap-4">
          <Link to="/footer" className="hover:text-yellow-600">📧 Contact</Link>
          <Link to="/scheme" className="hover:text-yellow-600">🔐 Register for scheme</Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex items-center justify-between px-4 max-w-screen-xl mx-auto h-20">
        <div className="flex items-center gap-3">
          {/* Hamburger Icon - Mobile Only */}
          <button
            onClick={toggleSidebar}
            className="text-2xl text-gray-700 sm:hidden"
          >
            <IoMenu />
          </button>

          {/* Logo */}
          <Link to="/all">
            <img
              src={logo}
              alt="Logo"
              className="object-contain"
              style={{ width: '220px', height: 'auto' }}
            />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Mobile Search Icon */}
          <div
            className="text-xl sm:hidden cursor-pointer"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            🔍
          </div>

          {/* Cart Icon (Desktop Only) */}
          <div className="hidden sm:flex items-center space-x-5">
            <Link to="/cart" className="relative cursor-pointer text-xl">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Search Bar */}
      <div className="hidden sm:block px-4 pb-3 max-w-screen-xl mx-auto">
        <div className="flex border rounded-lg overflow-hidden shadow-sm">
          <select className="bg-gray-100 px-3 text-sm text-gray-600 outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Home Appliances</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 text-sm outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 text-white px-4 hover:bg-yellow-600"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="sm:hidden px-4 py-2">
          <div className="flex border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-4 py-2 text-sm outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                  setShowMobileSearch(false);
                }
              }}
            />
            <button
              onClick={() => {
                handleSearch();
                setShowMobileSearch(false);
              }}
              className="bg-yellow-500 text-white px-4 hover:bg-yellow-600"
            >
              🔍
            </button>
          </div>
        </div>
      )}

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 sm:hidden z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 sm:hidden transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
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
    </div>
  );
};

export default Navbar;
