import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/new", async (req, res) => {
  try {
    const { email, orderValue } = req.body;

    // Use Mongoose create()
    const result = await orderModel.create({ email, orderValue });

    res.status(201).json(result);
  } catch (error) {
    console.error("❌ Order creation failed:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
});

export default orderRouter;
