import express from 'express'
import userModel from "../models/userModel.js";

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  await userModel.create({ name, email, pass })
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email, pass });
  if (!result) return res.json({ message: "Invalid user or password" });
  return res.json(result);
});

export default userRouter