import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between">
    <Link to="/" className="font-bold">ReWear</Link>
    <div className="flex gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </nav>
);

export default Navbar;
