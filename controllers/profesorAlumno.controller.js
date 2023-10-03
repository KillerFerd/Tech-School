const ProfesorAlumno = require("../db/models")["ProfesorAlumno"];

// ENDPOINTS:
module.exports.getProfesoresAlumnos = async (req, res) => {
  try {
    const profesoresAlumnos = await ProfesorAlumno.findAll();
    if (profesoresAlumnos.length === 0) {
      return res.status(200).json({ data: profesoresAlumnos, message: "No hay registros" });
    }
    return res.status(200).json({ data: profesoresAlumnos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};