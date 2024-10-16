import { Card } from "../cards/Card";

export default class DrawPile {
    constructor(private cards: Card[]) { }


    public unshift(...card: Card[]): void {
        this.cards.push(...card)
    }

    public draw(cardsAmount: number): Card[] {
        if (this.isDrawAmountBiggerThanAvailable(cardsAmount)) {
            return this.cards.splice(0, Infinity)
        }

        const drawn = []

        while (drawn.length < cardsAmount) {
            drawn.push(this.spliceRandomCard())
        }

        return drawn
    }

    public pop(): Card | null {
        return this.cards.pop() ?? null
    }

    public shuffle(): void {
        this.cards.sort(() => Math.random() - Math.random())
    }

    public getCardsAmount(): number {
        return this.cards.length
    }

    private isDrawAmountBiggerThanAvailable(amount: number): boolean {
        return amount > this.getCardsAmount()
    }

    private spliceRandomCard(): Card {
        const cardsAmount = this.getCardsAmount()
        const index = Math.floor(Math.random() * cardsAmount)
        const card = this.cards.splice(index, 1)

        return card[0]
    }
}