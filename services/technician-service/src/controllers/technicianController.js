const technicianService = require('../services/technicianService');

const createTechnician = async (req, res) => {
    try {
        const technicianData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            skills: req.body.skills,
        };
        const newTechnician = await technicianService.createTechnician(technicianData);
        res.status(201).json(newTechnician);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTechnicians = async (req, res) => {
    try {
        const technicians = await technicianService.getAllTechnicians();
        res.status(200).json(technicians);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTechnician = await technicianService.updateTechnicianStatus(id, status);

        if (!updatedTechnician) {
            return res.status(404).json({ error: 'Technician not found' });
        }

        res.status(200).json(updatedTechnician);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { lat, lng } = req.body;

        if (lat == null || lng == null) {
            return res.status(400).json({ error: 'Both lat and lng are required' });
        }

        const location = { lat, lng };
        const updatedTechnician = await technicianService.updateTechnicianLocation(id, location);

        if (!updatedTechnician) {
            return res.status(404).json({ error: 'Technician not found' });
        }

        res.status(200).json(updatedTechnician);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const acceptJob = async (req, res) => {
    try {
        const { techId, jobId } = req.params;
        const updatedTechnician = await technicianService.acceptJob(techId, jobId);
        res.status(200).json(updatedTechnician);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createTechnician,
    getTechnicians,
    updateStatus,
    updateLocation,
    acceptJob
};
