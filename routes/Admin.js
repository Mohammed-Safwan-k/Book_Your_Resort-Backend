import express from "express";
import {
  addFacilities,
  allFacilities,
  allCoupon,
  addCoupon,
  allUser,
  allRoom,
  addRoom,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/allUser", allUser);

router.get("/allFacilities", allFacilities);
router.post("/addFacilities", addFacilities);

router.get("/allCoupon", allCoupon);
router.post("/addCoupon", addCoupon);

router.get("/allRoom", allRoom);
router.post("/addRoom", addRoom);

export default router;
