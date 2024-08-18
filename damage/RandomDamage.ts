import { RandomCalculation } from "../calculations/RandomCalculation";
import { Damage } from "./Damage";

export class RandomDamage extends Damage<RandomCalculation>{
    constructor(min: number, max: number){
        super(new RandomCalculation(min, max))
    }
}