import FacilityModel from "../models/Facility.js";

export const addFacilities = async (req, res) => {
  try {
    const { facility, icon } = req.body;
    const newFacility = FacilityModel({ facility, icon });
    const savedFacility = await newFacility.save().then(console.log("done"));
    res.status(201).json(savedFacility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const allFacilities = async (req, res) => {
  try {
    const facility = await FacilityModel.find({});
    res.status(201).json(facility);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
