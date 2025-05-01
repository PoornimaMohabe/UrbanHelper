import React from 'react'
import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
    return (
        <section className="bg-[#ffe7f4] mt-20 py-16 px-6 md:px-12">
        
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
           
            <div className="w-full md:w-1/2">
              <p className="text-sm text-green-900 mb-2">How can we help you?</p>
              <h2 className="text-3xl font-bold mb-4">Contact us</h2>
              <p className="text-gray-700 mb-6">
                We’re here to help and answer any questions you might have. We look forward to hearing from you!
              </p>
    
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-5/6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-5/6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
                <textarea
                  rows="4"
                  placeholder="Enter message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-800 text-white py-2 px-6 rounded-md font-medium hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
    
      
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                alt="Contact illustration"
                className="w-80"
              />
            </div>
          </div>
    
    
          <div className="bg-white max-w-7xl mx-auto mt-24 py-12 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center rounded-lg">
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="flex justify-center items-start gap-3 text-gray-700 text-sm">
                <MapPin size={18} className="mt-1" />
                Søren Frichs Vej 42B, 8230 Åbyhøj
              </div>
            </div>
    
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <div className="flex justify-center items-start gap-3 text-gray-700 text-sm">
                <Phone size={18} className="mt-1" />
                +45 71 99 77 07
              </div>
            </div>
    
            <div>
              <h3 className="text-lg font-semibold mb-2">Mail</h3>
              <div className="flex justify-center items-start gap-3 text-gray-700 text-sm">
                <Mail size={18} className="mt-1" />
                <a
                  href="mailto:mail@sleeknote.com"
                  className="text-blue-600 hover:underline"
                >
                  mail@sleeknote.com
                </a>
              </div>
            </div>
          </div>
        </section>
      );
}

export default ContactUs
