import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();


orderRouter.post("/new", async (req, res) => {
  const { email, order } = req.body;
  const result = await orderModel.create({ email, order });
  res.json(result);
});


orderRouter.get("/:email", async (req, res) => {
  const email = req.params.email;
  const result = await orderModel.find({ email });
  res.json(result);
});

export default orderRouter;
