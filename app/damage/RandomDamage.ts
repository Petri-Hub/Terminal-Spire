import { RandomCalculation } from '../calculations/RandomCalculation'
import { Damage } from './Damage'

export class RandomDamage extends Damage {
	constructor(min: number, max: number) {
		super(new RandomCalculation(min, max))
	}

	public getRepresentation(): string {
		return '?'
	}
}
