import express from "express";
import {
  addFacilities,
  allFacilities,
  allCoupon,
  addCoupon,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/addFacilities", addFacilities);
router.get("/allFacilities", allFacilities);

router.post("/allCoupon", allCoupon);
router.get("/addCoupon", addCoupon);

export default router;
