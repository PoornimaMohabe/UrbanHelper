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


const getUserBookings = async (req, res) => {
    const id = req.user.userId
    console.log(id);
    

    try {
        const bookings = await BookingModel.find({ userId : id })
        res.status(200).json({status : true, bookings });
    } catch (error) {
        res.status(400).json({status : false, msg: error.message });
    }
};

// const getVendorBookings = async (req, res) => {
//     const { vendorId } = req.params;
//     try {
//         const bookings = await BookingModel.find({ vendorId }).populate("userId");
//         res.status(200).json({ bookings });
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };

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



const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await BookingModel.findByIdAndDelete({_id :id});
        res.status(200).json({status : true , msg: "booking delete successfully", booking });
    } catch (error) {
        res.status(400).json({status : false , msg: error.message });
    }
};

module.exports = {
    createBooking,
    getAllBookings,
    getUserBookings,
    // getVendorBookings,
    updateBookingStatus, 
    deleteBooking
};
