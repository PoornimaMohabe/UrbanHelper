import React, { useState } from "react";
import Login from "./Login";

import "../AuthStyles.css";
import SignUp1 from "./SignUp1";


const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="w-full h-screen bg-[#efe7fd] flex items-center justify-center overflow-hidden">
      <div className="auth-flip-container">
        <div className={`auth-flipper ${isLogin ? "flip" : ""}`}>
          <div className="auth-front">
            <Login toggle={toggleForm} />
          </div>
          <div className="auth-back">
            <SignUp1 toggle={toggleForm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
