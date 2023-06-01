const { model, Schema } = require('mongoose');

const estudianteSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  identificacion: {
    type: Number,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  correoelectronico: {
    type: String,
    required: true
  }
});

module.exports = model('estudiante', estudianteSchema);
