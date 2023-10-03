const express = require('express');
const router = express.Router();
const profesorComiteController = require('../controllers/profesorComite.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', profesorComiteController.getProfesoresComites); 
//router.get('/:profesorComiteId', profesorComiteController.getProfesorComiteById);
//router.post('/', profesorComiteController.createProfesorComite);
//router.put('/:profesorComiteId', profesorComiteController.updateProfesorComite);

module.exports = router;