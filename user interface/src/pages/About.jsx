import React from 'react'
import aboutimage from "../assets/images/about.jpg"

function About() {
    return (
        <section className="flex flex-col md:flex-row items-start justify-center px-8 py-20 gap-12 bg-white">
  
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight mb-6">
              Why we are <span ><div className="w-10 h-10 bg-[#c4bba8] rounded-full mt-16"></div></span>
            </h2>
            <p className="text-md italic mb-6 text-gray-700"> We are a team driven by a mission to connect people with verified local service experts. From electricians to cleaners, we bring trusted professionals right to your doorstep.</p>
            <h4 className="bg-[#c4bba8] text-white mt-10 py-3 px-4  font-medium">
             Poornima Mohabe
            </h4>
            <p className="text-md text-[#d41f86] mt-2">Founder & CEO / FullStack Web Developer</p>
         
            
          </div>
    
   
          <div className="max-w-xl">
            <img
              src={aboutimage}
              alt="About Us Team"
              className=" w-60 h-60 rounded-full mt-20 mb-8 object-cover"
            />
            <p className="text-gray-800 text-sm leading-relaxed">
            Our platform helps both users and vendors grow. While customers enjoy reliable help, vendors get real opportunities to earn and shine. We believe in growth, transparency, and service excellence.
            </p>
          </div>
        </section>
      );
}

export default About
