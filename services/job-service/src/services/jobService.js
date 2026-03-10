const Job = require('../models/jobModel');

const createJob = async (jobData) => {
    const job = new Job(jobData);
    return await job.save();
};

const getAllJobs = async () => {
    return await Job.find().sort({ createdAt: -1 });
};

const updateJobStatus = async (id, status, assignedTechnician) => {
    const updateData = { status };
    if (assignedTechnician) {
        updateData.assignedTechnician = assignedTechnician;
    }
    return await Job.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
    );
};

const getJobById = async (id) => {
    return await Job.findById(id);
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJobStatus,
};
