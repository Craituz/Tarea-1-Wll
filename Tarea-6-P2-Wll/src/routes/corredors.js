const { Router } = require('express');
const corredorSchema = require("../models/corredor");

const router = Router();

// create 
router.post("/corredors", (req, res) => {
    const corredor = corredorSchema(req.body);
    corredor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/corredors", (req, res) => {
    corredorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;