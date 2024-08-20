import { NumberBar } from "./NumberBar"

export abstract class Entity {
    constructor(
        private id: string,
        private health: NumberBar,
        private defense: NumberBar
    ) { }

    public getId(): string {
        return this.id
    }
    
    public getHealth(): NumberBar {
        return this.health
    }

    public getDefense(): NumberBar {
        return this.defense
    }

    public isAlive(): boolean {
        return this.health.getValue() > 0
    }
}