const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  nationality: { type: String, required: true },
  passportNumber: { type: String, required: true, unique: true },
  tourStartDate: { type: Date, required: true },
  tourEndDate: { type: Date, required: true },
  adults: { type: Number, required: true },
  children: { 
    type: [{ age: Number }], // Array of child ages
    default: [] 
  },
  customerImage: { type: String }, // Store image file path or URL
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", CustomerSchema);
