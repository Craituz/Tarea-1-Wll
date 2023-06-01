const { model, Schema } = require('mongoose');

const idiomaSchema = new Schema({
    descripcion: {
    type: String,
    required: true
  }
});

module.exports = model('idioma', idiomaSchema);