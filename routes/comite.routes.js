const express = require('express');
const router = express.Router();
const comiteController = require('../controllers/comite.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', comiteController.getComites); 
//router.get('/:comiteId', comiteController.getComiteById);
//router.post('/', comiteController.createComite);
//router.put('/:comiteId', comiteController.updateComite);

module.exports = router;