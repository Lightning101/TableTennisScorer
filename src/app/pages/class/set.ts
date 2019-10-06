import { Player } from './player';

export class Set {

    winner: string='';
    p1Score = 0;
    p2Score = 0;

    constructor() {
    }


/**
     * Getter $winner
     * @return {string}
     */
    getWinner() {
        return this.winner;
    }

    /**
     * Setter $winner
     * @param {string} value
     */
    setWinner(value) {
        this.winner = value;
    }

    addPointForP1() {
        this.p1Score++;
    }

    addPointForP2() {
        this.p2Score++;
    }

    removePointForP1() {
        if (this.p1Score > 0)
            this.p1Score--;
    }

    removePointForP2() {
        if (this.p2Score > 0)
            this.p2Score--;
    }

    getP1Points() {
        return this.p1Score;
    }

    getP2Points() {
        return this.p2Score;
    }

    setP1Points(point) {
        this.p1Score = point;
    }

    setP2Points(point) {
        this.p2Score = point;
    }
}
