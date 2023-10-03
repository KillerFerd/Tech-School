const express = require('express');
const router = express.Router();

// RUTAS:
const alumnoRoutes = require("./alumno.routes");
const comiteRoutes = require("./comite.routes");
const profesorRoutes = require("./profesor.routes");
const profesorAlumnoRoutes = require("./profesorAlumno.routes");
const profesorComiteRoutes = require("./profesorComite.routes");
const TFCRoutes = require("./TFC.routes");

// USAR EN:
router.use('/alumnos', alumnoRoutes);
router.use('/comites', comiteRoutes);
router.use('/profesores', profesorRoutes);
router.use('/profesoresAlumnos', profesorAlumnoRoutes);
router.use('/profesoresComites', profesorComiteRoutes);
router.use("/TFC", TFCRoutes);

module.exports = router;