// client/src/pages/AdminPanel.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [pendingItems, setPendingItems] = useState([]);

  useEffect(() => {
    const fetchPendingItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/admin/pending-items", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPendingItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPendingItems();
  }, []);

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:5000/api/admin/approve-item/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingItems(pendingItems.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:5000/api/admin/reject-item/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingItems(pendingItems.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pendingItems.map(item => (
          <div key={item._id} className="border p-2 rounded">
            <img src={item.images[0]} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
            <p className="font-semibold">{item.title}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleApprove(item._id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(item._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
