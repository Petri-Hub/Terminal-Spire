import { StaticCalculation } from '../calculations/StaticCalculation'
import { Cost } from './Cost'

export class StaticCost extends Cost<StaticCalculation> {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}

	getRepresentation(): string {
		return this.calculateCost().toString()
	}
}
