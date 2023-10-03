const TFC = require("../db/models")["TFC"];

// ENDPOINTS:
module.exports.getTFCs = async (req, res) => {
  try {
    const TFCs = await TFC.findAll();
    if (TFCs.length === 0) {
      return res.status(200).json({ data: TFCs, message: "No hay registros" });
    }
    return res.status(200).json({ data: TFCs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};