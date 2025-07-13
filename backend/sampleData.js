import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./models/Item.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected ✅");

    // Sample items
    const items = [
      {
        title: "Vintage Denim Jacket",
        description: "Classic blue denim, gently worn",
        category: "Jackets",
        type: "Denim",
        size: "M",
        condition: "Good",
        tags: ["vintage", "denim", "jacket"],
        images: ["http://localhost:5000/photo/image.png"],
        approved: true
      },
      {
        title: "Floral Summer Dress",
        description: "Lightweight and perfect for summer days",
        category: "Dresses",
        type: "Casual",
        size: "S",
        condition: "Very Good",
        tags: ["floral", "summer", "dress"],
        images: ["https://images.unsplash.com/photo-1"],
        approved: true
      },
      {
        title: "Black Leather Boots",
        description: "Sturdy and stylish boots, barely used",
        category: "Footwear",
        type: "Boots",
        size: "8",
        condition: "Excellent",
        tags: ["leather", "boots", "black"],
        images: ["https://images.unsplash.com/photo-1616469836583-0b1b4b2d3338"],
        approved: true
      }
    ];

    await Item.insertMany(items);
    console.log("Sample items inserted! 🌟");
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting sample items:", err);
    process.exit(1);
  });
