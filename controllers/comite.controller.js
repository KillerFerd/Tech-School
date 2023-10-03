const Comite = require("../db/models")["Comite"];

// ENDPOINTS:
module.exports.getComites = async (req, res) => {
  try {
    const comites = await Comite.findAll();
    if (comites.length === 0) {
      return res.status(200).json({ data: comites, message: "No hay registros" });
    }
    return res.status(200).json({ data: comites });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};