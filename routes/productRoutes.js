import express from 'express'
import productModel from "../models/userModel.js";
import userRouter from './userRoutes.js';
import userModel from '../models/userModel.js';

const productRouter = express.Router()

productRouter.get("/all", async (req, res) => {
  const products = await productModel.find();
  res.json(products);
});

userRouter.post("/all", async (req, res) => {
    const { name, email, pass } = req.body;
    const result=await userModel.findOne({email,pass});
    res.json(result);
  });

userRouter.get("/.id/name",async (req, res) => {
  const email = req.params.id;
  const result =await userModel.findOne({email},{_id:0,name:1});
  res.json(result);
}) 


export default productRouter