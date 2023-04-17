// Objeto Estudiante
const Estudiante = {
  ID: 10,
  Nombre: 'Adriana Macias',
  Identificación: 'ABC123',
  Edad: 24,
  CorreoElectronico: 'adrianamaciasadrianamacias@example.com',
};

// Objeto Idioma
const Idioma = {
  ID: 50,
  Descripción: 'Inglés',
  Nivel_Dificultad: 'Bajo',
  Participantes: 40,
  Duración: '3 meses',
};


// Arreglo de Estudiantes
const Estudiantes = [
  {ID: 11, Nombre: 'Derek Yepez', Identificacion: 'DFG456', Edad: 27, CorreoElectronico: 'derekyepez@example.com'},
  {ID: 12, Nombre: 'Jorge Tamayo', Identificacion: 'HIJ789', Edad: 23, CorreoElectronico: 'jorgetamayo@example.com'},
  {ID: 13, Nombre: 'Carolina Sornoza', Identificacion: 'KLF012', Edad: 22, CorreoElectronico: 'carolinasornoza@example.com'},
  {ID: 14, Nombre: 'Carlos Moreira', Identificacion: 'OPQ345', Edad: 22, CorreoElectronico: 'carlosmoreira@example.com'},
  {ID: 15, Nombre: 'Kevin Mera', Identificacion: 'RST678', Edad: 23, CorreoElectronico: 'kevinmera@example.com'},
  ];
  
  // Arreglo de Idioma
const Idiomas = [
  {ID: 51, ID_Estudiante: 11, Descripcion: 'Inglés', Nivel_Dificultad: 'Intermedio', Participantes: 40, Duración: '3 meses'},
  {ID: 52, ID_Estudiante: 12, Descripcion: 'Inglés', Nivel_Dificultad: 'Alto', Participantes: 40, Duración: '3 meses'},
  {ID: 53, ID_Estudiante: 13, Descripcion: 'Inglés', Nivel_Dificultad: 'Bajo', Participantes: 40, Duración: '3 meses'},
  {ID: 54, ID_Estudiante: 14, Descripcion: 'Inglés', Nivel_Dificultad: 'Bajo', Participantes: 40, Duración: '3 meses'},
  {ID: 55, ID_Estudiante: 15, Descripcion: 'Inglés', Nivel_Dificultad: 'Intermedio', Participantes: 40, Duración: '3 meses'},
  ];

module.exports = {
Estudiantes,
Idiomas,
};