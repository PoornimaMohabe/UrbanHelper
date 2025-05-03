const express = require("express");
const { createBooking, updateBookingStatus, getAllBookings, deleteBooking, getUserBookings, getVendorBookings,  } = require("../controller/booking.controller");
const { authmiddleware } = require("../middleware/auth.middleware");


const bookingRouter = express.Router();

bookingRouter.post("/book-vendor", createBooking);
bookingRouter.get("/get-all-bookings", authmiddleware,  getAllBookings);
bookingRouter.get("/get-user-booking",authmiddleware, getUserBookings);
bookingRouter.get("/service-request",authmiddleware,  getVendorBookings);
bookingRouter.patch("/service-status/:id", updateBookingStatus);
bookingRouter.delete("/delete-booking/:id", deleteBooking);


module.exports = {
    bookingRouter
};
