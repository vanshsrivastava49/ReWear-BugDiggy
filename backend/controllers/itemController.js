import Item from "../models/Item.js";

export const getMyListings = async (req, res) => {
  const items = await Item.find({ uploader: req.user.id });
  res.json(items);
};

export const getMyPurchases = async (req, res) => {
  // Demo: return all items where status is "redeemed"
  const items = await Item.find({ status: "redeemed" });
  res.json(items);
};
