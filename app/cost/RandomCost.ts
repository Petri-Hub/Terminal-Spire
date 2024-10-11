import { RandomCalculation } from '../calculations/RandomCalculation'
import { Cost } from './Cost'

export class RandomCost extends Cost {
	constructor(min: number, max: number) {
		super(new RandomCalculation(min, max))
	}

	public getRepresentation(): string {
		return '?'
	}
}
