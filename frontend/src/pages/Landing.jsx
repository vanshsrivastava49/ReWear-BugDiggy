import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to ReWear</h1>
      <p className="mt-4">Exchange clothes sustainably through swaps or points!</p>
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">
          Start Swapping
        </Link>
        <Link to="/dashboard" className="bg-blue-500 text-white px-4 py-2 rounded">
          Browse Items
        </Link>
        <Link to="/add-item" className="bg-purple-500 text-white px-4 py-2 rounded">
          List an Item
        </Link>
      </div>
    </div>
  );
};

export default Landing;
