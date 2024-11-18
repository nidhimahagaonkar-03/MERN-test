import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import CreateEmployee from "./Components/CreateEmployee";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Route for Admin Login */}
          <Route path="/" element={<AdminLogin />} />

          {/* Route for Admin Dashboard */}
          <Route path="/admindashboard" element={<AdminDashboard />} />

          {/* Route for Create Employee Page */}
          <Route path="/createemp" element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
