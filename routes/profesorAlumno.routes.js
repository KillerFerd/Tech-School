const express = require('express');
const router = express.Router();
const profesorAlumnoController = require('../controllers/profesorAlumno.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.post('/', profesorAlumnoController.createProfesorAlumno);
router.get('/:carnetProfesor', profesorAlumnoController.getProfesoresAlumnos);
router.put('/:profesorAlumnoId', profesorAlumnoController.updateProfesorAlumno); 


module.exports = router;