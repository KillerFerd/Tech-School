const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumno.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.post('/', alumnoController.createAlumno);
router.get('/', alumnoController.getAlumnos); 
router.get('/:alumnoCarnet', alumnoController.getAlumnoByCarnet);
router.put('/:alumnoCarnet', alumnoController.updateAlumno);
router.delete('/:alumnoCarnet', alumnoController.deleteAlumno);

module.exports = router;