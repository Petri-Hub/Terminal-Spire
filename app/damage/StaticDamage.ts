import { StaticCalculation } from '../calculations/StaticCalculation'
import { Damage } from './Damage'

export class StaticDamage extends Damage {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}

	public getRepresentation(): string {
		return this.calculateDamage().toString()
	}
}
