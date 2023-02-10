import mongoose from "mongoose";

const ResortSchema = new mongoose.Schema(
  {
    resortName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    feedback: [
      {
        type: String,
      },
    ],
    images: {
      type: [String],
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Blocked"],
      default: "Pending",
    },
    rating: {
      type: Number,
      max: 5,
      min: 0,
    },
    cheapestPrice: {
      type: Number,
    },
    maxPrice: {
      type: Number,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Resort = mongoose.model("Resort", ResortSchema);
export default Resort;
