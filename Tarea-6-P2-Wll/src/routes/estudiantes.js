const { Router } = require('express');
const estudianteSchema = require("../models/estudiante");

const router = Router();

// create 
router.post("/estudiantes", (req, res) => {
    const estudiante = estudianteSchema(req.body);
    estudiante
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/estudiantes", (req, res) => {
    estudianteSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;
