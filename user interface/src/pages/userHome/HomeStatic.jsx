import React from "react";
import userhomeStatic from "../../assets/images/userhomeStatic.png";
import easyuse from "../../assets/images/easy.png";
import easypay from "../../assets/images/easyPay.png";
import homeStatic from "../../assets/images/homeStatic.png";

function HomeStatic() {
  return (
    <section className="bg-[#c3c6c7] mt-36">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Easiest <br /> Vendor Finding <br /> Experience
          </h1>
          <p className="text-gray-600 mb-6">
            From electricians to cooks, we simplify your search for verified,
            reliable service providers — all in one place. Whether it’s for
            daily help or special occasions, get connected with the right
            professionals with just a few clicks.
          </p>
          <button className="bg-[#00bcd4] hover:bg-[#00a2b2] text-white font-semibold py-3 px-6 rounded-full text-sm tracking-wide">
            START YOUR FINDING
          </button>
        </div>
        <div className="relative w-[400px] h-[280px] mx-auto lg:mx-0">
          <img
            src={homeStatic}
            alt="Vendor finding 1"
            className="absolute top-0 left-0 w-[220px] h-[200px] rounded-xl shadow-lg z-10 object-cover"
          />
          <img
            src={userhomeStatic}
            alt="Vendor finding 2"
            className="absolute top-10 left-[40%] w-[220px] h-auto rounded-xl shadow-xl z-0"
          />
        </div>
      </div>

      <div className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <div>
            <img
              src={easyuse}
              alt="Easy"
              className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">So Easy to Use</h3>
            <p className="text-sm text-gray-600">
              We take the guesswork out of registering with <u>handy tools</u>{" "}
              like our checklist and your own registry advisor.
            </p>
          </div>
          <div>
            <img
              src={easypay}
              alt="Store"
              className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">Hasless and easy Pay</h3>
            <p className="text-sm text-gray-600">
              With classic and unique gifts, gift cards, and{" "}
              <u>honeymoon funds</u>, you’ll find everything you could ever
              want.
            </p>
          </div>
          <div>
            <div className="bg-[#ed1c24] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
              Offers
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Get More Offers in Booking
            </h3>
            <p className="text-sm text-gray-600">
              It’s the <b>best</b> completion discount around. Use it as many
              times as you want for six months after your big day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeStatic;
