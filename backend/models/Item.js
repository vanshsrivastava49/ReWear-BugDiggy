import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  images: [String],
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["available", "in_swap", "redeemed"], default: "available" },
  approved: { type: Boolean, default: false },
});

export default mongoose.model("Item", itemSchema);
