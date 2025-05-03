import React from "react";
import "../AuthStyles.css";

function SignUp({ toggle }) {
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
              Welcome to
              <br /> Urban Helper
            </h2>
            <p className="text-white text-lg">
            Create your free account in just a minute! Whether you’re looking to book trusted services or offer your skills as a vendor.
            </p>
          </div>
        </div>
        <div className="form-panel">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="auth-input" />
            <input type="email" placeholder="Email" className="auth-input" />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
            />
            <button className="signauth-button ">Sign Up</button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?
            <button
              className="text-blue-600 font-semibold ml-2"
              onClick={toggle}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
