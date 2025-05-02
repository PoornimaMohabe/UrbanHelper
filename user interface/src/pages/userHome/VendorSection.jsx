import React from "react";
import plumber from "../../assets/images/plumber.png";
import electric from "../../assets/images/electric.png";
import cook from "../../assets/images/cook.png";
import cleaner from "../../assets/images/cleaning.png";

function VendorSection() {
  return (
    <section className="bg-[#2c597a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm underline md:text-xl font-bold text-white mb-4">
          Your Trusted <br /> Local Service Experts
        </p>
        <p className="text-white text-l md:text-l mb-12">
          Discover skilled professionals — from electricians to cooks — ready to
          serve you at your doorstep.
          <br />
          <span className="font-semibold text-[#f8b1e5]">
            Fast. Reliable. Hassle-free.
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={electric} alt="Electrician" className="w-full h-auto" />
            <div className="text-center py-3 font-bold text-[#003049] text-lg">
              Electrician
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={plumber} alt="Plumber" className="w-full h-auto" />
            <div className="text-center py-3 font-bold text-[#003049] text-lg">
              Plumber
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={cook} alt="Cook" className="w-full h-auto" />
            <div className="text-center py-3 font-bold text-[#003049] text-lg">
              Cook
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={cleaner} alt="Cleaning" className="w-full h-auto" />
            <div className="text-center py-3 font-bold text-[#003049] text-lg">
              Cleaning
            </div>
          </div>
        </div>

        <button className="bg-[#00c2c2] hover:bg-[#00a8a8] text-white font-semibold px-8 py-3 rounded-full shadow transition">
          START YOUR FINDING
        </button>
      </div>
    </section>
  );
}

export default VendorSection;
