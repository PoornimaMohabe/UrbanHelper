import React from "react";
import "../AuthStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toastnotification from "../utils/Toastnotification";
import { loginFunction } from "../redux/actionCreator";

function Login({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = Toastnotification();
  const state = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = { email, password };
    dispatch(loginFunction(fromData, showToast, navigate));
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="left-panel">
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
            <h2 className="text-white text-3xl font-bold">Welcome Back!</h2>
            <p className="text-white text-lg">
              Log in to explore local vendors
            </p>
          </div>
        </div>
        <div className="form-panel">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {/* <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="auth-input"
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select> */}
            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?
            <button
              className="text-blue-600 font-semibold ml-2"
              onClick={toggle}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
