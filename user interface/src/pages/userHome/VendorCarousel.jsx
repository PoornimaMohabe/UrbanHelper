import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import userhomeStatic from "../../assets/images/userhomeStatic.png";

const slides = [
  {
    title: "Find Vendors Easily",
    description:
      "Quickly discover trusted vendors near you with just a few clicks. Filter by location, budget, and rating to make wedding planning effortless.",
    power:
      "Say goodbye to hours of searching—our platform brings the best vendors straight to you.",
    button: "Find Vendors",
    image: userhomeStatic,
    bg: "bg-gradient-to-r from-blue-50 to-cyan-100",
  },
  {
    title: "All-in-One Vendor Hub",
    description:
      "From photographers to decorators, we bring all wedding vendors under one roof to simplify your journey and save your time.",
    power:
      "Everything you need for your big day, organized in one place for your convenience.",
    button: "Explore Vendors",
    image: userhomeStatic,
    bg: "bg-gradient-to-r from-pink-50 to-red-100",
  },
  {
    title: "Vendors at Your Doorstep",
    description:
      "Book and relax — our trusted vendors come right to your doorstep to serve you with quality and care for your big day.",
    power:
      "Enjoy peace of mind as the best professionals handle every detail with precision.",
    button: "Book Vendor",
    image: userhomeStatic,
    bg: "bg-gradient-to-r from-green-50 to-emerald-100",
  },
];
export default function VendorCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-full h-[500px] overflow-hidden">
      <div className="relative h-full">
        <div
          className="whitespace-nowrap transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`inline-block w-full h-full ${slide.bg}`}
            >
              <div className="h-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* Left: Text */}
                <div className="lg:w-1/2 text-center lg:text-left max-w-xl ">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mb-3 text-lg">
                    {slide.description}
                  </p>
                  <p className="text-gray-700 font-medium italic mb-6 leading-relaxed">
                    {slide.power}
                  </p>
                  <button className="bg-[#00bcd4] hover:bg-[#0197a0] text-white px-6 py-3 rounded-full font-semibold transition shadow">
                    {slide.button}
                  </button>
                </div>

                <div className="lg:w-1/2 flex justify-center items-center h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full max-w-md mx-auto drop-shadow-md object-contain h-[300px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-[#00bcd4]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
