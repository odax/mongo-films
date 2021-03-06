const express = require('express');

const Planet = require('./Planet.js');
const Character = require('../characters/Character');
const Species = require('../species/Specie');


const router = express.Router();

// --General .Get----------------------------------------------------
////localhost:5000/api/planets/planet id

router.get(':/id', function(req, res) {
    const { id } = req.params;
    const chars = Character.find({ homeworld: id });
    const species = Character.find({ homeworld: id });
    Promise.all([chars, species]).then(results => {
        const [characters, species] = results;
        //same as const characters = restults[0]

        res.status(200).json({ characters, species });
    })
    .catch(err => res.send(err));
});

module.exports = router;
