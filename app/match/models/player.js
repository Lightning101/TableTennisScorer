'use strict';
class Player {



    constructor(name) {
        this.name = name;
    }


    /**
     * Getter $name
     * @return {string}
     */
    getName() {
        return this.name;
    }

};
module.exports = Player;