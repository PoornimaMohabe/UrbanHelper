import AllRoutes from "./AllRoutes";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AuthLayout from "./pages/AuthLayout";
import BookingDetails from "./pages/BookingDetails";
import ContactUs from "./pages/ContactUs";
import Payment from "./pages/Payment";
import HomeStatic from "./pages/userHome/HomeStatic";
import VendorCarousel from "./pages/userHome/VendorCarousel";
import VendorSection from "./pages/userHome/VendorSection";
import AvailableVendors from "./pages/vailableVendors/AvailableVendors";
import VendorDetails from "./pages/vailableVendors/VendorDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* authlayout is parent of login and signup  */}
        {/* <AuthLayout/>       */}
      </div>
      <div className="mt-28">
        <AllRoutes />
        {/* <AuthLayout/> */}
        {/* <About/> */}
        {/* <ContactUs/> */}
        {/* <HomeStatic />
        <VendorCarousel />
        <VendorSection /> */}

        {/* <AvailableVendors/> */}
        {/* <VendorDetails/> */}
        {/* <BookingDetails/> */}
        {/* <Toaster position="top-center" reverseOrder={false} />
        <Payment /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
