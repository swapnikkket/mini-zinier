const jobService = require('../services/jobService');

const createJob = async (req, res) => {
    try {
        const jobData = {
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            priority: req.body.priority,
        };
        const newJob = await jobService.createJob(jobData);
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getJobs = async (req, res) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateJobStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, assignedTechnician } = req.body;
        const updatedJob = await jobService.updateJobStatus(id, status, assignedTechnician);

        if (!updatedJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await jobService.getJobById(id);

        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createJob,
    getJobs,
    getJobById,
    updateJobStatus,
};
