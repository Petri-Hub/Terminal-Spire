import { Card } from "./cards/Card";

export default class DrawPile {
    constructor(private cards: Card[]) { }

    public draw(amount: number): Card[] {
        if (this.isDrawAmountBiggerThanAvailable(amount)) {
            return this.cards.splice(0, Infinity)
        }

        const drawn = []

        while (drawn.length < amount) {
            drawn.push(this.spliceRandomCard())
        }

        return drawn
    }

    public push(card: Card): void {
        this.cards.push(card)
    }

    public pop(): Card | null {
        return this.cards.pop() ?? null
    }

    public isDrawAmountBiggerThanAvailable(amount: number): boolean {
        return amount <= this.getCardsAmount()
    }

    public getCardsAmount(): number {
        return this.cards.length
    }

    public spliceRandomCard(): Card {
        const cardsAmount = this.getCardsAmount()
        const index = Math.floor(Math.random() * cardsAmount)
        const card = this.cards.splice(index, 1)

        return card[0]
    }
}