import React from 'react'
import '../AuthStyles.css';


function Login({toggle}) {
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
                <p className="text-white text-lg">Log in to explore local vendors</p>
              </div>
            </div>
            <div className="form-panel">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />
                <button className="auth-button">Sign In</button>
              </form>
              <p className="text-sm text-gray-600 mt-4">
                Don't have an account?
                <button className="text-blue-600 font-semibold ml-2" onClick={toggle}>Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Login;
