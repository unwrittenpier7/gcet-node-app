import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders",orderRouter)

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started");
});