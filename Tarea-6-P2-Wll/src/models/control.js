const { model, Schema } = require('mongoose');

const controlSchema = new Schema({
  porcentajelectura: {
    type: Number,
    required: true
  },
  porcentajescritura: {
    type: Number,
    required: true
  },
  edporcentaje_escucha_habla: {
    type: Number,
    required: true
  }
});

module.exports = model('control', controlSchema);