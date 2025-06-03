import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: { type: String, required: true },
  order: { type: Array, required: true }, 
});

export default mongoose.model("Order", orderSchema);
