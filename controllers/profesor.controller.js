const Profesor = require("../db/models")["Profesor"];

// ENDPOINTS:
module.exports.getProfesores = async (req, res) => {
  try {
    const profesores = await Profesor.findAll();
    if (profesores.length === 0) {
      return res.status(200).json({ data: profesores, message: "No hay registros" });
    }
    return res.status(200).json({ data: profesores });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};