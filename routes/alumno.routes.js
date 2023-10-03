const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumno.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', alumnoController.getAlumnos); 
//router.get('/:alumnoId', alumnoController.getAlumnoById);
//router.post('/', alumnoController.createAlumno);
//router.put('/:alumnoId', alumnoController.updateAlumno);

module.exports = router;