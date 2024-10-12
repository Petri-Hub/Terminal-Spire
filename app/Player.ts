import { Entity } from './Entity'
import { NumberBar } from './NumberBar'
import { EntityProps } from './types/EntityProps'

type PlayerProps = EntityProps & {
	energy: NumberBar
}

export class Player extends Entity {
	private energy: NumberBar

	constructor({ energy, ...props }: PlayerProps) {
		super(props)

		this.energy = energy
	}

	public getEnergy(): NumberBar {
		return this.energy
	}
}
