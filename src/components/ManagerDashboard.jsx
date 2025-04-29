// backdrop-blur-xl bg-white/10 border border-[rgba(255,255,255,0.125)]
import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const ManagerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear localStorage/session if needed
    localStorage.clear();

    // Redirect to login page
    navigate("/login");
  };
  const investmentRef = useRef(null);
  const distributionRef = useRef(null);
  const performanceRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="min-h-screen bg-[#e1cef6] ">
      <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Manager Dashboard</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search files..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fas fa-bell"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <i className="fas fa-user-circle text-2xl"></i>
              </button>
            </div>
          </div>
        </header>
      {/*  */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <div>
            <div className="text-lg font-semibold text-black">John Smith</div>
            <div className="text-md text-black">Client ID: #284751</div>
          </div>
          <button onClick={toggleSidebar} className="text-red-600 text-xl">
            &times;
          </button>
        </div>
        <ul className="py-4 px-2 space-y-2">
          <li>
            <Link
              to="/managerdashboard"
              className="block p-2 hover:bg-gray-200 rounded"
            >
               Manager
            </Link>
          </li>
          <li>
            <button
              variant="ghost"
              className="block p-2 hover:bg-gray-200 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 top-3  bg-transparent rounded-lg shadow-[#ffb1b1] shadow-sm backdrop-blur-md bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      <div className="grid w-full grid-cols-1   gap-4 mb-6"></div>

      

      <div className="bg-white border border-white/20 rounded-xl p-4 backdrop-blur-lg">
        

        <div className="overflow-auto">
          <table className="w-full text-black text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2 px-4">Files</th>
                <th className="text-left py-2 px-4">Date and Time</th>
                <th className="text-left py-2 px-4">No. times of files changed</th>
                <th className="text-left py-2 px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">file_1.pdf</td>
                <td className="py-2 px-4">22/08/2024</td>
                <td className="py-2 px-4 ">1</td>
                <td className="py-2 px-4">
                  lorem6
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">file_2.pdf</td>
                <td className="py-2 px-4">12/04/2024</td>
                <td className="py-2 px-4 ">2</td>
                <td className="py-2 px-4">
                  Lorem ipsum dolor sit amet consectetur.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">file_3.pdf</td>
                <td className="py-2 px-4">03/05/2024</td>
                <td className="py-2 px-4 ">1</td>
                <td className="py-2 px-4">
                 Lorem ipsum dolor sit amet consectetur.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

       
      </div>
      

<div className="bg-white border border-white/20 rounded-xl p-4 backdrop-blur-lg mt-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Files List</h3>
  <div className="overflow-auto">
    <table className="w-full text-black text-sm">
      <thead>
        <tr className="border-b border-white/20">
          <th className="text-left py-2 px-4">File Name</th>
          <th className="text-left py-2 px-4">Status</th>
          <th className="text-left py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4">uploaded_file_1.pdf</td>
          <td className="py-2 px-4">Uploaded</td>
          <td className="py-2 px-4">
            <button className="bg-[#e1cef6] text-black px-4 py-1 rounded hover:bg-[#eb85eb]">
              Download Processed File
            </button>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4">uploaded_file_2.docx</td>
          <td className="py-2 px-4">Processed</td>
          <td className="py-2 px-4">
            <button className="bg-[#e1cef6] text-black px-4 py-1 rounded hover:bg-[#eb85eb]">
              Download Processed File
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default ManagerDashboard;
