import express from "express";
import { getPendingItems, approveItem, rejectItem } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/pending-items", protect, isAdmin, getPendingItems);
router.post("/approve-item/:id", protect, isAdmin, approveItem);
router.post("/reject-item/:id", protect, isAdmin, rejectItem);

export default router;
