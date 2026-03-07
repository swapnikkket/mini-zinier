const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Note: Since mongoose is installed, this connects to MongoDB. 
        // You may want to update your .env variables to reflect MongoDB instead of Postgres
        // if MONGO_URI is not explicitly provided.
        const mongoURI = process.env.MONGO_URI || `mongodb://${process.env.DB_HOST || 'localhost'}:27017/${process.env.DB_NAME || 'job_db'}`;

        await mongoose.connect(mongoURI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
