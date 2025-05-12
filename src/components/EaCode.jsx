import React, { useState, useRef } from 'react';

const EaCode = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open state
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats] = useState({
    totalFiles: 156,
    processedFiles: 142,
    pendingFiles: 14,
    storageUsed: '2.4 GB',
  });

  const fileInputRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = (file) => {
    setFileName(file.name);
    setFileSize(formatFileSize(file.size));
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 3000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const resetUpload = () => {
    setIsProcessed(false);
    setFileName('');
    setFileSize('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-[#e1cef6] w-full flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center ">
          <div>
            <div className="text-lg font-semibold text-black">Data Analyst EaCode</div>
             
          </div>
          <button onClick={toggleSidebar} className="text-red-600 text-xl">
            &times;
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col border-t">
        
           
          <div className="py-2 px-4 text-gray-700 hover:bg-gray-200 cursor-pointer border-b"> 
            <a href="/">EA CODE </a>
          </div>
          <div className="py-2 px-4 text-gray-700 hover:bg-gray-200 cursor-pointer border-b"> 
            <a href="/"> Brokerage ammount </a>
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between">
              <button onClick={toggleSidebar} className="text-xl text-gray-800">
                &#9776; {/* Hamburger menu icon */}
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Data Analyst EaCode</h2>
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

          {/* Main Content */}
          <main className="p-6 flex-grow">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
              {[
                { label: 'Total Files', value: stats.totalFiles, icon: 'file', color: '#883cda', bg: '#f5ebff' },
                { label: 'Processed Files', value: stats.processedFiles, icon: 'check-circle', color: 'green-600', bg: 'green-100' }, 
                { label: 'Storage Used', value: stats.storageUsed, icon: 'database', color: 'purple-600', bg: 'purple-100' },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">{card.label}</p>
                      <h3 className="text-2xl font-semibold text-gray-800 mt-1">{card.value}</h3>
                    </div>
                    <div className={`bg-[${card.bg}] rounded-full p-3`}>
                      <i className={`fas fa-${card.icon} text-[${card.color}] text-xl`}></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* File Upload Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center"> Unprocessed File Upload    </h2>
              {!isProcessed ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <i className="fas fa-cloud-upload-alt text-5xl text-blue-500 mb-4"></i>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Drag & Drop files here</h3>
                  <p className="text-gray-500 mb-6">or</p>
                  <button
                    onClick={handleBrowseClick}
                    className="bg-[#883cda] hover:bg-[#6c2eb3] text-white py-2 px-6 rounded-lg transition duration-300"
                  >
                    Browse Files
                  </button>
                  <input type="file" ref={fileInputRef} onChange={handleFileInputChange} className="hidden" />
                  <p className="mt-6 text-sm text-gray-500">Supported file types: PDF, DOCX, XLSX, CSV, TXT</p>
                  <p className="text-sm text-gray-500">Maximum file size: 500MB</p>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">File processed successfully!</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mt-4 mb-6 max-w-md mx-auto">
                    <div className="flex items-center">
                      <i className="fas fa-file-alt text-gray-500 text-2xl mr-3"></i>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">{fileName}</p>
                        <p className="text-sm text-gray-500">{fileSize}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#883cda] hover:bg-[#6c2eb3] text-white py-2 px-6 rounded-lg transition duration-300">
                      <i className="fas fa-download mr-2"></i>Download Processed File
                    </button>
                    <button
                      onClick={resetUpload}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-lg transition duration-300"
                    >
                      Process Another File
                    </button>
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm text-center">© 2025 Sla Finserve . All rights reserved. Designed in React, Tailwind-css (TECHJAR TECHNOLOGIES) </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EaCode;
