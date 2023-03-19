const express = require('express').Router();
// const uuid = require('../helpers/uuid');
const {readFromFile} = require('../helpers/fsUtils');


express.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
    );
});

module.exports = express;