import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GET_VENDOR_BY_ID, BOOK_VENDOR } from "../../utils/url";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Toastnotification from "../../utils/Toastnotification";

const VendorDetails = () => {
  const { id } = useParams();
  const userDetails = JSON.parse(localStorage.getItem("user")) || "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { showToast } = Toastnotification();

  const [vendor, setVendor] = useState({});
  const [bookingData, setBookingData] = useState({
    serviceDate: "",
    serviceTime: "",
    address: "",
    userRemarks: "",
  });

  const fetchVendor = async () => {
    const getSingleVendorURL = `${GET_VENDOR_BY_ID}/${id}`;
    try {
      const response = await axios.get(getSingleVendorURL);
      setVendor(response.data.vendor);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchVendor();
  }, [id]);

  const handleBooking = async () => {
    const bookingPayload = {
      ...bookingData,
      userId: userDetails?._id,
      username: userDetails?.name,
      vendorId: vendor?._id,
      vendorName: vendor?.name,
      serviceType: vendor?.serviceType,
      vendorMobileNumber: vendor?.mobileNumber,
    };

    try {
      const res = await axios.post(BOOK_VENDOR, bookingPayload);
      if (res.data.status) {
        showToast("Booking Successful", "Your service has been booked.");
        onClose();
        setBookingData({
          serviceDate: "",
          serviceTime: "",
          address: "",
          userRemarks: "",
        });
      }
    } catch (error) {
      showToast("Booking Failed", `${error.message}`, "eror");
      console.log(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#f7f8fa] px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-start gap-6">
          <img
            src={vendor.profileImage}
            alt={vendor.name}
            className="w-28 h-28 rounded-xl object-cover shadow-sm"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              {vendor.name}
            </h2>
            <p className="text-gray-600 mt-1">{vendor.serviceType}</p>
            <p className="text-sm text-gray-500">{vendor.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                ✅ {vendor.status}
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 font-medium">
                Charges: ₹{vendor.charges}
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <div className="flex gap-8 text-sm text-gray-500 font-medium border-b pb-2">
          <span className="text-indigo-600 border-b-2 border-indigo-600">
            About
          </span>
          <span className="cursor-pointer hover:text-indigo-600">
            Experience
          </span>
          <span className="cursor-pointer hover:text-indigo-600">Reviews</span>
          <span className="cursor-pointer hover:text-indigo-600">Contact</span>
        </div>

        <div className="mt-6 text-sm text-gray-700 leading-relaxed">
          <h3 className="text-base font-semibold mb-2">About {vendor.name}</h3>
          <p>{vendor.description}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Actions</h3>
            <div className="flex gap-4">
              <button
                onClick={onOpen}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition text-sm"
              >
                Book Service
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book {vendor.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Service Date
              </label>
              <Input
                type="date"
                value={bookingData.serviceDate}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    serviceDate: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Service Time Onwards
              </label>
              <Input
                value={bookingData.serviceTime}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    serviceTime: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <Input
                type="text"
                placeholder="Enter Address"
                value={bookingData.address}
                onChange={(e) =>
                  setBookingData({ ...bookingData, address: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Remarks (Optional)
              </label>
              <Textarea
                placeholder="Any specific instructions?"
                value={bookingData.userRemarks}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    userRemarks: e.target.value,
                  })
                }
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleBooking}>
              Confirm Booking
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default VendorDetails;
