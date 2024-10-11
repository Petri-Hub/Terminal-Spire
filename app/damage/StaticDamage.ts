import { StaticCalculation } from '../calculations/StaticCalculation'
import { Damage } from './Damage'

export class StaticDamage extends Damage<StaticCalculation> {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}

	getRepresentation(): string {
		return this.calculateDamage().toString()
	}
}
