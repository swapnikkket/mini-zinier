const express = require('express');
const app = require('./src/app');
const connectDB = require('./src/config/db');
const port = process.env.PORT || 3002;
require('dotenv').config();

// Connect to Database
connectDB();

app.listen(port, () => {
    console.log(`Technician Service is running on port ${port}`);
});
