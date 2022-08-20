const express = require('express');
const router = express.Router();
const colors = require('../../data');

//! Get all the colors
router.get('/', (req, res) => {
    res.json(colors);
})

//! Get color by id
router.get('/:id', (req, res) => {
    const found = colors.find((color) => color.id === parseInt(req.params.id));

    if (found) {
        res.json(found);
    } else {
        res.sendStatus(404);
    }
})

//! Add new color by using post
router.post('')


module.exports = router;
