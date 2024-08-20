import { ICalculation } from "../interfaces/ICalculation"

export abstract class Cost<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    abstract getRepresentation(): string

    getCost(): number {
        return this.calculation.calculate()
    }
}