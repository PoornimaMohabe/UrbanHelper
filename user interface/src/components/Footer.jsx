import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-gradient-to-br from-[#2d2b31] to-[#686769] text-white py-12 px-6 md:px-20">
      
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-3">Subscribe our Newsletter</h2>
          <p className="text-sm text-gray-200 max-w-xl mx-auto mb-6">
            If you're interested in our partnership and would like to find out
            some more information, one of our advisors is excited to help.
          </p>
          <button className="bg-white text-blue-700 font-medium px-6 py-2 rounded-lg shadow hover:opacity-90 transition">
            Get started
          </button>
        </div>
  
       
        <hr className="border-t border-[#FFFFFF33] mb-10" />
  
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-center sm:text-left">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-light leading-none">
              Urban<br />
              <span className="font-bold">Helper.</span>
            </h1>
            <p>Making everyday life easier, one service at a time.</p>
          </div>
  
    
          <div>
            <h3 className="text-green-300 font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Find Vendors</li>
              <li>Register as Vendor</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-green-300 font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li>Orders</li>
              <li>Status</li>
              <li>About Us</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-green-300 font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Contact</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-green-300 font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-3 text-white text-lg mt-2">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300 border-t border-[#ffffff33] pt-4 gap-2">
          <p>©2025 Urban Helper. All Rights Reserved.</p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;