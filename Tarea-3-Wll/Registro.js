//Registro.js
const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Estudiante',
    required: true,
  },
  idioma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idioma',
    required: true,
  },
  nivel: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

const Registro = mongoose.model('Registro', registroSchema);

module.exports = Registro;