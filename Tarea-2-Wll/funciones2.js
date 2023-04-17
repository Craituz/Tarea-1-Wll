//async-await
const { Estudiantes, Idiomas } = require('./datos');

function buscarIdiomaPorEstudiante(idEstudiante) {
  return new Promise((resolve, reject) => {
    // Buscar estudiante por ID
    const estudiante = Estudiantes.find((e) => e.ID === idEstudiante);

    // Si no se encuentra el estudiante, rechazar la promesa con un mensaje de error
    if (!estudiante) {
      reject(`No existe estudiante con ID ${idEstudiante}`);
      return;
    }

    // Buscar idioma por ID de estudiante
    const idioma = Idiomas.find((i) => i.ID_Estudiante === idEstudiante);

    // Si no se encuentra el idioma asociado al estudiante, rechazar la promesa con un mensaje de error
    if (!idioma) {
      reject(`El estudiante con ID ${idEstudiante} no tiene un idioma asociado`);
      return;
    }

    // Si se encontró el idioma, resolver la promesa con el objeto del idioma correspondiente
    resolve(idioma);
  });
}

module.exports = {
  buscarIdiomaPorEstudiante,
};