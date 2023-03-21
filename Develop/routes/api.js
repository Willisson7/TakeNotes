const express = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
express.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});

express.post('/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a note`);

    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            title_id: uuid(),
        };
        console.log(newNote);
        
        readAndAppend(newNote, './db/db.json');
        res.json('New note added successfully!');
    } else {
        res.error('Could not add new note.');
    }

    // Log our request to the terminal
    console.info(`${req.method} request received to add a note`)
  });


module.exports = express;