const express = require('express');
const router = express.Router();
const comiteController = require('../controllers/comite.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', comiteController.getComites); 
router.post('/', comiteController.CreateComite);
router.put('/:numeroSerie', comiteController.actualizarComite);
router.delete('/:numeroSerie', comiteController.borrarComite);

module.exports = router;