const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
}, { _id: false });

const technicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    skills: [{
        type: String
    }],
    status: {
        type: String,
        enum: ['available', 'busy', 'offline'],
        default: 'offline',
    },
    location: {
        type: locationSchema,
        default: null
    },
    currentJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Technician', technicianSchema);
