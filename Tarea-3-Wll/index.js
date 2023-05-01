//index.js
const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://craituz:crai@crai.3cbevif.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(error => console.log('Error de conexión:', error));

  // Ruta para crear un estudiante
app.post('/estudiantes', (req, res) => {
  createEstudiante(req.body, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

const { Estudiante, Idioma, Control } = require('./models');
const crud = require('./crud');
const Registro = require('./Registro');
const { createEstudiante, getEstudiantes, getEstudiante, updateEstudiante, deleteEstudiante, createRegistro, getRegistros, getRegistro, updateRegistro, deleteRegistro } = require('./crud');

// Ruta para obtener todos los estudiantes
app.get('/estudiantes', (req, res) => {
  getEstudiantes((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para obtener un estudiante por ID
app.get('/estudiantes/:id', (req, res) => {
  getEstudiante(req.params.id, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para actualizar un estudiante por ID
app.put('/estudiantes/:id', (req, res) => {
  updateEstudiante(req.params.id, req.body, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para eliminar un estudiante por ID
app.delete('/estudiantes/:id', (req, res) => {
  deleteEstudiante(req.params.id, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para crear un registro
app.post('/registros', (req, res) => {
  createRegistro(req.body, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para obtener todos los registros
app.get('/registros', (req, res) => {
  getRegistros((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para obtener un registro por ID
app.get('/registros/:id', (req, res) => {
  getRegistro(req.params.id, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para actualizar un registro por ID
app.put('/registros/:id', (req, res) => {
  updateRegistro(req.params.id, req.body, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

// Ruta para eliminar un registro por ID
app.delete('/registros/:id', (req, res) => {
  deleteRegistro(req.params.id, (error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.send(result);
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
 
module.exports = app;