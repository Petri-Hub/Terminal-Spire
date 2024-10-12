import { DamageAction } from '../actions/DamageAction'
import { DamageActionResult } from '../actions/results/DamageActionResult'
import { Damage } from '../damage/Damage'
import { Entity } from '../Entity'
import { CardProps } from '../types/CardProps'
import { Card } from './Card'

type DamageCardProps = CardProps & {
	damage: Damage
}

export class DamageCard extends Card {
	private damage: Damage

	constructor({ damage, ...props }: DamageCardProps) {
		super(props)

		this.damage = damage
	}

	public play(performer: Entity, ...targets: Entity[]): DamageActionResult[] {
		return targets.map((target) => {
         const action = new DamageAction(this.damage)
         const result = action.execute(performer, target)

         return result[0]
		})
	}
}
