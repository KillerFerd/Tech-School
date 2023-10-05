const Alumno = require("../db/models")["Alumno"];

// Crear:
module.exports.createAlumno = async (req, res) => {
  try {
    const existingAlumnoDPI = await Alumno.findOne({
      where: {
        dpi: req.body.dpi,
      },
    });

    const existingAlumnoCarnet = await Alumno.findOne({
      where: {
        carnet: req.body.carnet,
      },
    });

    if (existingAlumnoDPI) {
      return res.status(409).json({
        message: "El DPI ya está registrado",
        data: existingAlumnoDPI,
      });
    }

    if (existingAlumnoCarnet) {
      return res.status(409).json({
        message: "El Carnet ya está registrado",
        data: existingAlumnoCarnet,
      });
    }

    // Si no existe conflicto, crear un nuevo alumno
    const alumno = await Alumno.create({
      carnet: req.body.carnet,
      dpi: req.body.dpi,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      carrera: req.body.carrera,
    });

    return res.status(201).json({
      data: alumno,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Obtener lista:
module.exports.getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    if (alumnos.length === 0) {
      return res
        .status(200)
        .json({ data: alumnos, message: "No hay registros" });
    }
    return res.status(200).json({
      data: alumnos,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Obtener individual:
module.exports.getAlumnoByCarnet = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({
      where: {
        carnet: req.params.alumnoCarnet,
      },
    });

    if (!alumno) {
      return res.status(404).json({
        message: "El alumno solicitado no existe",
      });
    }

    return res.status(200).json({
      data: alumno,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Actualizar
module.exports.updateAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({
      where: {
        carnet: req.params.alumnoCarnet,
      },
    });

    if (!alumno) {
      return res.status(404).json({
        message: "El Alumno no existe",
      });
    }

    // Verificar si se está actualizando el campo 'dpi'
    if (req.body.dpi && req.body.dpi !== alumno.dpi) {
      // Si se está actualizando 'dpi', verificar si ya existe otro registro con el nuevo valor
      const existingAlumno = await Alumno.findOne({
        where: {
          dpi: req.body.dpi,
        },
      });

      if (existingAlumno) {
        return res.status(400).json({
          message: "El DPI ya está en uso",
        });
      }
    }

    // Actualizar los datos del alumno
    await alumno.update({ ...req.body });

    return res.status(200).json({
      data: alumno,
      message: "Alumno Actualizado",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Eliminar
module.exports.deleteAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findOne({
      where: {
        carnet: req.params.alumnoCarnet,
      },
    });

    if (!alumno) {
      return res.status(404).json({
        message: "El Alumno no existe",
      });
    }

    await alumno.destroy(); // Elimina el registro del alumno

    return res.status(200).json({
      message: "Alumno Eliminado",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
