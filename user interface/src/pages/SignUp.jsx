import React, { useState } from "react";
import axios from "axios";
import "../AuthStyles.css";
import { useNavigate } from "react-router-dom";
import Toastnotification from "../utils/Toastnotification";
import { registerURL } from "../utils/url";

function SignUp({ toggle }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { showToast } = Toastnotification();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const registerData = {
        name,
        email,
        mobileNumber,
        password,
      };

      const response = await axios.post(registerURL, registerData);
      const { msg } = response.data;

      if (msg === `user already register with email ${email}`) {
        showToast("Use another email", msg, "error");
      } else if (
        msg === `user already register with mobile number ${mobileNumber}`
      ) {
        showToast("Use another mobile number", msg, "error");
      } else if (msg === `Error while hashing password`) {
        showToast("Error while hashing password", msg, "error");
      } else if (msg === `user register successfully`) {
        showToast(
          "User registered successfully",
          "Please login using email and password"
        );
        toggle();
      } else {
        showToast(msg, msg, "error");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      showToast("Something went wrong", error.message, "error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="auth-container ">
      <div className="auth-box">
        <div className="signleft-panel">
          <div className="animated-circles" />
          <div className="color-circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="welcome-text">
            <h2 className="text-white text-3xl font-bold mb-6">
              Welcome to <br />Urban Helper
            </h2>
            <p className="text-white text-lg">
            Create your free account in just a minute! Whether you’re looking to book trusted services or offer your skills as a vendor
            </p>
          </div>
        </div>
        <div className="form-panel">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="auth-input"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="signauth-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <div className="flex items-center mt-4">
            <p className="text-sm text-gray-600 mt-4">
              Register as a vendor?
              <button
                className="text-blue-600 font-semibold "
                onClick={() => navigate("/vendor-registration")}
              >
                Click here
              </button>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Already have an account?
              <button className="text-blue-600 font-semibold" onClick={toggle}>
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
