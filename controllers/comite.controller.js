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

//crear comites
module.exports.CreateComite = async(req,res) => {
  try{
    const ya_existe_comite = await Comite.findOne({
      where: {
        numeroSerie: req.body.numeroSerie,
      },
    });

    if (ya_existe_comite) {
      return res.status(409).json({
        message: "el comite ya existe, ingresa otro",
        data: ya_existe_comite,
      });
    } else {
      const comite = await Comite.create({
        numeroSerie: req.body.numeroSerie,
        lugarExamen: req.body.lugarExamen,
        fechaFormacion: req.body.fechaFormacion,
        numeroIntegrantes: req.body.numeroIntegrantes,
      });

      return res.status(201).json({
        data: comite,
      });
    }

  }catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

//obtener comite por codigo
module.exports.getComiteporCodigo = async (req,res) => {
  try{
    const comite = await Comite.findOne({
      where: {
        numeroSerie: req.params.numeroSerie,
      },
    });

    if (!comite) {
      return res.status(404).json({
        message: "El comite no existe",
      });
    }

    return res.status(200).json({
      data: comite,
    });
  }catch (error){
    return res.status(500).json({
      error: error.message,
    })
  }
}

//actualizar comite
module.exports.actualizarComite = async(req,res) => {
  try{
      const { numeroSerie } = req.params;
      const { lugarExamen, fechaFormacion, numeroIntegrantes } = req.body;

      const comite = await Comite.findByPk(numeroSerie);

      if(!comite) {
        return res.status(404).json({
          error: 'Comite no existe :s'
        });
      }else{

        comite.lugarExamen = lugarExamen;
        comite.fechaFormacion = fechaFormacion;
        comite.numeroIntegrantes = numeroIntegrantes;

        await comite.save();
        return res.status(200).json({
          message: 'registro modificado!',
          data: comite
        });
      }
  }catch(error){
    return res.status(500).json({
      error: 'hubo un error al intentar modificar'
    });
  }
}

//eliminar comite
module.exports.borrarComite = async(req,res) => {
   try{
    const { numeroSerie } = req.params;

    const comite = await Comite.findByPk(numeroSerie);

    if(!comite) {
      return res.status(404).json({
        error: 'Comite no existe :s'
      });
    }else{
      await comite.destroy();
      return res.status(200).json({
        message: 'registro eliminado!',
        data: comite
      });
    }
   }catch(error){
      return res.status(500).json({
        error: 'hubo un error al intentar modificar'
      });
   }
}