const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
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
        required: false
    },
    serviceType: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: false
    },
    charges: {
        type: Number,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ["Available", "Not Available"],
        default: "Available"
    },
    otp: {
        type: Number,
        required: false
    }
}, 
{
    timestamps: true,
    versionKey: false
});

const VendorModel = mongoose.model("vendorDetails", vendorSchema);

module.exports = {
    VendorModel
};
