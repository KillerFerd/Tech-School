const express = require('express');
const router = express.Router();
const TFCController = require('../controllers/TFC.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', TFCController.getTFCs); 
//router.get('/:TFCId', TFCController.getTFCById);
//router.post('/', TFCController.createTFC);
//router.put('/:TFCId', TFCController.updateTFC);

module.exports = router;