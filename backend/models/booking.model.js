const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDetails",
        required: true
    },
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vendorDetails",
        required: true
    },
    serviceDate: {
        type: String, // Example: "2025-05-01"
        required: true
    },
    serviceTime: {
        type: String, // Example: "5:00 PM"
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected", "Completed"],
        default: "Pending"
    },
    userRemarks: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    versionKey: false
});

const BookingModel = mongoose.model("bookingDetails", bookingSchema);

module.exports = {
    BookingModel
};
