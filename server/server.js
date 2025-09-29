const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const tutorialRoutes = require('./routes/tutorials');
const aiDamageDetectRoutes = require('./routes/aidamdet.route')

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
// All routes in tutorials.js will be prefixed with /api/tutorials
app.use('/api/tutorials', tutorialRoutes);
app.use('/', aiDamageDetectRoutes);


//error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404.ejs', { user: { name: req.session.name || null } });
});
//global error handling middleware
app.use((err,req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error.ejs', { user: { name: req.session.name || null }, error: err });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});