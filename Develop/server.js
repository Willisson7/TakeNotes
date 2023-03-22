const express = require('express');
const path = require('path');
const {mlog} = require('./middleware/mlog');
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();


// place Json middleware
app.use(mlog);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));
app.use('/api', apiRouter);


app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
); 

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
); 


// Place PORT listen

app.listen(PORT, () => 
console.log(`Listening at http://localhost:${PORT}`)
);
