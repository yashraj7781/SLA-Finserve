import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';
motion
const Homepage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col  text-[#1F2937] font-sans overflow-hidden">
      {/* Navbar */}
      <header className="w-full px-8 py-6 flex justify-between items-center bg-white  shadow-xl fixed top-0 left-0 right-0 z-50">
        <div className="text-4xl font-bold  flex items-center space-x-2">
          <span className="text-[#883cda] text-5xl font-extrabold">SLA Finserve</span>
        </div>
        

        <div
          onClick={handleLoginClick}
          className="text-white bg-[#883cda] px-6 py-2 rounded-lg shadow-md hover:bg-[#883cda] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#388E3C] focus:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </div>
      </header>
      

    

      {/* Features Section */}
      <section className="w-full bg-[white] py-16 px-6  mt-48">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-4xl font-semibold text-[#722ac0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Why you should choose us?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <motion.div
              className="p-6 bg-[#e1cef6] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <div className="text-4xl text-[#883cda] mb-4">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#883cda]">Automated Reconciliation</h3>
              <p className="text-[#374151] mt-2">
                Automate your financial reconciliation with ease, saving time and reducing errors.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-[#e1cef6] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className="text-4xl text-[#883cda] mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#883cda]">Insights at Your Fingertips</h3>
              <p className="text-[#374151] mt-2">
                Gain valuable insights into your financial data with powerful visualizations and reports.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-[#e1cef6] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              <div className="text-4xl text-[#883cda] mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#883cda]">Top-Notch Security</h3>
              <p className="text-[#374151] mt-2">
                Rest assured that your financial data is protected with the highest standards of security.
              </p>
            </motion.div>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
        <div className=' hover:bg-[#eb85eb]  flex items-center  text-center justify-center mt-12 rounded-2xl bg-[#e1cef6] h-22 w-49 text-2xl font-bold'>
        <a href="/dashboard">Data Analyst Dashboard</a>

      </div>
      <div className=' hover:bg-[#eb85eb]  flex items-center text-center justify-center mt-12 rounded-2xl bg-[#e1cef6] h-22 w-49 text-2xl font-bold'>
        <a href="/manager-dashboard">Manager Dashboard</a>

      </div>
      </div>

      </section>
      
      {/* Footer */}
      <footer className="w-full text-center py-2 border-t border-[#C8E6C9] text-sm text-[#4E5D52] bg-[#e1cef6] mt-auto">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:text-[#883cda] transition-colors">Get Started</a>
          <a href="#" className="hover:text-[#883cda] transition-colors">Learn More</a>
        </div>
        <p className="text-xs text-[#883cda]">© 2025 Cleanlytics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
