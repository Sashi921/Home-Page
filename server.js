const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve HTML/CSS/JS

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New contact form submission:", { name, email, message });

  // You can save to database or send email here
  res.json({ message: "Thank you for contacting us, we’ll get back soon!" });
});

// Run server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
