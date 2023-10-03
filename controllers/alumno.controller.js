const Alumno = require("../db/models")["Alumno"];

// ENDPOINTS:
module.exports.getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    if (alumnos.length === 0) {
      return res.status(200).json({ data: alumnos, message: "No hay registros" });
    }
    return res.status(200).json({ data: alumnos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};