import express from 'express'
import productModel from "../models/userModel.js";

const productRouter = express.Router()

productRouter.get("/find", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});

export default productRouter