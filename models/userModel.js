import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  orderValue: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
