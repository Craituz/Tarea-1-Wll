const { Router } = require('express');
const controlSchema = require("../models/control");

const router = Router();

// create 
router.post("/controls", (req, res) => {
    const control = controlSchema(req.body);
    control
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});

// get all
router.get("/controls", (req, res) => {
    controlSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }))
});
module.exports = router;
