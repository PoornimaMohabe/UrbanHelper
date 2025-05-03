import { Link, useLocation } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { logoutfunction } from "../redux/actionCreator";
import Toastnotification from "../utils/Toastnotification";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { showToast } = Toastnotification();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.auth);
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  const handleLogOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(logoutfunction(navigate, showToast));
    }
  };

  return (
    <div className="w-full fixed top-0 bg-white shadow-md z-50">
   
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

      
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border px-4 py-1 rounded-full text-sm w-48 pl-10"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

    
        <div className="text-center leading-tight">
         <img src={logo} alt="logo" className="object-cover h-16"/>
        </div>

       
        <div className="hidden md:flex space-x-8 text-xs items-center">
          <div className="flex flex-col items-center">
            <FaUser className="text-xl" />
            {state?.auth?.login ? (
              <Link to="/loginSignup">
                <span
                  onClick={() => {
                    handleLogOut();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </span>
              </Link>
            ) : (
              <Link to="/loginSignup">
                <span>SIGN IN</span>
              </Link>
            )}
          </div>
        </div>
      </div>

    
      <div className="hidden md:flex justify-center space-x-8 text-sm font-semibold uppercase text-gray-600 py-2 border-b">
        <Link to="/">
          <span
            className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
              isActive("/")
                ? "border-b-4 border-pink-500"
                : "border-b-4 border-transparent"
            }`}
          >
            Home
          </span>
        </Link>
        <Link to="/vendors">
          <span
            className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
              isActive("/vendors")
                ? "border-b-4 border-pink-500"
                : "border-b-4 border-transparent"
            }`}
          >
            Find Vendor
          </span>
        </Link>
        <span className="border-r h-4 border-gray-300 mx-2" />
        <Link to="/about-us">
          <span
            className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
              isActive("/about-us")
                ? "border-b-4 border-pink-500"
                : "border-b-4 border-transparent"
            }`}
          >
            About Us
          </span>
        </Link>
        <Link to="/contact-us">
          <span
            className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
              isActive("/contact-us")
                ? "border-b-4 border-pink-500"
                : "border-b-4 border-transparent"
            }`}
          >
            Contact Us
          </span>
        </Link>
        {state?.auth?.login && state?.auth?.role === "user" && (
          <Link to="/bookService">
            <span
              className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                isActive("/bookService")
                  ? "border-b-4 border-pink-500"
                  : "border-b-4 border-transparent"
              }`}
            >
              My Book Service
            </span>
          </Link>
        )}
        {state?.auth?.login && state?.auth?.role === "worker" && (
          <Link to="/service-request">
            <span
              className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                isActive("/service-request")
                  ? "border-b-4 border-pink-500"
                  : "border-b-4 border-transparent"
              }`}
            >
              Manager request
            </span>
          </Link>
        )}
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

            <Link to="/" onClick={() => setIsOpen(false)}>
              <span
                className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                  isActive("/")
                    ? "border-b-4 border-pink-500"
                    : "border-b-4 border-transparent"
                }`}
              >
                Home
              </span>
            </Link>
            <Link to="/vendors" onClick={() => setIsOpen(false)}>
              <span
                className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                  isActive("/vendors")
                    ? "border-b-4 border-pink-500"
                    : "border-b-4 border-transparent"
                }`}
              >
                Find Vendor
              </span>
            </Link>
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              <span
                className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                  isActive("/about-us")
                    ? "border-b-4 border-pink-500"
                    : "border-b-4 border-transparent"
                }`}
              >
                About Us
              </span>
            </Link>
            <Link to="/contact-us" onClick={() => setIsOpen(false)}>
              <span
                className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                  isActive("/contact-us")
                    ? "border-b-4 border-pink-500"
                    : "border-b-4 border-transparent"
                }`}
              >
                Contact Us
              </span>
            </Link>
            {state?.auth?.login && state?.auth?.role === "user" && (
              <Link to="/bookService" onClick={() => setIsOpen(false)}>
                <span
                  className={`cursor-pointer px-1 pb-1 transition-all duration-300 ${
                    isActive("/bookService")
                      ? "border-b-4 border-pink-500"
                      : "border-b-4 border-transparent"
                  }`}
                >
                  My Book Service
                </span>
              </Link>
            )}

         
            <div className="flex space-x-8 text-xs items-center">
              <Link to="/loginSignup" onClick={() => setIsOpen(false)}>
                <div className="flex flex-col items-center">
                  <FaUser className="text-xl" />
                  {state?.auth?.login ? (
                    <Link to="/loginSignup">
                      <span
                        onClick={() => {
                          handleLogOut();
                          setIsOpen(false);
                        }}
                      >
                        Logout
                      </span>
                    </Link>
                  ) : (
                    <Link to="/loginSignup">
                      <span>SIGN IN</span>
                    </Link>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
