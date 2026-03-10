const express = require('express');
const router = express.Router();
const technicianController = require('../controllers/technicianController');

router.post('/', technicianController.createTechnician);
router.get('/', technicianController.getTechnicians);
router.patch('/:id/status', technicianController.updateStatus);
router.patch('/:id/location', technicianController.updateLocation);
router.post('/:techId/accept-job/:jobId', technicianController.acceptJob);

module.exports = router;
