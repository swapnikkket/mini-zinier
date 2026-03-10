const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || `mongodb://${process.env.DB_HOST || 'localhost'}:27017/${process.env.DB_NAME || 'technician_db'}`;

        await mongoose.connect(mongoURI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
