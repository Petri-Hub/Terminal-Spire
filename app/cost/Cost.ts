import { ICalculation } from "../interfaces/ICalculation"

export abstract class Cost<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    calculateCost(): number {
        return this.calculation.calculate()
    }
}