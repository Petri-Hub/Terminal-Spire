import { StaticCalculation } from "../calculations/StaticCalculation";
import { IDefense } from "../interfaces/IDefense";

export class StaticDefense implements IDefense {

    private calculation: StaticCalculation

    constructor(value: number){
        this.calculation = new StaticCalculation(value)
    }

    calculateDefense(): number {
        return this.calculation.calculate()
    }
}