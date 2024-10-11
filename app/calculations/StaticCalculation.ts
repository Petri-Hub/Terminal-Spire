import { ICalculation } from '../interfaces/ICalculation'

export class StaticCalculation implements ICalculation {
	constructor(private value: number) {}

	calculate(): number {
		return this.value
	}
}
