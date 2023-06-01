const { Router } = require('express');
const carreraSchema = require("../models/carrera");

const router = Router();

// create 
router.post("/carreras", (req, res) => {
    const carrera = carreraSchema(req.body);
    carrera
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/carreras", (req, res) => {
    carreraSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;