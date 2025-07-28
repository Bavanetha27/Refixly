// /server/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from a .env file

// Import routes
const tutorialRoutes = require('./routes/tutorials');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(express.json()); // Parses incoming JSON requests

// Define a simple root route for testing
app.get('/', (req, res) => {
  res.send('Refixly backend server is running!');
});

// Use the tutorial routes
// All routes defined in tutorials.js will be prefixed with /api/tutorials
app.use('/api/tutorials', tutorialRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});