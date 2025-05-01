// AvailableVendors.jsx
import React, { useState } from "react";
import VendorCard from "./VendorCard";

const vendors = [
    {
      id: 1,
      name: "Wolfe Blackspent",
      role: "Business Analyst",
      tag: "PRO",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b9c5b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      desc:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      id: 1,
      name: "Wolfe Blackspent",
      role: "Business Analyst",
      tag: "PRO",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b9c5b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      desc:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      id: 1,
      name: "Wolfe Blackspent",
      role: "Business Analyst",
      tag: "PRO",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b9c5b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      desc:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      id: 1,
      name: "Wolfe Blackspent",
      role: "Business Analyst",
      tag: "PRO",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b9c5b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      desc:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    },
    {
      id: 1,
      name: "Wolfe Blackspent",
      role: "Business Analyst",
      tag: "PRO",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b9c5b?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      desc:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor",
    }
   
  ];
  
  const categories = ["All", "Plumber", "Cleaner", "Cook", "Electrical", "Welder"];

const AvailableVendors = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredVendors =
      selectedCategory === "All"
        ? vendors
        : vendors.filter((v) => v.category === selectedCategory);
  return (
    <section className="bg-gradient-to-br from-[#dcdae2] to-[#686769] py-20 px-6 md:px-20 min-h-screen text-white">
 
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">
          Discover Professional Vendors
        </h2>
        <p className="text-sm text-gray-900">
          Connect with top-rated vendors to boost your business collaboration.
        </p>
      </div>

    
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        <span className="text-[#280927] underline ">Select vendor type</span>
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

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
};

export default AvailableVendors;
