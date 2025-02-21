const express = require("express");
const multer = require("multer");
const path = require("path");
const Customer = require("../models/Customer");

const router = express.Router();

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// Register a new customer with image upload
router.post("/", upload.single("customerImage"), async (req, res) => {
  try {
    const { name, email, phone, nationality, passportNumber, tourStartDate, tourEndDate, adults, children } = req.body;
    
    const customer = new Customer({
      name,
      email,
      phone,
      nationality,
      passportNumber,
      tourStartDate,
      tourEndDate,
      adults,
      children: JSON.parse(children), // Convert from string to array
      customerImage: req.file ? `/uploads/${req.file.filename}` : null
    });

    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
