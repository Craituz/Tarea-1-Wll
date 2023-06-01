const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const estudianteRouter = require("./routes/estudiantes");
const idiomaRouter = require("./routes/idiomas");
const controlRouter = require("./routes/controls");
const corredorRouter = require("./routes/corredors");
const carreraRouter = require("./routes/carreras");
const seguimientoRouter = require("./routes/seguimientos");

const app =express();
const port = process.env.port || 9000;

// middleware
app.use(express.json());
app.use('/api', idiomaRouter);
app.use('/api', estudianteRouter);
app.use('/api', controlRouter);
app.use('/api', corredorRouter);
app.use('/api', carreraRouter);
app.use('/api', seguimientoRouter);

// routes
app.get("/", (req, res) => {
    res.send("bienvenidos");
});

//conexion
mongoose
    .connect(process.env.MONGODB_CNN)
    .then(() => console.log('conectado a MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('conectado', port));