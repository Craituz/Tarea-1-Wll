const { Router } = require('express');
const seguimientoSchema = require("../models/seguimiento");

const router = Router();

// create 
router.post("/seguimientos", (req, res) => {
    const seguimiento = seguimientoSchema(req.body);
    seguimiento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/seguimientos", (req, res) => {
    seguimientoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;