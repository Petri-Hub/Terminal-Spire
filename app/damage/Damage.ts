import { ICalculation } from '../interfaces/ICalculation'

export abstract class Damage {
	constructor(protected calculation: ICalculation) {}

	abstract getRepresentation(): string

	public calculateDamage(): number {
		return this.calculation.calculate()
	}
}
