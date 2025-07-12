import Item from "../models/Item.js";

export const getPendingItems = async (req, res) => {
  const items = await Item.find({ approved: false });
  res.json(items);
};

export const approveItem = async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ message: "Item approved" });
};

export const rejectItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item rejected & deleted" });
};
