import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard";
import ManagerDashboard from "./components/ManagerDashboard";
import EaCode from "./components/EaCode";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manager-dashboard" element={<ManagerDashboard />} />
      <Route path="/eacode" element={< EaCode />} />
    </Routes>
  );
}

export default App;
