const mongoose = require('mongoose');
const Docentes = require('../Models/docentes');

module.exports.verlistado = async (req, res) => {
    try {
        const docentes = await Docentes.find({});
        res.render('docentes', { docentes:docentes });
        
    } catch (error) {
        console.error('Error mostrando los docentes', error);
        res.status(500).json({
            message: 'Error mostrando'
        });
    }
};

const { validationResult } = require('express-validator');
const docentes = require('../Models/docentes');

module.exports.crear = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const docente = new Docentes({
      PrimerNombre: req.body.PrimerNombre,
      SegundoNombre: req.body.SegundoNombre,
      PrimerApellido: req.body.PrimerApellido,
      SegundoApellido: req.body.SegundoApellido,
      Especialidad: req.body.Especialidad
    });

    await docente.save();
    res.redirect('/docentes'); // Redirige a la página de listado de docentes después de crear uno nuevo
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Error al registrar el docente' });
  }
};


module.exports.borrar = async (req, res) => {
  const id = req.params.id;

  try {
    const docenteEliminado = await Docentes.findByIdAndDelete(id);
    if (!docenteEliminado) {
      return res.status(404).json({ message: 'Docente no encontrado' });
    }
    // Si se elimina correctamente, redirige a la página de listado de docentes
    res.redirect('/docentes');
  } catch (error) {
    console.error(error.message);
    // En caso de error, muestra un mensaje de error al usuario
    return res.status(500).json({ message: 'Error al borrar el registro' });
  }
};


module.exports.editar = async (req, res) => {
    const id = req.body.id_editar;

    try {
        const docenteActualizado = await Docentes.findByIdAndUpdate(id, {
            PrimerNombre: req.body.PrimerNombre_editar,
            SegundoNombre: req.body.SegundoNombre_editar,
            PrimerApellido: req.body.PrimerApellido_editar,
            SegundnodeoApellido: req.body.SegundoApellido_editar,
            Especialidad: req.body.Especialidad_editar
        }, { new: true });

        if (!docenteActualizado) {
            return res.status(404).json({ message: 'Docente no encontrado' });
        }
        return res.redirect('/docentes');
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error al actualizar el docente' });
    }
};




