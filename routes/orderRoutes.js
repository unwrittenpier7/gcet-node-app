import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/new", async (req, res) => {
  console.log("📦 Incoming order:", req.body);

  try {
    const { email, orderValue } = req.body;

    if (!email || !orderValue) {
      return res.status(400).json({ message: "Missing email or orderValue" });
    }

    const result = await orderModel.create({ email, orderValue });
    console.log("✅ Order created:", result);

    res.status(201).json(result);
  } catch (error) {
    console.error("❌ Mongoose create() failed:", error);
    res.status(500).json({ message: "Internal error", error: error.message });
  }
});

export default orderRouter;
