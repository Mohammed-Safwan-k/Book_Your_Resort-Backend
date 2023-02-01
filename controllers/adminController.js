import Facility from "../models/Facility.js";
import Coupon from "../models/Coupon.js";
import User from "../models/User.js";
import RoomType from "../models/RoomType.js";

/*======================================== VIEW USERS ======================================== */

export const allUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* ---------------------------------------- END ---------------------------------------- */

/*======================================== ADD & VIEW FACILITIES ======================================== */

export const addFacilities = async (req, res) => {
  try {
    const { facility, icon } = req.body;
    const newFacility = Facility({ facility, icon });
    const savedFacility = await newFacility.save().then(console.log("done"));
    res.status(201).json(savedFacility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const allFacilities = async (req, res) => {
  try {
    const facility = await Facility.find({});
    res.status(201).json(facility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ---------------------------------------- END ---------------------------------------- */

/* ======================================== ADD & VIEW COUPON ======================================== */

export const allCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.find();
    res.status(200).json(coupon);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addCoupon = async (req, res) => {
  const { couponName, couponCode, amount } = req.body;
  const newCoupon = Coupon({ couponName, couponCode, amount });
  try {
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* ---------------------------------------- END ---------------------------------------- */

/* ======================================== ADD & VIEW ROOM ======================================== */

export const allRoom = async (req, res) => {
  try {
    const roomtype = await RoomType.find();
    res.status(200).json(roomtype);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addRoom = async (req, res) => {
  const { roomtype } = req.body;
  const newRoomType = RoomType({ roomtype });
  try {
    await newRoomType.save();
    res.status(201).json(newRoomType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------------------------------- END ---------------------------------------- */
