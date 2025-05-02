const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["worker"],
      default: "worker"
    },
    profileImage: {
      type: String, 
      required : true,
    },
    serviceType: {
      type: String,
      enum: [
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
        "Driver"
      ],
      required: true
    },
    experience: {
      type: String
    },
    charges: {
      type: Number
    },
    location: {
      type: String
    },
    status: {
      type: String,
      enum: ["Available", "Not Available"],
      default: "Available"
    },
    otp: {
      type: Number
    },
    description: {
      type: String, 
      required: true

    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const VendorModel = mongoose.model("vendorDetails", vendorSchema);

module.exports = {
  VendorModel
};
