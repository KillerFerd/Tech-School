const Profesor = require("../db/models")["Profesor"];

// Crear:
module.exports.createProfesor = async (req, res) => {
  try {
    const existingProfesorDPI = await Profesor.findOne({
      where: {
        dpi: req.body.dpi,
      },
    });

    const existingProfesorCarnet = await Profesor.findOne({
      where: {
        carnet: req.body.carnet,
      },
    });

    if (existingProfesorDPI) {
      return res.status(409).json({
        message: "El DPI ya está registrado",
        data: existingProfesorDPI,
      });
    }

    if (existingProfesorCarnet) {
      return res.status(409).json({
        message: "El Carnet ya está registrado",
        data: existingProfesorCarnet,
      });
    }

    // Si no existe conflicto, crear un nuevo profesor
    const profesor = await Profesor.create({
      carnet: req.body.carnet,
      dpi: req.body.dpi,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      gradoAcademico: req.body.gradoAcademico,
    });

    return res.status(201).json({
      data: profesor,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Obtener lista:
module.exports.getProfesores = async (req, res) => {
  try {
    const profesores = await Profesor.findAll();
    if (profesores.length === 0) {
      return res
        .status(200)
        .json({ data: profesores, message: "No hay registros" });
    }
    return res.status(200).json({
      data: profesores,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Obtener individual:
module.exports.getProfesorByCarnet = async (req, res) => {
  try {
    const profesor = await Profesor.findOne({
      where: {
        carnet: req.params.profesorCarnet,
      },
    });

    if (!profesor) {
      return res.status(404).json({
        message: "El profesor solicitado no existe",
      });
    }

    return res.status(200).json({
      data: profesor,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Actualizar
module.exports.updateProfesor = async (req, res) => {
  try {
      const profesor = await Profesor.findOne({
          where: {
              carnet: req.params.profesorCarnet
          }
      });

      if (!profesor) {
          return res.status(404).json({
              message: 'El Profesor no existe'
          });
      }

      // Verificar si se está actualizando el campo 'dpi'
      if (req.body.dpi && req.body.dpi !== profesor.dpi) {
          // Si se está actualizando 'dpi', verificar si ya existe otro registro con el nuevo valor
          const existingProfesor = await Profesor.findOne({
              where: {
                  dpi: req.body.dpi
              }
          });

          if (existingProfesor) {
              return res.status(400).json({
                  message: 'El DPI ya está en uso'
              });
          }
      }

      // Actualizar los datos del profesor
      await profesor.update({ ...req.body });

      return res.status(200).json({
          data: profesor,
          message: 'Profesor Actualizado'
      });
  } catch (error) {
      return res.status(500).json({
          error: error.message
      });
  }
};

// Eliminar
module.exports.deleteProfesor = async (req, res) => {
  try {
      const profesor = await Profesor.findOne({
          where: {
              carnet: req.params.profesorCarnet
          }
      });

      if (!profesor) {
          return res.status(404).json({
              message: 'El Profesor no existe'
          });
      }

      await profesor.destroy(); // Elimina el registro del profesor

      return res.status(200).json({
          message: 'Profesor Eliminado'
      });
  } catch (error) {
      return res.status(500).json({
          error: error.message
      });
  }
};