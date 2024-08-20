import { Entity } from "../Entity";
import { AnyDamage } from "../types/AnyDamage";
import { CardProps } from "../types/ICardProps";
import { Card } from "./Card";

type DamageCardProps = {
    damage: AnyDamage
} & CardProps

export class DamageCard extends Card{

    private damage: AnyDamage

    constructor({ damage, ...props }: DamageCardProps){
        super(props)

        this.damage = damage
    }

    play(targets: Entity[]){
        targets.forEach(target => {
            const damageAmount = this.damage.calculateDamage()
            const targetHealth = target.getHealth()

            targetHealth.decreaseBy(damageAmount)
        })
    }
}