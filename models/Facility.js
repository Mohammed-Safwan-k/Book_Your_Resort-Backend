import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema({
  facility: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  icon: {
    type: String,
    default: "",
  },
});

const Facility = mongoose.model("Facility", FacilitySchema);
export default Facility;
