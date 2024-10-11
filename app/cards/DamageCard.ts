import { Damage } from '../damage/Damage'
import { Entity } from '../Entity'
import { CardProps } from '../types/ICardProps'
import { Card } from './Card'

type DamageCardProps = {
	damage: Damage
} & CardProps

export class DamageCard extends Card {
	private damage: Damage

	constructor({ damage, ...props }: DamageCardProps) {
		super(props)

		this.damage = damage
	}

	play(targets: Entity[]) {
		targets.forEach((target) => {
			const damageAmount = this.damage.calculateDamage()
			const targetHealth = target.getHealth()

			targetHealth.decreaseBy(damageAmount)
		})
	}
}
