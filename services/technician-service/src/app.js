const express = require('express');
const cors = require('cors');
const technicianRoutes = require('./routes/technicianRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'Technician service running' });
});

// Configure Technician management routes
app.use('/technicians', technicianRoutes);

module.exports = app;
