const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesor.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', profesorController.getProfesores); 
//router.get('/:profesorId', profesorController.getProfesorById);
//router.post('/', profesorController.createProfesor);
//router.put('/:profesorId', profesorController.updateProfesor);

module.exports = router;