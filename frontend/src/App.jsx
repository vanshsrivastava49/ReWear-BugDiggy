import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminPanel from "./pages/AdminPanel";
import BrowseItems from "./pages/BrowseItems";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/browse" element={<BrowseItems />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
