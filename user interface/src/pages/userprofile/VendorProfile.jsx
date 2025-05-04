import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaToggleOn,
} from "react-icons/fa";
import axios from "axios";
import { VENDOR_UPDATE_STATUS_URL } from "../../utils/url";
import Toastnotification from "../../utils/Toastnotification";

const VendorProfile = () => {
  const vendorFromStorage = JSON.parse(localStorage.getItem("user")) || {};
  const [vendor, setVendor] = useState(vendorFromStorage);
  const [status, setStatus] = useState(vendor.status === "Available");
  const { showToast } = Toastnotification();

  const handleToggleStatus = async () => {
    const updatedStatus = status ? "Not Available" : "Available";
    try {
      const response = await axios.patch(
        `${VENDOR_UPDATE_STATUS_URL}/${vendor._id}`,
        { status: updatedStatus }
      );

      if (response.data.status) {
        const updatedVendor = { ...vendor, status: updatedStatus };
        setVendor(updatedVendor);
        setStatus(!status);
        localStorage.setItem("user", JSON.stringify(updatedVendor));
        showToast("Success", response.data.msg, "success");
      }
    } catch (error) {
      console.error("Error updating status:", error.message);
      showToast("Error", error.message, "error");
    }
   
  };

  if (!vendor) {
    return (
      <div className="text-center text-gray-500 mt-20">
        No vendor profile data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-gray-100">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={vendor.profileImage}
            alt="Vendor"
            className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <h2 className="text-3xl font-extrabold text-indigo-700 mt-4">
            {vendor.name}
          </h2>
          <p className="text-sm text-gray-500 italic">{vendor.serviceType}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 px-4">
          <InfoItem icon={<FaEnvelope />} label="Email" value={vendor.email} />
          <InfoItem
            icon={<FaPhone />}
            label="Phone"
            value={vendor.mobileNumber}
          />
          <InfoItem
            icon={<FaMapMarkerAlt />}
            label="Location"
            value={vendor.location}
          />
          <InfoItem
            icon={<FaBriefcase />}
            label="Service"
            value={vendor.serviceType}
          />
          <InfoItem
            icon={<FaClock />}
            label="Experience"
            value={`${vendor.experience} years`}
          />

          {/* Availability toggle */}
          <div className="flex items-center gap-3">
            <FaToggleOn className="text-indigo-500" />
            <span className="font-semibold">Status:</span>
            <label className="flex items-center cursor-pointer ml-auto">
              <span className="mr-3 text-sm font-medium text-gray-600">
                {status ? "Available" : "Busy"}
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={status}
                  onChange={handleToggleStatus}
                  className="sr-only"
                />
                <div
                  className={`block w-12 h-6 rounded-full transition duration-300 ${
                    status ? "bg-green-500" : "bg-red-400"
                  }`}
                ></div>
                <div
                  className={`dot absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition transform ${
                    status ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Last Updated:{" "}
          <span className="italic">
            {new Date(vendor.updatedAt).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-indigo-500">{icon}</div>
    <span className="font-semibold">{label}:</span>
    <span className="text-sm text-gray-600">{value}</span>
  </div>
);

export default VendorProfile;
