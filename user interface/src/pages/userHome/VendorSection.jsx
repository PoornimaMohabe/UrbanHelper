import React from "react";
import { FaMoneyBillWave, FaStar } from "react-icons/fa";
import { MdHowToReg } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import plumber from "../../assets/images/plumber.png";
import electric from "../../assets/images/electric.png";
import cook from "../../assets/images/cook.png";
import cleaner from "../../assets/images/cleaning.png";
import { Link } from "react-router-dom";

function VendorSection() {
  return (
    <div>
      {/* Become Vendor */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 mt-10 py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
              Empower Your Skills. <br /> Serve. Earn. Grow.
            </h2>
            <p className="text-lg text-gray-600">
              Become a verified vendor on our platform and start offering your
              services to real customers in real time. Let your talent work for
              you!
            </p>
            <Link to="/vendor-registration">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
                <MdHowToReg size={24} />
                Register as a Vendor
              </button>
            </Link>
          </div>

       
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <FaMoneyBillWave size={30} className="text-green-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Earn Easily, Work Flexibly
                </h3>
              </div>
              <p className="text-gray-600">
                Offer services at your convenience, set your availability, and
                reach hundreds of customers looking for trusted professionals
                like you.
              </p>
            </div>

            {/*  Vendor Success */}
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <GiAchievement size={30} className="text-purple-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  Vendor Success Stories
                </h3>
              </div>
              <p className="text-gray-600">
                “This platform changed my life. I started small and now I manage
                multiple service bookings daily. Highly recommended!”
                <br />
                <span className="text-sm text-gray-500">
                  — Deepak, Electrician
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Diffrent Types services */}
      <section className="bg-[#2c597a] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm underline md:text-xl font-bold text-white mb-4">
            Your Trusted <br /> Local Service Experts
          </p>
          <p className="text-white text-l md:text-l mb-12">
            Discover skilled professionals — from electricians to cooks — ready
            to serve you at your doorstep.
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
          <Link to="/vendors">
            <button className="bg-[#00c2c2] hover:bg-[#00a8a8] text-white font-semibold px-8 py-3 rounded-full shadow transition">
              START YOUR FINDING
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default VendorSection;
