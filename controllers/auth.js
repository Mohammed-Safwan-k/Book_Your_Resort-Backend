import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Admin from "../models/Admin.js";
import Resort from "../models/Resort.js";

import { createError } from "../utils/error.js";

/* REGISTER USER */
export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, picturePath, location } =
      req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      location,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

/* LOGGING IN */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
};

/* Admin Login */
export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (!admin) return res.status(400).json({ msg: "Admin does not exist. " });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET);
    delete admin.password;
    res.status(200).json({ token, admin });
  } catch (err) {
    next(err);
  }
};

/* ======================================== RESORT LOGIN AND SIGNUP ======================================== */

//* Resort Register/Signup *//
export const resortSignup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const existingResort = await Resort.findOne({ email: req.body.email });
    if (existingResort) return next(createError(400, "Resort Already Exist!"));

    const newResort = new Resort({
      resortName: req.body.resortName,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
    });
    await newResort.save();
    res.status(200).send("Resort has been created.");
  } catch (err) {
    next(err);
  }
};

//* Resort Login/Signin *//
export const resortLogin = async (req, res, next) => {
  try {
    const resort = await Resort.findOne({ email: req.body.email });
    if (!resort) return next(createError(404, "Resort not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      resort.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password or Email!"));

    const token = jwt.sign(
      { id: resort._id, email: resort.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ resort, token });
  } catch (err) {
    next(err);
  }
};

/* ---------------------------------------- END ---------------------------------------- */
