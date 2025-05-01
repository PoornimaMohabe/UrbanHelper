import React from "react";

const vendor = {
  name: "Imran Khan",
  email: "imran.ac@example.com",
  mobileNumber: "9090909090",
  role: "Worker",
  profileImage: "https://example.com/images/imran.jpg",
  serviceType: "AC Repair",
  experience: "7 years",
  charges: 600,
  location: "Hyderabad",
  status: "Available",
};

const VendorDetails = () => {
  return (
    <section className="min-h-screen bg-[#f7f8fa] px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
       
        <div className="flex items-start gap-6">
          <img
            src={vendor.profileImage}
            alt={vendor.name}
            className="w-28 h-28 rounded-xl object-cover shadow-sm"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {vendor.name}
            </h2>
            <p className="text-gray-600 mt-1">
              {vendor.role} • {vendor.serviceType}
            </p>
            <p className="text-sm text-gray-500">{vendor.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                ✅ {vendor.status}
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Charges: ₹{vendor.charges}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

    
        <div className="flex gap-8 text-sm text-gray-500 font-medium border-b pb-2">
          <span className="text-indigo-600 border-b-2 border-indigo-600">About</span>
          <span className="cursor-pointer hover:text-indigo-600">Experience</span>
          <span className="cursor-pointer hover:text-indigo-600">Reviews</span>
          <span className="cursor-pointer hover:text-indigo-600">Contact</span>
        </div>

      
        <div className="mt-6 text-sm text-gray-700 leading-relaxed">
          <h3 className="text-base font-semibold mb-2">About Imran</h3>
          <p>
            Imran is a professional AC Repair technician with over <b>{vendor.experience}</b> of experience.
            He is based in <b>{vendor.location}</b> and offers reliable and affordable service starting at just <b>₹{vendor.charges}</b>.
            Clients appreciate his prompt work and customer satisfaction.
          </p>
        </div>

       
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-2">Contact Details</h3>
            <div className="text-sm space-y-1">
              <p>Email: <span className="text-blue-600 underline">{vendor.email}</span></p>
              <p>Phone: {vendor.mobileNumber}</p>
              <p>Service Type: {vendor.serviceType}</p>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Actions</h3>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition text-sm">
                Book Service
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorDetails;