const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 4600;

// Getting our routes
const api = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'dist/ang-node')));

//Using middleware
app.use('/api', api);

//catch all other routes requests and return it to the index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'))
});

app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`)
});