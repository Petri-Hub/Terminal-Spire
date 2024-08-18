import { IDamage } from "./damage/Damage"
import { ICost } from "./interfaces/ICost"
import { IDefense } from "./interfaces/IDefense"

export abstract class Card{
    constructor(
        private name: string,
        private cost: ICost,
        private damage: IDamage,
        private defense: IDefense
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