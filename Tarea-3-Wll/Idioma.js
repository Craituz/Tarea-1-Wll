//Idioma.js
const mongoose = require('mongoose');

const idiomaSchema = new mongoose.Schema({
  ID: Number,
  Descripción: String,
  Nivel_Dificultad: String,
  Participantes: Number,
  Duración: String,
});

const Idioma = mongoose.model('Idioma', idiomaSchema);

module.exports = Idioma;
