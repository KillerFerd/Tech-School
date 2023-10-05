const Sequelize = require("sequelize");
const ProfesorAlumno = require("../db/models")["ProfesorAlumno"];
const Alumno = require("../db/models")["Alumno"];
const Profesor = require("../db/models")["Profesor"];

// Asociar:
module.exports.createProfesorAlumno = async (req, res) => {
  try {
    // Obtén los carnets del cuerpo de la solicitud
    const { carnet_alumno, carnet_profesor } = req.body;

    // Verificar si el carnet_profesor existe
    const profesorExistente = await Profesor.findOne({
      where: {
        carnet: carnet_profesor,
      },
    });

    if (!profesorExistente) {
      return res.status(400).json({
        message: "Carnet de profesor no existe",
      });
    }

    // Verificar si el carnet_alumno existe
    const alumnoExistente = await Alumno.findOne({
      where: {
        carnet: carnet_alumno,
      },
    });

    if (!alumnoExistente) {
      return res.status(400).json({
        message: "Carnet de alumno no existe",
      });
    }

    // Verificar si la relación ya existe
    const existingRelation = await ProfesorAlumno.findOne({
      where: {
        carnet_alumno,
        carnet_profesor,
      },
    });

    if (existingRelation) {
      return res.status(400).json({
        message: "La relación ya existe",
      });
    }

    // Crear la relación ProfesorAlumno
    const profesorAlumno = await ProfesorAlumno.create({
      carnet_alumno,
      carnet_profesor,
    });

    return res.status(201).json({
      data: profesorAlumno,
      message: "Relación ProfesorAlumno creada exitosamente",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Actualizar: 
module.exports.updateProfesorAlumno = async (req, res) => {
  try {
    // Obtén el ID de la relación ProfesorAlumno a actualizar
    const { profesorAlumnoId } = req.params;

    // Verificar si la relación existe
    const existingRelation = await ProfesorAlumno.findOne({
      where: {
        id: profesorAlumnoId,
      },
    });

    if (!existingRelation) {
      return res.status(404).json({
        message: "La relación ProfesorAlumno no existe",
      });
    }

    // Obtén los carnets del cuerpo de la solicitud
    const { carnet_alumno, carnet_profesor } = req.body;

    // Verificar si el carnet_profesor existe
    const profesorExistente = await Profesor.findOne({
      where: {
        carnet: carnet_profesor,
      },
    });

    if (!profesorExistente) {
      return res.status(400).json({
        message: "Carnet de profesor no existe",
      });
    }

    // Verificar si el carnet_alumno existe
    const alumnoExistente = await Alumno.findOne({
      where: {
        carnet: carnet_alumno,
      },
    });

    if (!alumnoExistente) {
      return res.status(400).json({
        message: "Carnet de alumno no existe",
      });
    }

    // Verificar si ya existe una relación con los mismos carnets (excepto la relación actual)
    const existingDuplicate = await ProfesorAlumno.findOne({
      where: {
        id: { [Sequelize.Op.ne]: profesorAlumnoId }, // Excluir la relación actual
        carnet_alumno,
        carnet_profesor,
      },
    });

    if (existingDuplicate) {
      return res.status(400).json({
        message: "La relación ya existe",
      });
    }

    // Actualizar la relación ProfesorAlumno
    await existingRelation.update({
      carnet_alumno,
      carnet_profesor,
    });

    return res.status(200).json({
      data: existingRelation,
      message: "Relación ProfesorAlumno actualizada exitosamente",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Alumnos por carnetProfesor:
module.exports.getProfesoresAlumnos = async (req, res) => {
  try {
    const { carnetProfesor } = req.params;

    // Verificar si el carnet_profesor existe
    const profesorExistente = await Profesor.findOne({
      where: {
        carnet: carnetProfesor,
      },
    });

    if (!profesorExistente) {
      return res.status(400).json({
        message: "Carnet de profesor no existe",
      });
    }

    // Buscar todos los registros asociados al carnet del profesor
    const profesoresAlumnos = await ProfesorAlumno.findAll({
      where: {
        carnet_profesor: carnetProfesor,
      },
    });

    if (profesoresAlumnos.length === 0) {
      return res.status(200).json({ data: profesoresAlumnos, message: "No hay registros para el carnet de profesor proporcionado" });
    }

    return res.status(200).json({ data: profesoresAlumnos });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};