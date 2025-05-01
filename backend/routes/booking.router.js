const express = require("express");
const { createBooking, updateBookingStatus, getAllBookings } = require("../controller/booking.controller");


const bookingRouter = express.Router();

bookingRouter.post("/book-vendor", createBooking);
bookingRouter.get("/get-all-bookings", getAllBookings);
bookingRouter.patch("/vendor-status/:id", updateBookingStatus);

module.exports = {
    bookingRouter
};
