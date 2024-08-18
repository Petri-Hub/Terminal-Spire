import { IBehavior } from "../interfaces/IBehavior";
import { Entity } from "./Entity";

export class Enemy extends Entity {

    private behavior: IBehavior

    constructor(health: number, behavior: IBehavior) {
        super(health)

        this.behavior = behavior
    }

    
}