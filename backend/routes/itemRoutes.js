import express from "express";
import { getMyListings, getMyPurchases } from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/my-listings", protect, getMyListings);
router.get("/my-purchases", protect, getMyPurchases);

export default router;
