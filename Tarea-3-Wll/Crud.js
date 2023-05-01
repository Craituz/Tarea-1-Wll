//Crud.js
const { Estudiante, Idioma, Control } = require('./models');

const createEstudiante = (estudianteData, callback) => {
  const estudiante = new Estudiante(estudianteData);
  estudiante.save(callback);
};

const getEstudiantes = (callback) => {
  Estudiante.find({}, callback);
};

const getEstudiante = (id, callback) => {
  Estudiante.findById(id, callback);
};

const updateEstudiante = (id, estudianteData, callback) => {
  Estudiante.findByIdAndUpdate(id, estudianteData, { new: true }, callback);
};

const deleteEstudiante = (id, callback) => {
  Estudiante.findByIdAndDelete(id, callback);
};

const createRegistro = (registroData, callback) => {
  const registro = new Control(registroData);
  registro.save(callback);
};

const getRegistros = (callback) => {
  Control.find({}, callback);
};

const getRegistro = (id, callback) => {
  Control.findById(id, callback);
};

const updateRegistro = (id, registroData, callback) => {
  Control.findByIdAndUpdate(id, registroData, { new: true }, callback);
};

const deleteRegistro = (id, callback) => {
  Control.findByIdAndDelete(id, callback);
};

module.exports = {
  createEstudiante,
  getEstudiantes,
  getEstudiante,
  updateEstudiante,
  deleteEstudiante,
  createRegistro,
  getRegistros,
  getRegistro,
  updateRegistro,
  deleteRegistro,
};