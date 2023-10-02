const Author = require("../db/models")["Author"];

// ENDPOINTS:
module.exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    if (authors.length === 0) {
      return res.status(200).json({ data: authors, message: "No hay registros" });
    }
    return res.status(200).json({ data: authors });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};