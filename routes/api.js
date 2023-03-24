const fs = require('fs');
const express = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
let dbData = require('../db/db.json');


express.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});

express.post('/notes', (req, res) => {
  
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        console.log(newNote);
        dbData.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(dbData, null, "\t"));
        res.json('dbData updated successfully!');
    } else {
        res.error('Could not add new note.');
    }
});

//     // Log our request to the terminal

express.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`)
    readFromFile('./db/db.json').then((data) => {
        let keepNote = [];
        let newData = JSON.parse(data);
        for (var i = 0; i < newData.length; i++) {
            if (newData[i].id != req.params.id) {
                keepNote.push(newData[i]);
            }
        }
        fs.writeFileSync('./db/db.json', JSON.stringify(keepNote));
        res.json('Note succesffully Deleted');
    })
});


module.exports = express;