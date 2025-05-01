const { BookingModel } = require("../model/booking.model");


const createBooking = async (req, res) => {
    const payload = req.body;
    try {
        const newBooking = new BookingModel(payload);
        await newBooking.save();
        res.status(201).json({status : true , msg: "Booking created successfully", booking: newBooking });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};

const getAllBookings = async (req, res) => {

    try {
        const bookings = await BookingModel.find()
        res.status(200).json({status : true , bookings });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};





const updateBookingStatus = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const booking = await BookingModel.findByIdAndUpdate({_id :id}, payload);
        res.status(200).json({status : true , msg: "booking status update successfully", booking });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};

module.exports = {
    createBooking,
    getAllBookings,
    // getUserBookings,
    // getVendorBookings,
    updateBookingStatus
};
