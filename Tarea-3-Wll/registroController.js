//registroController.js
const Registro = require('./Registro');

// Función para crear un registro
const createRegistro = (registroData, callback) => {
  const registro = new Registro(registroData);
  registro.save((error, registro) => {
    if (error) {
      return callback(error, null);
    }
    Registro.findById(registro._id).populate('estudiante idioma').exec((error, registro) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, registro);
    });
  });
};

// Función para obtener todos los registros
const getRegistros = (callback) => {
  Registro.find().populate('estudiante idioma').exec((error, registros) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, registros);
  });
};

// Función para obtener un registro por ID
const getRegistro = (id, callback) => {
  Registro.findById(id).populate('ID_Estudiante ID_Idioma').exec((error, registro) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, registro);
  });
};

// Función para actualizar un registro por ID
const updateRegistro = (id, registroData, callback) => {
  Registro.findByIdAndUpdate(id, registroData, { new: true }).populate('ID_Estudiante ID_Idioma').exec((error, registro) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, registro);
  });
};

// Función para eliminar un registro por ID
const deleteRegistro = (id, callback) => {
  Registro.findByIdAndDelete(id, (error, registro) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, registro);
  });
};

module.exports = { createRegistro, getRegistros, getRegistro, updateRegistro, deleteRegistro };
