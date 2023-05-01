//Estudiante.js
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  ID: Number,
  Nombre: String,
  Identificación: String,
  Edad: Number,
  CorreoElectronico: String,
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
