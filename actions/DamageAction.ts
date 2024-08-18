import { Entity } from "../Entity"
import { IAction } from "../interfaces/IAction"
import { AnyDamage } from "../types/AnyDamage"

export class DamageAction implements IAction{
    constructor(
        private damage: AnyDamage
    ){}

    execute(targets: Entity[]): void {
        targets.forEach(entity => {
            const damageAmount = this.damage.calculateDamage()
            const targetHealth = entity.getHealth()

            targetHealth.decreaseBy(damageAmount)
        })
    }
}