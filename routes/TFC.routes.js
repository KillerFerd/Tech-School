const express = require('express');
const router = express.Router();
const TFCController = require('../controllers/TFC.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', TFCController.getTFCs); 
router.post('/', TFCController.CrearTFC);

module.exports = router;