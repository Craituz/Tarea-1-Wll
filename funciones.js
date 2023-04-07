function mostrarIdioma(Idiomas) {
  console.log("Estructura ForEach");
  console.log("Idiomas");
  Idiomas.forEach((Idioma) => {
    console.log(Idioma);
  });
};

function mostrarEstudiante(Estudiantes) {
  console.log("Estructura For");
  console.log("Estudiantes");
  for (let i = 0; i < Estudiantes.length; i++) {
      console.log(Estudiantes[i]);
  };
};

function mostrarControl(Controles) {
  let i = 0;
  console.log("Ciclo While");
  console.log("-Control de Idioma-");
  while (i < Controles.length) {
    let Control = Controles[i];
    console.log(Control);
    i++;
  }
};

module.exports = {
    mostrarEstudiante,
    mostrarIdioma,
    mostrarControl,
};