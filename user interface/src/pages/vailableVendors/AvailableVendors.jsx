import React, { useState, useEffect } from "react";
import axios from "axios";
import VendorCard from "./VendorCard";
import { ALL_VENDOR_URL } from "../../utils/url";
import Toastnotification from "../../utils/Toastnotification";

const AvailableVendors = () => {
  
  const [vendors, setVendors] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { showToast } = Toastnotification();

  const categories = [
    "All",
    "Electrician",
    "Plumber",
    "Cleaner",
    "Cook",
    "AC Technician",
    "Carpenter",
    "Painter",
    "Welder",
    "Spa Therapist",
    "Salon Expert",
    "Pest Control",
    "Mechanic",
    "Driver",
  ];

  const fetchAllVendors = async () => {
    try {
      const response = await axios.get(ALL_VENDOR_URL);
      setVendors(response.data.vendors);
    } catch (error) {
      console.error("Error fetching vendors:", error.message);
      showToast("Error", "Failed to fetch vendors", "error");
    }
  };

  useEffect(() => {
    fetchAllVendors();
  }, []);

  const uniqueLocations = [
    "All",
    ...new Set(vendors.map((vendor) => vendor.location)),
  ];

  const filteredVendors = vendors
    .filter((vendor) =>
      selectedLocation === "All" ? true : vendor.location === selectedLocation
    )
    .filter((vendor) =>
      selectedCategory === "All"
        ? true
        : vendor.serviceType === selectedCategory
    );

  return (
    <section className="bg-gradient-to-br from-[#dcdae2] to-[#686769] py-20 px-6 md:px-20 min-h-screen text-white">
      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">
          Discover Professional Vendors
        </h2>
        <p className="text-sm text-gray-900">
          Connect with top-rated vendors to boost your business collaboration.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <div>
          <span className="block text-[#280927] underline mb-1">
            Select Location
          </span>
          <select
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
            className="bg-white text-gray-700 px-4 w-60 py-2 rounded-md shadow text-sm"
          >
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="block text-[#280927] underline mb-1">
            Select Vendor Type
          </span>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="bg-white text-gray-700 px-4 w-60 py-2 rounded-md shadow text-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <VendorCard key={vendor.email} vendor={vendor} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-100">
            No vendors found for the selected filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default AvailableVendors;
