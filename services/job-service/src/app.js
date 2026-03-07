const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'job-service' });
});

module.exports = app;
