const express = require('express');
const app = require('./src/app');
const port = process.env.PORT || 3001;
require('dotenv').config();

app.listen(port, () => {
    console.log(`Job Service is running on port ${port}`);
});
