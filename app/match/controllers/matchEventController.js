'use strict';

class MatchEventController {



    constructor() {
        this.io = null;
        this.sockets = [];
    }

    setSocket(io) {
        this.io = io;
        this.setupEvents();
    }

    setupEvents() {
        this.io.on('connection', (socket) => {
            console.log("connected");
            socket.emit('hello', {
                message: 'Hello World',
                id: socket.id
            })
        });
    }

    emitPlayerOneScoreUpdate(score) {
        if (this.io)
            this.io.sockets.emit('playerOneScoreUpdate', score);
    }

    emitPlayerTwoScoreUpdate(score) {
        if (this.io)
            this.io.sockets.emit('playerTwoScoreUpdate', score);
    }

    emitSetsUpdate(sets) {
        if (this.io)
            this.io.sockets.emit('setsUpdate', sets);
    }

    emitMatchUpdate(match) {
        if (this.io)
            this.io.sockets.emit('matchUpdate', match);
    }
};
module.exports = new MatchEventController();