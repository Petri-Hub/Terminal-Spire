import { ICalculation } from "../interfaces/ICalculation";

export abstract class Defense<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    getDefense(): number {
        return this.calculation.calculate()
    }
}