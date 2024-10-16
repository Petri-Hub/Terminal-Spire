import { Deck } from './Deck'
import { Entity } from './Entity'
import { NumberBar } from './NumberBar'
import { EntityProps } from './types/EntityProps'

type PlayerProps = EntityProps & {
	energy: NumberBar,
	deck: Deck
}

export class Player extends Entity {
	private energy: NumberBar
	private deck: Deck

	constructor({ energy, deck, ...props }: PlayerProps) {
		super(props)

		this.deck = deck
		this.energy = energy
	}

	public getDeck(): Deck {
		return this.deck
	}

	public getEnergy(): NumberBar {
		return this.energy
	}
}
