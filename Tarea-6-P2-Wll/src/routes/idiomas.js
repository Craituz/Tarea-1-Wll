const { Router } = require('express');
const idiomaSchema = require("../models/idioma");

const router = Router();

// create 
router.post("/idiomas", (req, res) => {
    const idioma = idiomaSchema(req.body);
    idioma
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/idiomas", (req, res) => {
    idiomaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;