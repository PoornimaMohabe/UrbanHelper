import React, { useState } from "react";
import axios from "axios";
import "../AuthStyles.css";
import { useNavigate } from "react-router-dom";
import Toastnotification from "../utils/Toastnotification";
import { VENDOR_REGISTER_URL } from "../utils/url";

function VendorRegister({ toggle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    serviceType: "",
    experience: "",
    charges: "",
    location: "",
    status: "Available",
    description: "",
    profileImage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = Toastnotification();
  const navigate = useNavigate();

  const serviceTypes = [
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(VENDOR_REGISTER_URL, formData);
      const { status, msg } = response.data;

      if (!status) {
        showToast("Registration Failed", msg, "error");
      } else {
        showToast("Success", "Vendor registered successfully", "success");
        navigate("/loginSignup");
      }
    } catch (error) {
      console.error("Vendor Registration Error:", error);
      showToast("Something went wrong", error.message, "error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Register as Vendor
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="auth-input"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="auth-input"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="auth-input"
            onChange={handleChange}
            value={formData.mobileNumber}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="auth-input"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <select
            name="serviceType"
            className="auth-input"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select Service Type</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g., 2 years)"
            className="auth-input"
            onChange={handleChange}
            value={formData.experience}
          />
          <input
            type="number"
            name="charges"
            placeholder="Charges per visit (₹)"
            className="auth-input"
            onChange={handleChange}
            value={formData.charges}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="auth-input"
            onChange={handleChange}
            value={formData.location}
          />
          <input
            type="text"
            name="profileImage"
            placeholder="Profile Image URL"
            className="auth-input col-span-1 md:col-span-2"
            onChange={handleChange}
            value={formData.profileImage}
            required
          />
          <textarea
            name="description"
            placeholder="Describe your service"
            className="auth-input col-span-1 md:col-span-2"
            onChange={handleChange}
            value={formData.description}
            required
            rows={4}
          />
          <button
            className="signauth-button col-span-1 md:col-span-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?
          <button
            className="text-blue-600 font-semibold ml-2"
            onClick={() => {
              navigate("/loginSignup");
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default VendorRegister;
