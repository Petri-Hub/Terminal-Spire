import { ICalculation } from "../interfaces/ICalculation";

export abstract class Damage<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    calculateDamage(): number {
        return this.calculation.calculate()
    }
}