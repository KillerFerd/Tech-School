const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesor.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.post('/', profesorController.createProfesor);
router.get('/', profesorController.getProfesores); 
router.get('/:profesorCarnet', profesorController.getProfesorByCarnet);
router.put('/:profesorCarnet', profesorController.updateProfesor);
router.delete('/:profesorCarnet', profesorController.deleteProfesor);

module.exports = router;