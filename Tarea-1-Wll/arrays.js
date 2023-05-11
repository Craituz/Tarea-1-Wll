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

// Objeto Control de Idioma
const Control = {
  ID: 100,
  ID_Estudiante: 10,
  ID_Idioma: 50,
  Porcentaje_Lectura: 80,
  Porcentaje_Escritura: 70,
  Porcentaje_Escuchar_Hablar: 75,
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
{ID: 51, Descripcion: 'Inglés', Nivel_Dificultad: 'Intermedio', Participantes: 40, Duración: '3 meses'},
{ID: 52, Descripcion: 'Inglés', Nivel_Dificultad: 'Alto', Participantes: 40, Duración: '3 meses'},
{ID: 53, Descripcion: 'Inglés', Nivel_Dificultad: 'Bajo', Participantes: 40, Duración: '3 meses'},
{ID: 54, Descripcion: 'Inglés', Nivel_Dificultad: 'Bajo', Participantes: 40, Duración: '3 meses'},
{ID: 55, Descripcion: 'Inglés', Nivel_Dificultad: 'Intermedio', Participantes: 40, Duración: '3 meses'},
];

// Arreglo de Control de Idioma
const Controles = [
{ID: 101, ID_Estudiante: 11, ID_Idioma: 51, Porcentaje_Lectura: 89, Porcentaje_Escritura: 78, Porcentaje_Escuchar_Hablar: 80},
{ID: 102, ID_Estudiante: 12, ID_Idioma: 52, Porcentaje_Lectura: 95, Porcentaje_Escritura: 91, Porcentaje_Escuchar_Hablar: 98},
{ID: 103, ID_Estudiante: 13, ID_Idioma: 53, Porcentaje_Lectura: 56, Porcentaje_Escritura: 61, Porcentaje_Escuchar_Hablar: 65},
{ID: 104, ID_Estudiante: 14, ID_Idioma: 54, Porcentaje_Lectura: 68, Porcentaje_Escritura: 69, Porcentaje_Escuchar_Hablar: 59},
{ID: 105, ID_Estudiante: 15, ID_Idioma: 55, Porcentaje_Lectura: 74, Porcentaje_Escritura: 79, Porcentaje_Escuchar_Hablar: 84}
];

module.exports = {
Estudiantes,
Idiomas,
Controles,
};