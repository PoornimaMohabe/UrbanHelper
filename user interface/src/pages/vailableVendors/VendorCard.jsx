import React from 'react'
import { FaEnvelope, FaUserPlus } from "react-icons/fa";



function VendorCard({vendor}) {
  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-md w-full max-w-xs">
    <div className="flex justify-center">
      <img
        src={vendor.image}
        alt={vendor.name}
        className="w-20 h-20 rounded-full border-4 border-white shadow"
      />
    </div>
    
    <h3 className="mt-2 text-[#3f1b4e] font-bold text-[16px]">
      {vendor.name}
    </h3>
    <p className="text-sm text-gray-500">{vendor.role}</p>
    <p className="text-xs text-gray-400 mt-2 px-4">{vendor.desc}</p>
    <div className="flex justify-center gap-3 mt-10">
      <button className="border border-[#8a388f] text-[#8a388f] px-4 py-2 text-sm rounded-lg font-semibold">
        Message
      </button>
      <button className="bg-[#8a388f] text-white px-6 py-2 text-sm rounded-lg font-semibold">
        Book
      </button>
    </div>
  </div>
  )
}

export default VendorCard
