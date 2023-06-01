const { model, Schema } = require('mongoose');

const corredorSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  altura: {
    type: Number,
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
});

module.exports = model('corredor', corredorSchema);
