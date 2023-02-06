import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    roomType: {
      type: mongoose.Types.ObjectId,
      ref: "RoomType",
      required: true,
    },
    facility: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Facility",
      },
    ],
    guest: {
      type: Number,
      required: true,
    },
    bedroom: {
      type: Number,
    },
    bathroom: {
      type: Number,
    },
    feedback: [
      {
        type: String,
      },
    ],
    resort: {
      type: mongoose.Types.ObjectId,
      ref: "Resort",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
      required: true,
    },
    unavailableDates: [
      {
        type: Date,
      },
    ],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", RoomSchema);
export default Room;
