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

import {resortAuth} from "../middleware/auth.js";

const router = express.Router();

// Add Resort
router.post("/", resortAuth, addResort);
// Update Resort
router.put("/:id", resortAuth, updateResort);
// Get Resort
router.get("/singleResort/:id", resortAuth, getResort);
// Get All Resort
router.get("/", resortAuth, getAllResort);

/* ======================================== ROOM MANAGEMENT ======================================== */

// Add Room
router.post("/room", resortAuth, addRoom);
// Update Room
router.put("/room/:id", resortAuth, updateRoom);
// Get Room
router.get("/room/:id", resortAuth, getRoom);
// Get All Room
router.get("/room", resortAuth, getAllRoom);

export default router;
