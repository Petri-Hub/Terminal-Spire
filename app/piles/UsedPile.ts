import { Card } from "../cards/Card";

export class UsedPile{
    constructor(private cards: Card[]){}

    public addCards(...cards: Card[]): void {
        this.cards.push(...cards)
    }

    public empty(): Card[] {
        return this.cards.splice(0, Infinity)
    }
}