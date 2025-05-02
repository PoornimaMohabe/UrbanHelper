import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Button, Spinner } from "@chakra-ui/react";
import { GET_USER_BOOKING, DELETE_BOOKING } from "../utils/url";
import Toastnotification from "../utils/Toastnotification";

const UserBookService = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = Toastnotification();

  // Fetch bookings
  const fetchUserBookings = async () => {
    try {
      const response = await axios.get(GET_USER_BOOKING, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.data.status) {
        setBookings(response.data.bookings);
      } else {
        showToast("Error", response.data.msg, "error");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Delete a booking
  const deleteBooking = async (id) => {
    try {
      const res = await axios.delete(`${DELETE_BOOKING}/${id}`);
      fetchUserBookings();
      showToast("success", res.data.msg);
    } catch (err) {
      showToast("Error", err.message, "error");
    }
  };

  useEffect(() => {
    fetchUserBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" color="blue.500" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-blue-700">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Service Type:</span>
                  <span>{booking.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Address:</span>
                  <span>{booking.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Date:</span>
                  <span>{booking.serviceDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Time:</span>
                  <span>{booking.serviceTime}:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="capitalize">{booking.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Remarks:</span>
                  <span>{booking.userRemarks || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Vendor:</span>
                  <span>{booking.vendorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Contact:</span>
                  <span>{booking.vendorMobileNumber}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Created:</span>
                  <span>{new Date(booking.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Updated:</span>
                  <span>{new Date(booking.updatedAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-4 text-right">
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => deleteBooking(booking._id)}
                >
                  Delete Booking
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBookService;
