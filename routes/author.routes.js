const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/author.controller');

// METODOS/ROUTES/ENDPOINTS: 
router.get('/', authorsController.getAuthors); 
//router.get('/:authorId', authorsController.getAuthorsById);
//router.post('/', authorsController.createAuthor);
//router.put('/:authorId', authorsController.updateAuthor);

module.exports = router;
