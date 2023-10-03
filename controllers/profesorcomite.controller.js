const ProfesorComite = require("../db/models")["ProfesorComite"];

// ENDPOINTS:
module.exports.getProfesoresComites = async (req, res) => {
  try {
    const profesoresComites = await ProfesorComite.findAll();
    if (profesoresComites.length === 0) {
      return res.status(200).json({ data: profesoresComites, message: "No hay registros" });
    }
    return res.status(200).json({ data: profesoresComites });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};