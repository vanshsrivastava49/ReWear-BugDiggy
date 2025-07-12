import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
  points: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
