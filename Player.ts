import { Deck } from "./Deck";
import { Entity } from "./Entity";

export class Player extends Entity {

    private id: string
    private energy: number
    private deck: Deck

    constructor(id: string, health: number, energy: number, deck: Deck) {
        super(health)

        this.id = id
        this.energy = energy
        this.deck = deck
    }

    getId() {
        return this.id
    }

    getEnergy() {
        return this.energy
    }

    getDeck() {
        return this.deck
    }
}