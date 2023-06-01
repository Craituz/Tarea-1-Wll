const { model, Schema } = require('mongoose');

const seguimientoSchema = new Schema({
  tiempollegada: {
    type: String,
    required: true
  },
  ordenllegada: {
    type: String,
    required: true
  },
  pulsoinicial: {
    type: String,
    required: true
  },
  pulsofinal: {
    type: String,
    required: true
  }
});

module.exports = model('seguimiento', seguimientoSchema);