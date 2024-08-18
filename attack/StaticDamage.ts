import { StaticCalculation } from "../calculations/StaticCalculation";
import { IDamage } from './IDamage'

export class StaticDamage implements IDamage {

    private calculation: StaticCalculation

    constructor(value: number){
        this.calculation = new StaticCalculation(value)
    }

    calculateDamage(): number {
        return this.calculation.calculate()
    }
}