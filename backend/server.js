const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🌐 MongoDB Connection (FIXED)
mongoose.connect("mongodb://127.0.0.1:27017/agroDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// 📦 Schema
const cropSchema = new mongoose.Schema({
  name: String,
  price: String
});

// 📦 Model
const Crop = mongoose.model("Crop", cropSchema);

// 🏠 Root Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🧪 Test API
app.get("/api/test", (req, res) => {
  res.send("API working ✅");
});

// 🌱 GET all crops
app.get("/api/crops", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (err) {
    res.status(500).send("Error fetching crops");
  }
});

// ➕ ADD crop
app.post("/api/add-crop", async (req, res) => {
  try {
    const newCrop = new Crop(req.body);
    await newCrop.save();
    res.send("✅ Crop added successfully");
  } catch (err) {
    res.status(500).send("Error adding crop");
  }
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
