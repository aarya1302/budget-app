const express = require("express");
const axios = require("axios");
const path = require("path");
require("dotenv").config();
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client", "build")));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to make API request

app.use("/api", apiRoutes);

// Serve the React app in production
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "authPage.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
