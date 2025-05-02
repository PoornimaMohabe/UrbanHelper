import React from "react";
import { useNavigate } from "react-router-dom";
import vendorhome from "../../assets/images/vendorhome.png";

const VendorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={vendorhome}
          alt="Vendor Home"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 text-center max-w-2xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Empower Your Business
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Manage your orders, track service performance, and deliver excellence.
          </p>

        </div>
      </div>

      {/* Section with Circles and Button */}
      <div className="w-full py-16 px-6 bg-[#e9d9df]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to take control?
            </h2>
            <p className="text-md text-gray-700 mb-6 font-medium leading-relaxed">
  अपने व्यवसाय को नई ऊँचाइयों तक पहुँचाने का समय आ गया है।<br />
  हर ऑर्डर पर आपका नियंत्रण, हर कदम पर आपकी सफलता —<br />
  <span className="text-green-700 font-semibold">
    क्योंकि जब आप नियंत्रण में होते हैं, तो व्यापार खुद बोलता है।
  </span>
</p>
            <button
              onClick={() => navigate("/vendor/orders")}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              Manage Orders
            </button>
          </div>

          {/* Right Side - Decorative Circles */}
          <div className="w-full md:w-1/2 h-[300px] relative flex items-center justify-center">
            <div className="absolute w-60 h-60 bg-green-200 rounded-full z-10 left-6 top-4 opacity-80"></div>
            <div className="absolute w-52 h-52 bg-yellow-300 rounded-full z-20 left-20 top-28 opacity-80"></div>
            <div className="absolute w-44 h-44 bg-blue-300 rounded-full z-30 left-32 top-14 opacity-80"></div>
            <div className="absolute w-40 h-40 bg-pink-300 rounded-full z-40 left-24 top-0 opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;