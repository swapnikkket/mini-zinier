const Technician = require('../models/technicianModel');

const createTechnician = async (technicianData) => {
    const technician = new Technician(technicianData);
    return await technician.save();
};

const getAllTechnicians = async () => {
    return await Technician.find().sort({ createdAt: -1 });
};

const updateTechnicianStatus = async (id, status) => {
    return await Technician.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    );
};

const updateTechnicianLocation = async (id, location) => {
    return await Technician.findByIdAndUpdate(
        id,
        { location },
        { new: true, runValidators: true }
    );
};

const acceptJob = async (techId, jobId) => {
    const technician = await Technician.findByIdAndUpdate(
        techId,
        { $addToSet: { currentJobs: jobId } },
        { new: true }
    );

    if (!technician) {
        throw new Error('Technician not found');
    }

    const jobServiceUrl = process.env.JOB_SERVICE_URL || 'http://localhost:3001';
    const response = await fetch(`${jobServiceUrl}/jobs/${jobId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            status: 'assigned',
            assignedTechnician: techId
        })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Failed to assign job in job-service: ${errorBody}`);
    }

    return technician;
};

module.exports = {
    createTechnician,
    getAllTechnicians,
    updateTechnicianStatus,
    updateTechnicianLocation,
    acceptJob
};
