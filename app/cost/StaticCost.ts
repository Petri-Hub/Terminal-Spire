import { StaticCalculation } from '../calculations/StaticCalculation'
import { Cost } from './Cost'

export class StaticCost extends Cost {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}

	public getRepresentation(): string {
		return this.calculateCost().toString()
	}
}
