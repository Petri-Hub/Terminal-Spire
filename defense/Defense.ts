import { ICalculation } from "../interfaces/ICalculation";

export abstract class Defense<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    calculateDefense(): number {
        return this.calculation.calculate()
    }
}