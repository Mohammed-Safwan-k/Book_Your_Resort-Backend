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
  getAllFacility,
  getAllRoomType
} from "../controllers/resortController.js";

import { getResortAuth } from "../middleware/auth.js";
import { postResortAuth } from "../middleware/auth.js";

const router = express.Router();

// Add Resort
router.post("/", postResortAuth, addResort);
// Update Resort
router.put("/:id", postResortAuth, updateResort);
// Get Resort
router.get("/singleResort/:id", postResortAuth, getResort);
// Get All Resort
router.get("/", postResortAuth, getAllResort);

/* ======================================== ROOM MANAGEMENT ======================================== */

// Add Room
router.post("/room", postResortAuth, addRoom);
// Update Room
router.put("/room/:id", postResortAuth, updateRoom);
// Get Room
router.get("/room/:id", postResortAuth, getRoom);
// Get All Room
router.post("/allroom", postResortAuth, getAllRoom);

/* ======================================== Facility ======================================== */

// All Facility
router.get("/facility", getResortAuth, getAllFacility);
router.get("/roomtype", getResortAuth, getAllRoomType);

export default router;
