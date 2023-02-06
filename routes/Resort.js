import express from "express";
import {
  addResort,
  updateResort,
  getResort,
  getAllResort,
  allRoom
} from "../controllers/resortController.js";

const router = express.Router();

// Add Resort
router.post("/", addResort);
// Update Resort
router.put("/:id", updateResort);
// Get Resort
router.get("/:id", getResort);
// Get All Resort
router.get("/", getAllResort);

/* ======================================== ROOM MANAGEMENT ======================================== */

router.get("/allRoom", allRoom);

export default router;
