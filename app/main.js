'use strict';
const express = require('express');
const http = require('http');
const app = express();

const socketIo = require('socket.io');
const server = http.Server(app);

const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT | 3000;


const Match = require('./match/index');

const io = socketIo(server);
Match.eventController.setSocket(io);
server.listen(PORT, function(req, res) {
    console.log("listen at 3000!");
});

app.use(bodyParser.json());
app.use('/match', Match.router);


app.use(express.static(path.join(__dirname, '../dist/TableTennisScorer')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../dist/TableTennisScorer/index.html')));
});
// Routes