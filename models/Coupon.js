import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
  couponName: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  couponCode: {
    type: String,
    required: true,
    min: 1,
    max: 50,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
    max: 3,
  },
});

const Coupon = mongoose.model("Coupon", CouponSchema);
export default Coupon;
