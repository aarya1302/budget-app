const express = require('express');
const axios = require("axios");
const path = require('path');
require('dotenv').config();
const app = express();


const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 3000;


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));





// Route to make API request
app.get('/ping', async (req, res) => {
  
});

app.get('/api/data', async(req, res) => {
  // Simulate fetching data from a database
    const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    try {
    // Access token obtained from request headers or wherever it's stored




    // Make GET request to the API
    const response = await axios.get('https://api.up.com.au/api/v1/util/ping', {
      headers: {
        Authorization: "Bearer "+apiKey
      }
    });
    console.log(response.data)
        

    // Send the response from the API to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    res.status(error.response.status || 500).json({ error: 'Error fetching data' });
  }
  
});


// Serve the React app in production

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));