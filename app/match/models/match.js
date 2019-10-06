'use strict';
const Set = require('./set');
const Player = require('./player');

class Match {


    constructor(players, sets = []) {
        this.players = players;
        this.sets = sets;
    }

    addSet(set) {
        this.sets.push(set);
    }

    removeSet(set = null) {
        if (set) {
            const index = this.sets.indexOf(set);
            if (index !== -1) {
                this.sets.slice();
            }
            return;
        }
        this.sets.pop();
    }

    getPlayerOne() {
        return this.players[0];
    }

    getPlayerTwo() {
        return this.players[1];
    }

    /**
     * Getter $players
     * @return {Player[] }
     */
    getPlayers() {
        return this.players;
    }

    getCurrentSet() {
        return this.sets[this.sets.length - 1];
    }
};
module.exports = Match;