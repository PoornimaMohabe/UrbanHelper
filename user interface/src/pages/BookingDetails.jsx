import React from "react";

const sampleBooking = {
    userId: "64f1c2ef8e7a94fc9d88a001",
    vendorId: "64f1c2ef8e7a94fc9d88a002",
    serviceDate: "2025-05-01",
    serviceTime: "5:00 PM",
    address: "Street No 45, Jubilee Hills, Hyderabad",
    status: "Accepted",
    userRemarks: "Please come with AC parts if possible",
    createdAt: "2025-04-29T09:00:00Z",
    updatedAt: "2025-04-30T12:00:00Z"
};

const BookingDetails = ({ booking }) => {
    return (
        <div className="bg-gradient-to-b from-[#f3f4f6] to-[#e5e7eb] min-h-screen py-10 px-6 md:px-20 text-gray-800">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Summary</h2>


                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <h3 className="font-semibold text-gray-600">User ID</h3>
                        <p className="text-sm text-gray-900">64f1c2ef8e7a94fc9d88a001</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold text-gray-600">Vendor ID</h3>
                        <p className="text-sm text-gray-900">64f1c2ef8e7a94fc9d88a001</p>
                    </div>
                </div>


                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-semibold text-gray-600">Service Date</h3>
                        <p className="text-sm">2025-05-01</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Service Time</h3>
                        <p className="text-sm">8</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-600">Status</h3>
                        <span className="inline-block px-3 py-1 text-sm rounded-full font-medium  bg-green-500 text-white"
                        >
                            Accepted
                        </span>
                        <span className="inline-block px-3 py-1 text-sm rounded-full font-medium bg-blue-100 text-blue-800"
                        >
                            Pending
                        </span>
                    </div>
                </div>


                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-600">Service Address</h3>
                        <p className="text-sm text-gray-900">Street No 45, Jubilee Hills, Hyderabad</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-600">User Remarks</h3>
                        <p className="text-sm italic text-gray-700">"Please come with AC parts if possible"</p>
                    </div>

                </div>


                <div className="text-xs text-gray-500 pt-6 border-t">
                    <p>Created at:</p>
                    <p>Last updated:</p>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
