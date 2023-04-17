//callbacks
const { buscarIdiomaEstudiante } = require('./funciones');

const idEstudiante = 11;

buscarIdiomaEstudiante(idEstudiante, (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  const { estudiante, idioma } = data || {};

  if (estudiante) {
    console.log('Estudiante:', estudiante);
  } else {
    console.log(`No se encontró un estudiante con ID ${idEstudiante}`);
  }

  if (idioma) {
    console.log('Idioma:', idioma);
  } else {
    console.log(`No se encontró un idioma para el estudiante con ID ${idEstudiante}`);
  }
});