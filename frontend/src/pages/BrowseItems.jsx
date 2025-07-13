// client/src/pages/BrowseItems.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const BrowseItems = () => {
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/items/browse");
        setItems(res.data);
      } catch (err) {
        console.error("Failed to load items", err);
      }
    };
    fetchItems();
  }, []);

  const handleAddToList = (itemId) => {
    setAddedItems((prev) => [...prev, itemId]);
    alert("Item added to your list!");
    // Optionally: send to backend to add to wishlist
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Browse Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item._id} className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-500 mb-2">{item.category} • Size: {item.size}</p>
            <p className="font-bold mb-3">Points: {item.points || 10}</p>

            <button
              onClick={() => handleAddToList(item._id)}
              className="mt-auto bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
            >
              ➕ Add to My List
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseItems;
