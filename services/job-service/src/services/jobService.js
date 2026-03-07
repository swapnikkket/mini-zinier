const Job = require('../models/jobModel');

const createJob = async (jobData) => {
    const job = new Job(jobData);
    return await job.save();
};

const getAllJobs = async () => {
    return await Job.find().sort({ createdAt: -1 });
};

const updateJobStatus = async (id, status) => {
    return await Job.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    );
};

module.exports = {
    createJob,
    getAllJobs,
    updateJobStatus,
};
