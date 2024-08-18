import { AnyDamage } from "./types/AnyDamage"
import { AnyDefense } from "./types/AnyDefense"
import { AnyCost } from "./types/AnyCost"

export abstract class Card{
    constructor(
        private name: string,
        private cost: AnyCost,
        private damage: AnyDamage,
        private defense: AnyDefense
    ){}

    getName(){
        return this.name
    }

    getDamage(): number {
        return this.damage.calculateDamage()
    }

    getDefense(): number {
        return this.defense.calculateDefense()
    }    

    getCost(): number {
        return this.cost.calculateCost()
    }
}