const ProfesorComite = require("../db/models")["ProfesorComite"];
const Profesor = require("../db/models")["Profesor"];
const TFC = require("../db/models")["TFC"];

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

//ASOCIAR UN TFC A UN PROFESOR
module.exports.AsociarTFCs = async(req,res) => {
  try{

    const { codigo_TFC, carnet_profesor } = req.body;

    const TFC_existe = await TFC.findOne({
      where: {
         numeroOrden: codigo_TFC,
      }
    });

    if (!TFC_existe) {
      return res.status(400).json({
        message: "Comite no existe",
      });
    }

    const profesor_existe = await Profesor.findOne({
      where: {
        carnet: carnet_profesor,
      }
    });

    if (!profesor_existe) {
      return res.status(400).json({
        message: "Profesor no existe",
      });
    }

    const RelacionExiste = await ProfesorComite.findOne({
      where: {
        codigo_TFC,
        carnet_profesor,
      },
    });

    if (RelacionExiste) {
      return res.status(400).json({
        message: "La relación ya existe",
      });
    }

    // Crear la relación ProfesorAlumno
    const profesorComite = await ProfesorComite.create({
      codigo_TFC,
      carnet_profesor,
    });

    return res.status(201).json({
      message: 'relacion creada :3',
      data: profesorComite,
    });

  }catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};