import { RandomCalculation } from '../calculations/RandomCalculation'
import { Cost } from './Cost'

export class RandomCost extends Cost<RandomCalculation> {
	constructor(min: number, max: number) {
		super(new RandomCalculation(min, max))
	}

	getRepresentation(): string {
		return '?'
	}
}
