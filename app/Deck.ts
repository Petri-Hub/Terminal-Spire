import { Card } from './cards/Card'

export class Deck {
	private cards: Card[]

	constructor(cards: Card[]) {
		this.cards = cards
	}

	public getCards(): readonly Card[] {
		return this.cards
	}

	public addCard(card: Card): void {
		this.cards.push(card)
	}

	public deleteCard(id: string): boolean {
		const index = this.cards.findIndex((card) => card.getId() === id)
		const found = index > -1

		if(!found){
			return false
		}

		this.cards.splice(index, 1)

		return true
	}
}
