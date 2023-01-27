import express from "express";
import {
  addFacilities,
  allFacilities,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/addFacilities", addFacilities);
router.get("/allFacilities", allFacilities);

export default router;
