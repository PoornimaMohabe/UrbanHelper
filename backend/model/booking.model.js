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
    vendorName :{
        type: String,
        required: true
    }, 
    vendorMobileNumber :{
        type: String,
        required: true
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
    serviceDate: {
        type: String, 
        required: true
    },
    serviceTime: {
        type: String,
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
