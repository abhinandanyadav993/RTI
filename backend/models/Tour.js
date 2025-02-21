const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  totalDays: { type: Number, required: true },
  itinerary: [
    {
      date: { type: Date, required: true },  // Specific tour date
      city: { type: String, required: true },  // City name
      hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true } // Hotel ID
    }
  ],
  activities: [String], // Optional list of activities
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tour", TourSchema);
