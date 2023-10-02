const express = require('express');
const router = express.Router();

// RUTAS:
const authorsRoutes = require("./author.routes");

// USAR EN:
router.use('/authors', authorsRoutes)

module.exports = router;
