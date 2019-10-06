export class Player {

    name: string;

    constructor(name: string)
    {
        this.name = name;
    }


    /**
     * Getter $name
     * @return {string}
     */
	public getName(): string {
		return this.name;
	}

}
