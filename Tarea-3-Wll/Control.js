//Control.js
const mongoose = require('mongoose');

const controlSchema = new mongoose.Schema({
  ID: Number,
  estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' },
  idioma: { type: mongoose.Schema.Types.ObjectId, ref: 'Idioma' },
  Porcentaje_Lectura: Number,
  Porcentaje_Escritura: Number,
  Porcentaje_Escuchar_Hablar: Number,
});

const Control = mongoose.model('Control', controlSchema);

module.exports = Control;