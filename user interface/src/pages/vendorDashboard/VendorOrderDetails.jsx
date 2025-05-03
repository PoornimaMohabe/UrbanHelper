import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GET_VENDOR_BOOKING,
  SERVICE_REQUEST_UPDATE_URL,
} from "../../utils/url";
import Toastnotification from "../../utils/Toastnotification";
import { Show } from "@chakra-ui/react";

const VendorOrderDetails = () => {
  const [bookingsData, setBookingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusColors = {
    Pending: "text-yellow-600 bg-yellow-100",
    Accepted: "text-green-600 bg-green-100",
    Completed: "text-blue-600 bg-blue-100",
    "Work In Progress": "text-purple-600 bg-purple-100",
  };

  const { showToast } = Toastnotification();

  const fetchVendorBookings = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(GET_VENDOR_BOOKING, {
        headers: {
          Authorization: token,
        },
      });
      console.log("Bookings fetched:", response.data.bookings);
      setBookingsData(response.data.bookings || []);
    } catch (error) {
      console.error("Error fetching vendor bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendorBookings();
  }, []);

  console.log("Bookings data:", bookingsData);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      // Send the update request to backend
      const response = await axios.patch(
        `${SERVICE_REQUEST_UPDATE_URL}/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.data.status) {
        showToast("Success", "Status updated successfully", "success");
        const updated = bookingsData.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        );
        setBookingsData(updated);
        console.log("Status updated:", response.data);
      } else {
        showToast(`${response.data.msg}`, "Failed to update status", "error");
        console.error("Failed to update status:", response.data.msg);
      }

      // Update frontend state only if backend update is successful
    } catch (error) {
      console.error("Failed to update status:", error);
      showToast(`${error.message}`, "Failed to update status", "error");
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading bookings...</div>;
  }

  return (
    <div className="bg-white rounded-md shadow p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Manage Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Vendor</th>
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time onward user available</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Remarks</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bookingsData.map((order) => (
              <tr
                key={order._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 text-sm font-medium text-gray-800">
                  {order._id}
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-blue-600">
                  {order.username}
                </td>
                <td className="py-3 px-4 text-sm">
                  {order.vendorName}
                  <br />
                  <span className="text-gray-500 text-xs">
                    {order.vendorMobileNumber}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{order.serviceType}</td>
                <td className="py-3 px-4 text-sm">{order.serviceDate}</td>
                <td className="py-3 px-4 text-sm">{order.serviceTime}</td>
                <td className="py-3 px-4 text-sm">{order.address}</td>
                <td className="py-3 px-4 text-sm">{order.userRemarks}</td>
                <td className="py-3 px-4 text-sm">
                  <select
                    className={`px-3 py-1 rounded-full text-xs font-medium focus:outline-none ${
                      statusColors[order.status] || ""
                    }`}
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Work In Progress">Work In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorOrderDetails;
