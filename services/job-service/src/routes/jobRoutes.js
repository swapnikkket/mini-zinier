const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.createJob);
router.get('/', jobController.getJobs);
router.patch('/:id', jobController.updateJobStatus);

module.exports = router;
