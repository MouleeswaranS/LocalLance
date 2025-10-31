import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AuthChoice from "./Pages/AuthChoice";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ClientDashboard from "./Pages/Client/ClientDashboard";
import FreelancerDashboard from "./Pages/Freelancer/FreelancerDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Client */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />

        {/* Freelancer */}
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
