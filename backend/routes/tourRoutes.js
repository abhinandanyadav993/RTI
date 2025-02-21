const express = require("express");
const router = express.Router();
const Tour = require("../models/Tour");
const Customer = require("../models/Customer");
const Hotel = require("../models/Hotel");
const docx = require("docx");
const fs = require("fs");
const { Document, Packer, Table, TableRow, TableCell, Paragraph } = docx;

// Create a tour with multiple dates, cities, and hotels
router.post("/", async (req, res) => {
  try {
    const { customerId, totalDays, itinerary, activities, totalPrice } = req.body;

    // Validate customer
    const customer = await Customer.findById(customerId);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    // Validate hotels in itinerary
    for (let item of itinerary) {
      const hotel = await Hotel.findById(item.hotel);
      if (!hotel) return res.status(400).json({ error: `Hotel with ID ${item.hotel} not found` });
    }

    const tour = new Tour({ customerId, totalDays, itinerary, activities, totalPrice });
    await tour.save();
    
    res.status(201).json(tour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tours with customer and hotel details
router.get("/", async (req, res) => {
  try {
    const tours = await Tour.find().populate("customerId itinerary.hotel");
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Generate Word document for a specific tour
router.get("/generate-word/:tourId", async (req, res) => {
  const { tourId } = req.params;
  console.log(tourId)

  try {
    const tour = await Tour.findById(tourId).populate('customerId').populate('itinerary.hotel').exec();
    console.log("tour", tour);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }

    // Create a new Word document
    const doc = new Document();

    // Add the title and customer info
    doc.addSection({
      children: [
        new Paragraph({
          text: `Tour for Customer: ${tour.customerId.name}`,
          heading: docx.HeadingLevel.HEADING_1,
        }),
        new Paragraph(`Tour Dates: ${tour.totalDays} Days`),
        new Paragraph(`Total Price: $${tour.totalPrice.toFixed(2)}`),
        new Paragraph("\n"), // Adding some space
      ],
    });

    // Create the itinerary table
    const tableRows = [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph("Date")],
            verticalAlign: docx.VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [new Paragraph("City")],
            verticalAlign: docx.VerticalAlign.CENTER,
          }),
          new TableCell({
            children: [new Paragraph("Hotel")],
            verticalAlign: docx.VerticalAlign.CENTER,
          }),
        ],
      }),
    ];

    // Add itinerary data to table
    tour.itinerary.forEach((item) => {
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph(item.date.toISOString().split("T")[0])],
            }),
            new TableCell({
              children: [new Paragraph(item.city)],
            }),
            new TableCell({
              children: [new Paragraph(item.hotel.name)], // Assuming `hotel.name` exists
            }),
          ],
        })
      );
    });

    // Add the table to the document
    doc.addSection({
      children: [
        new Table({
          rows: tableRows,
        }),
      ],
    });

    // Add activities if any
    if (tour.activities.length > 0) {
      doc.addSection({
        children: [
          new Paragraph({
            text: "Activities",
            heading: docx.HeadingLevel.HEADING_2,
          }),
          ...tour.activities.map((activity) => new Paragraph(activity)),
        ],
      });
    }

    // Create the Word file
    const buffer = await Packer.toBuffer(doc);

    // Save the document to a file
    const filePath = `./tour_${tourId}_document.docx`;
    fs.writeFileSync(filePath, buffer);

    // Send the file as a response
    res.download(filePath, (err) => {
      if (err) {
        res.status(500).json({ error: "Error downloading the file" });
      } else {
        // Optionally remove the file after sending it
        fs.unlinkSync(filePath);
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
