import { ICalculation } from '../interfaces/ICalculation'

export abstract class Defense {
	constructor(protected calculation: ICalculation) {}

	calculateDefense(): number {
		return this.calculation.calculate()
	}
}
