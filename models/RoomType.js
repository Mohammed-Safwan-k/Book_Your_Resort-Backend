import mongoose from "mongoose";

const RoomTypeSchema = new mongoose.Schema({
  roomtype: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
});

const RoomType = mongoose.model("RoomType", RoomTypeSchema);
export default RoomType;
