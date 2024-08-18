import { Action } from "./Action"
import { IDamage } from "../interfaces/IDamage";
import { Entity } from "../Entity";

export class DamageAction extends Action{

    private damage: IDamage

    constructor(targets: Entity[], damage: IDamage){
        super(targets)

        this.damage = damage
    }

    execute(){
        this.targets.forEach(target => {
            const damageAmount = this.damage.calculateDamage()
            const targetHealth = target.getHealth()

            targetHealth.decreaseBy(damageAmount)
        })
    }
}