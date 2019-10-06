'use strict';
const Match = require('../models/match');
const Set = require('../models/set');
const Player = require('../models/player');

class MatchController {

    constructor() {
        this.match = this.getDefault();
    }

    reset() {
        this.match = this.getDefault();
    }

    getDefault() {
        return new Match([new Player('Player One'), new Player('Player Two')], [new Set()]);
    }

    createMatch(p1Name, p2Name) {
        this.match = new Match([new Player(p1Name), new Player(p2Name)]);
        const set = new Set();
        this.match.addSet(set);
    }

    addPointPlayer1() {
        const set = this.match.getCurrentSet();
        if (set) {
            set.addPointForP1();
        }
    }

    removePointPlayer1() {

        const set = this.match.getCurrentSet();
        if (set) {
            set.removePointForP1();
        }
    }

    addPointPlayer2() {
        const set = this.match.getCurrentSet();
        if (set) {
            set.addPointForP2();
        }
    }

    removePointPlayer2() {

        const set = this.match.getCurrentSet();
        if (set) {
            set.removePointForP2();
        }
    }

    setWinnerP1() {
        const set = this.match.getCurrentSet();
        if (set) {
            set.setWinner(this.match.players[0].getName());
            this.addSet();
        }
    }

    setWinnerP2() {
        const set = this.match.getCurrentSet();
        if (set) {
            set.setWinner(this.match.players[1].getName());
            this.addSet();
        }
    }

    addSet() {
        const set = new Set();
        this.match.addSet(set);
    }

    removeSet() {
        this.match.removeSet();
        if (this.match.sets.length == 0) {
            this.addSet();
        } else {
            this.match.getCurrentSet().setWinner("");
        }
    }

    getMatch() {
        return this.match;
    }

    getCurrentSet() {
        return this.match.sets[this.match.sets.length - 1]
    }

    getSets() {
        return this.match.sets;
    }
};

module.exports = new MatchController();