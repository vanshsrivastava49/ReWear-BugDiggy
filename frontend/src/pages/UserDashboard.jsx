// client/src/pages/UserDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [myListings, setMyListings] = useState([]);
  const [myPurchases, setMyPurchases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRes = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userRes.data);

        const listingsRes = await axios.get("http://localhost:5000/api/items/my-listings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyListings(listingsRes.data);

        const purchasesRes = await axios.get("http://localhost:5000/api/items/my-purchases", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyPurchases(purchasesRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      <div className="bg-white shadow-md p-4 mb-6 rounded">
        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Points Balance:</strong> {user.points}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">My Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myListings.map(item => (
            <div key={item._id} className="border p-2 rounded">
              <img src={item.images[0]} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
              <p className="font-semibold">{item.title}</p>
              <p>Status: {item.status}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">My Purchases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myPurchases.map(item => (
            <div key={item._id} className="border p-2 rounded">
              <img src={item.images[0]} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
