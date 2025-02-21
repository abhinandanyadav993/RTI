require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const hotelRoutes = require("./routes/hotelRoutes");
const customerRoutes = require("./routes/customerRoutes");
const tourRoutes = require("./routes/tourRoutes");

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/tours", tourRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
