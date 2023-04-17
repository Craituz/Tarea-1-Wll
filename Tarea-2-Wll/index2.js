//async-await
const { buscarIdiomaPorEstudiante } = require('./funciones2');

async function main() {
  try {
    const idEstudiante = 11;
    const idioma = await buscarIdiomaPorEstudiante(idEstudiante);
    console.log(`El estudiante con ID ${idEstudiante} está estudiando ${idioma.Descripcion}`);
  } catch (error) {
    console.error(error);
  }
}

main();