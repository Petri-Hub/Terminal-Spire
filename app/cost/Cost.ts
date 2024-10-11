import { ICalculation } from '../interfaces/ICalculation'

export abstract class Cost {
	constructor(protected calculation: ICalculation) {}

	abstract getRepresentation(): string

	public calculateCost(): number {
		return this.calculation.calculate()
	}
}
