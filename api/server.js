import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "../routes/productRoutes.js";
import userRoutes from "../routes/userRoutes.js";
import orderRoutes from "../routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// ✅ Root test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running on Vercel ✅" });
});

// ❌ REMOVE app.listen()
// ✅ Export for Vercel
export default app;
