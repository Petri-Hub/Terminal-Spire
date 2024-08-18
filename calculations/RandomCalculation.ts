import { ICalculation } from "../interfaces/ICalculation";

export class RandomCalculation implements ICalculation{
    constructor(
        private min: number,
        private max: number
    ){}

    calculate(): number {
        const range = this.min - this.max
        const value = Math.round(Math.random() * range)
        const random = value + this.min

        return random
    }
}