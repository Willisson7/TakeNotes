const express = require('express');
const path = require('path');
const {mlog} = require('./middleware/mlog');
const apiRouter = require('./routes/api');
const notesRouter = require('./routes/notes');

const PORT = process.env.PORT || 3001;

const app = express();

// place Json middleware
app.use(mlog);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);
app.use('/', notesRouter);


app.use(express.static("public"));
// GET 

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
); 


// GET 
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
); 


// app.post('api/notes', (req, res) => {
//     // Inform the client that their POST request was received
//     res.json(`${req.method} request received to add a note`);
  
//     // Log our request to the terminal
//     console.info(`${req.method} request received to add a note`);
//   });


// Place PORT listen

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);
