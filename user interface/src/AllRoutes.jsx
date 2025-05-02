import React from "react";
import { Routes, Route } from "react-router-dom";
import AvailableVendors from "./pages/vailableVendors/AvailableVendors";
import VendorDetails from "./pages/vailableVendors/VendorDetails";
import HomeStatic from "./pages/userHome/HomeStatic";
import ScrollToTop from "./pages/ScrollTop";
import AuthLayout from "./pages/AuthLayout";
import UserBookService from "./pages/UserBookService";

const AllRoutes = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeStatic />} />
        <Route path="/vendors" element={<AvailableVendors />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="loginSignup" element={<AuthLayout />} />
        <Route path="/bookService" element={<UserBookService />} />
        {/* Add more routes here if needed */}
      </Routes>
    </ScrollToTop>
  );
};

export default AllRoutes;
