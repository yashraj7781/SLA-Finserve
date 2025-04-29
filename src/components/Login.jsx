import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [role, setRole] = useState("dataanalyst");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      toast.success("Login successful!", {
        position: "bottom-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 1600);
    } else {
      toast.error("Please enter username and password.", {
        position: "bottom-center",
        autoClose: 1500,
      });
    }
  };

  return (
    <div>
      <header className="w-full px-8 py-6 flex justify-between items-center bg-white  shadow-xl fixed top-0 left-0 right-0 z-50">
        <div className="text-4xl font-bold  flex items-center space-x-2">
          <span className="text-[#883cda] text-5xl font-extrabold">
            SLA finserve
          </span>
        </div>

        
      </header>

      <div
        className="flex h-screen w-full justify-center items-center bg-cover mt-12 bg-center"
        
      >
        

        {/* Right Side (Login Panel) */}
        <div className="w-1/2 h-150 flex flex-col items-center justify-start bg-[#e1cef6]/80 bg-opacity-2 p-10 mr-10 rounded-3xl mt-6">
          <h2 className="text-4xl font-bold mt-0 mb-6 text-[#883cda]">
            Welcome Back
          </h2>

          {/* Toggle Buttons */}
          <div className="flex border-1 border-[#883cda] rounded-full overflow-hidden mb-6 mt-5">
            <button
              onClick={() => setRole("dataanalyst")}
              className={`px-6 py-2 w-full font-semibold transition-colors duration-300 ${
                role === "dataanalyst"
                  ? "bg-[#c195f1] text-[#3c1057]"
                  : "bg-[#7420a9] text-[#c195f1]"
              }`}
            >
              Data Analyst
            </button>
            <button
              onClick={() => setRole("manager")}
              className={`px-6 py-2 w-full font-semibold transition-colors duration-300 ${
                role === "manager"
                  ? "bg-[#c195f1] text-[#102c57]"
                  : "bg-[#7420a9] text-[#c195f1]"
              }`}
            >
              Manager
            </button>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md text-center">
            <h2 className="text-xl text-[#883cda] font-semibold mb-6">
              Login as {role === "dataanalyst" ? "Data Analyst" : "Manager"}
            </h2>

            <input
              type="text"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full border-2 border-[#883cda] text-[#883cda] focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 rounded-full border-2 border-[#883cda] text-[#883cda] focus:outline-none"
            />

            <div className="flex items-center justify-start mb-6">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-[#883cda]">
                Remember Me
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full border border-[#883cda] text-[#883cda] px-3 py-2 rounded-2xl hover:bg-[#883cda] hover:text-[#102c57] transition-all duration-300 ease-in-out
             hover:drop-shadow-[0_4px_10px_#883cda] active:drop-shadow-[0_6px_14px_#883cda]"
            >
              Login
            </button>

          
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
