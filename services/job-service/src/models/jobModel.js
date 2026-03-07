const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'assigned', 'in_progress', 'completed'],
        default: 'pending',
    },
    assignedTechnician: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Technician',
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Job', jobSchema);
