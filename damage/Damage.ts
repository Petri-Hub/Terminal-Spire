import { ICalculation } from "../interfaces/ICalculation";

export abstract class Damage<T extends ICalculation>{
    constructor(
        protected calculation: T
    ){}

    calculateDamage(){
        return this.calculation.calculate()
    }
}