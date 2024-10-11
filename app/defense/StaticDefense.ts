import { StaticCalculation } from '../calculations/StaticCalculation'
import { Defense } from './Defense'

export class StaticDefense extends Defense<StaticCalculation> {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}
}
