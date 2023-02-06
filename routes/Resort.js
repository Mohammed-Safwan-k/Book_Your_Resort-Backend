import express from "express";
import {
  addResort,
  updateResort,
  getResort,
  getAllResort,
  getAllRoom,
  addRoom,
  updateRoom,
  getRoom,
} from "../controllers/resortController.js";

const router = express.Router();

// Add Resort
router.post("/", addResort);
// Update Resort
router.put("/:id", updateResort);
// Get Resort
router.get("/singleResort/:id", getResort);
// Get All Resort
router.get("/", getAllResort);

/* ======================================== ROOM MANAGEMENT ======================================== */

// Add Room
router.post("/room", addRoom);
// Update Room
router.put("/room/:id", updateRoom);
// Get Room
router.get("/room/:id", getRoom);
// Get All Room
router.get("/room", getAllRoom);

export default router;
