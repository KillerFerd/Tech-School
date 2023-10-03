const express = require('express');
const router = express.Router();
const profesorAlumnoController = require('../controllers/profesorAlumno.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', profesorAlumnoController.getProfesoresAlumnos); 
//router.get('/:profesorAlumnoId', profesorAlumnoController.getProfesorAlumnoById);
//router.post('/', profesorAlumnoController.createProfesorAlumno);
//router.put('/:profesorAlumnoId', profesorAlumnoController.updateProfesorAlumno);

module.exports = router;