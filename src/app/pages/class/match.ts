import { Set } from './set';
import { Player } from './player';

export class Match {

    private sets: Set[] = [];
    private players: Player[];

    constructor(players: Player[]) {
        this.players = players;
    }

    addSet(set: Set) {
        this.sets.push(set);
    }

    removeSet(set: Set = null) {
        if (set) {
            const index = this.sets.indexOf(set);
            if(index !== -1)
            {
                this.sets.slice();
            }
            return;
        }
        this.sets.pop();
    }

    public getPlayerOne(): Player {
        return this.players[0];
    }

    public getPlayerTwo(): Player {
        return this.players[1];
    }

    /**
     * Getter $players
     * @return {Player[] }
     */
	public getPlayers(): Player[]  {
		return this.players;
    }
    
    getCurrentSet():Set | undefined {
        return this.sets[this.sets.length - 1];
    }

    getSets()
    {
        return this.sets;
    }

}
