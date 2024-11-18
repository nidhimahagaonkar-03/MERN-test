// Import express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an instance of express
const app = express();

// Import your Employee model (or whatever your model file is)
const Employee = require('./employeeModel'); // Make sure this is correct

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for incoming requests

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/emp')  // Updated to use the 'emp' database
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// API route for fetching employees
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees); // Send response as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
