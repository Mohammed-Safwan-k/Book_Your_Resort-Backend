import express from "express";
import {
  addFacilities,
  allFacilities,
  allCoupon,
  addCoupon,
  allUser,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/addFacilities", addFacilities);
router.get("/allFacilities", allFacilities);

router.get("/allCoupon", allCoupon);
router.post("/addCoupon", addCoupon);

router.get("/allUser",allUser)

export default router;
