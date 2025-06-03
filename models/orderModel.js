import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: { type: String },
  order: { type: Array },
});

export default mongoose.model("Order", orderSchema);
