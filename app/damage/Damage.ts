import { ICalculation } from '../interfaces/ICalculation'

export abstract class Damage<T extends ICalculation> {
	constructor(protected calculation: T) {}

	abstract getRepresentation(): string

	calculateDamage(): number {
		return this.calculation.calculate()
	}
}
