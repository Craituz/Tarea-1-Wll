const { model, Schema } = require('mongoose');

const carreraSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  kilometros: {
    type: Number,
    required: true
  },
  detalles: {
    type: String,
    required: true
  },
  fecha: {
    type: Number,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
});

module.exports = model('carrera', carreraSchema);