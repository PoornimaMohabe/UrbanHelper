const express = require("express");
const { createBooking, updateBookingStatus, getAllBookings, deleteBooking, getUserBookings,  } = require("../controller/booking.controller");
const { authmiddleware } = require("../middleware/auth.middleware");


const bookingRouter = express.Router();

bookingRouter.post("/book-vendor", createBooking);
bookingRouter.get("/get-all-bookings", authmiddleware,  getAllBookings);
bookingRouter.get("/get-user-booking",authmiddleware, getUserBookings);
// bookingRouter.get("/vendor/:vendorId", getVendorBookings);
bookingRouter.patch("/vendor-status/:id", updateBookingStatus);
bookingRouter.delete("/delete-booking/:id", deleteBooking);


module.exports = {
    bookingRouter
};
