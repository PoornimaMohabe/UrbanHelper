import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const userDetails = JSON.parse(localStorage.getItem("user")) || {};
  const state = useSelector((state) => state);

  if (!userDetails || Object.keys(userDetails).length === 0) {
    return (
      <div className="text-center text-gray-500 mt-20">
        No user details found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
          {state?.auth?.role === "worker" ? `Vendor Profile` : `User Profile`}
        </h2>

        <div className="flex flex-col gap-4 text-gray-700 text-base">
          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-500" />
            <span className="font-medium">Name:</span> {userDetails?.name}
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500" />
            <span className="font-medium">Email:</span> {userDetails?.email}
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-indigo-500" />
            <span className="font-medium">Mobile:</span>{" "}
            {userDetails?.mobileNumber}
          </div>

          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-500" />
            <span className="font-medium">Role:</span> {userDetails?.role}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Last Updated: {new Date(userDetails?.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
