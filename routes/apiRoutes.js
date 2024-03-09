const axios = require("axios");
require("dotenv").config();
const express = require("express");
const router = express.Router();

const apiKey = process.env.API_KEY;

const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

router.get("/data", async (req, res) => {
  try {
    // Make GET request to the API
    const response = await axios.get(
      "https://api.up.com.au/api/v1/util/ping",
      config
    );

    // Send the response from the API to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    res
      .status(error.response.status || 500)
      .json({ error: "Error fetching data" });
  }
});

router.get("/accounts", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.up.com.au/api/v1/accounts",
      config
    );
    res.json(response.data);
  } catch (error) {
    console.log("Error:", error.message);
    res
      .status(error.response.status || 500)
      .json({ error: "Error fetching data" });
  }
});
router.get("/transactions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.up.com.au/api/v1/transactions",
      config
    );
    res.json(response.data);
  } catch (error) {
    console.log("Error:", error.message);
    res
      .status(error.response.status || 500)
      .json({ error: "Error fetching data" });
  }
});
module.exports = router;
