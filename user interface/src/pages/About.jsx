import React from 'react'

function About() {
    return (
        <section className="flex flex-col md:flex-row items-start justify-center px-8 py-20 gap-12 bg-white">
  
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight mb-6">
              Why we are <span ><div className="w-10 h-10 bg-[#c4bba8] rounded-full mt-16"></div></span>
            </h2>
            <p className="text-md italic mb-6 text-gray-700"> Our mission is to empower brands with smart, scalable, and creative
              digital solutions that help them grow and connect with their
              audiences. From design to deployment, our team thrives on innovation
              and collaboration. We believe that success is built through trust,
              transparency, and a deep understanding of our clients’ goals.</p>
            <h4 className="bg-[#c4bba8] text-white mt-10 py-3 px-4  font-medium">
             Poornima Mohabe
            </h4>
            <p className="text-md text-[#d41f86] mt-2">Founder & CEO / FullStack Web Developer</p>
         
            
          </div>
    
   
          <div className="max-w-xl">
            <img
              src="https://img.freepik.com/free-photo/group-young-people-working-office_1303-27151.jpg"
              alt="About Us Team"
              className=" w-60 h-60 rounded-full mt-20 mb-8 object-cover"
            />
            <p className="text-gray-800 text-sm leading-relaxed">
              Our mission is to empower brands with smart, scalable, and creative
              digital solutions that help them grow and connect with their
              audiences. From design to deployment, our team thrives on innovation
              and collaboration. We believe that success is built through trust,
              transparency, and a deep understanding of our clients’ goals.
            </p>
          </div>
        </section>
      );
}

export default About
