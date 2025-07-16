import express from "express";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

// ✅ Register new user
userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, pass } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create new user
    const result = await userModel.create({ name, email, pass });
    res.status(201).json(result);
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Registration failed" });
  }
});

// ✅ Login existing user
userRouter.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const user = await userModel.findOne({ email, pass });

    if (!user) {
      return res.status(401).json({ message: "Invalid user or password" });
    }

    res.json(user); // Send back user object
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
});

// ✅ Get full user object by email
userRouter.get("/:id", async (req, res) => {
  try {
    const email = req.params.id;
    const user = await userModel.findOne({ email });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
});

// ✅ Get just the user's name by email
userRouter.get("/:id/name", async (req, res) => {
  try {
    const email = req.params.id;
    const user = await userModel.findOne({ email }, { _id: 0, name: 1 });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve user name" });
  }
});

export default userRouter;
