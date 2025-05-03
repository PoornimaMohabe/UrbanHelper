import React from "react";
import { Routes, Route } from "react-router-dom";
import AvailableVendors from "./pages/vailableVendors/AvailableVendors";
import VendorDetails from "./pages/vailableVendors/VendorDetails";
import HomeStatic from "./pages/userHome/HomeStatic";
import ScrollToTop from "./pages/ScrollTop";
import AuthLayout from "./pages/AuthLayout";
import UserBookService from "./pages/UserBookService";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import VendorRegister from "./pages/VendorRegister";
import VendorDashboard from "./pages/vendorDashboard/VendorDashboard";
import VendorOrderDetails from "./pages/vendorDashboard/VendorOrderDetails";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const state = useSelector((state) => state);

  return (
    <ScrollToTop>
      <Routes>
        <Route
          path="/"
          element={
            state.auth.role == "worker" ? <VendorDashboard /> : <HomeStatic />
          }
        />
        <Route path="/vendors" element={<AvailableVendors />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="loginSignup" element={<AuthLayout />} />
        <Route path="/bookService" element={<UserBookService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/vendor-registration" element={<VendorRegister />} />
        <Route path="/service-request" element={<VendorOrderDetails />} />


      </Routes>
    </ScrollToTop>
  );
};

export default AllRoutes;
