import express from "express";
import {
  login,
  adminLogin,
  resortSignup,
  resortLogin,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/adminlogin", adminLogin);

router.post("/resortSignup", resortSignup);
router.post("/resortLogin", resortLogin);

export default router;
