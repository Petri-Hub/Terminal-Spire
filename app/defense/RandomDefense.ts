import { RandomCalculation } from "../calculations/RandomCalculation";
import { Defense } from "./Defense";

export class RandomDefense extends Defense<RandomCalculation>{
    constructor(min: number, max: number){
        super(new RandomCalculation(min, max))
    }
}