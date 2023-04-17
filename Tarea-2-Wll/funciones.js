//callbacks
const { Estudiantes, Idiomas } = require('./datos');

function buscarIdiomaEstudiante(idEstudiante, callback) {
  const estudiante = Estudiantes.find(est => est.ID === idEstudiante);
  if (!estudiante) {
    return callback(new Error(`No se encontró un estudiante con ID ${idEstudiante}`));
  }

  const idioma = Idiomas.find(idi => idi.ID_Estudiante === idEstudiante);
  if (!idioma) {
    return callback(new Error(`No se encontró un idioma para el estudiante con ID ${idEstudiante}`));
  }

  callback(null, { estudiante, idioma });
}

module.exports = {
  buscarIdiomaEstudiante,
};