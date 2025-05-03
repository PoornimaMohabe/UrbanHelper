import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/images/logo.png'
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 bg-white shadow-md z-50">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 border-b">
        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-1 rounded-full text-sm w-48 pl-10"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Logo */}
        <div className="text-center leading-tight">
          <img src={logo} alt="logo" className="object-cover h-16" />
        </div>

        {/* Right icons */}
        <div className="hidden md:flex space-x-8 text-xs items-center">
          <div className="flex flex-col items-center">
            <FaUser className="text-xl" />
            <Link to="/loginSignup">
              {" "}
              <span>SIGN IN</span>{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart className="text-xl" />
            <span>WISHLIST</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShoppingBag className="text-xl" />
            <span>BAG (£0)</span>
          </div>
        </div>
      </div>

      {/* Bottom nav links */}
      <div className="hidden md:flex justify-center space-x-8 text-sm font-semibold uppercase text-gray-600 py-2 border-b">
        <Link to="/">
          <span className="cursor-pointer text-pink-500">Home</span>
        </Link>
        <Link to="/vendors">
          <span className="cursor-pointer border-b-2 border-black">
            find Vendor
          </span>
        </Link>
        <span className="border-r h-4 border-gray-300 mx-2" />
        <span className="cursor-pointer">About Us</span>
        <span className="cursor-pointer">Contact Us</span>
        <Link to="/bookService">
          <span className="cursor-pointer">My book service</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-b">
          <div className="flex flex-col items-center py-4 space-y-4 text-sm font-semibold uppercase text-gray-600">
            <div className="relative w-4/5">
              <input
                type="text"
                placeholder="Search"
                className="border px-4 py-1 rounded-full text-sm w-full pl-10"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
            <span className="cursor-pointer text-pink-500">Home</span>
            <Link to="/vendors">
              <span className="cursor-pointer border-b-2 border-black">
                find Vendor
              </span>
            </Link>
            <span className="cursor-pointer">About Us</span>
            <span className="cursor-pointer">Contact Us</span>
            <div className="flex space-x-8 text-xs items-center">
              <div className="flex flex-col items-center">
                <FaUser className="text-xl" />
                <span>SIGN IN</span>
              </div>
              <div className="flex flex-col items-center">
                <FaHeart className="text-xl" />
                <span>WISHLIST</span>
              </div>
              <div className="flex flex-col items-center">
                <FaShoppingBag className="text-xl" />
                <span>BAG (£0)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
