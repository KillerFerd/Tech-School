const express = require('express');
const router = express.Router();
const profesorComiteController = require('../controllers/profesorcomite.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', profesorComiteController.getProfesoresComites); 
router.post('/:idProfesorComite', profesorComiteController.AsociarTFCs);

module.exports = router;