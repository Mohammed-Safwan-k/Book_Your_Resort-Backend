import Resort from "../models/Resort.js";
import Room from "../models/Room.js";

export const addResort = async (req, res, next) => {
  const newResort = new Resort(req.body);
  try {
    const savedResort = await newResort.save();
    res.status(200).json(savedResort);
  } catch (err) {
    next(err);
  }
};

export const updateResort = async (req, res, next) => {
  try {
    const updatedResort = await Resort.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedResort);
  } catch (err) {
    next(err);
  }
};

export const getResort = async (req, res, next) => {
  try {
    const resort = await Resort.findById(req.params.id);
    res.status(200).json(resort);
  } catch (err) {
    next(err);
  }
};

export const getAllResort = async (req, res, next) => {
  try {
    const resorts = await Resort.find();
    res.status(200).json(resorts);
  } catch (err) {
    next(err);
  }
};

/* ======================================== ROOM MANAGEMENT ======================================== */
export const allRoom = async (req, res, next) => {
  try {
    const resortId = req.params.resortid;
    const newRoom = new Room(req.body);
  } catch (err) {
    next(err);
  }
};
/* ---------------------------------------- END ---------------------------------------- */
