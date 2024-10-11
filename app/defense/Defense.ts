import { ICalculation } from '../interfaces/ICalculation'

export abstract class Defense {
	constructor(protected calculation: ICalculation) {}

	abstract getRepresentation(): string

	public calculateDefense(): number {
		return this.calculation.calculate()
	}
}
