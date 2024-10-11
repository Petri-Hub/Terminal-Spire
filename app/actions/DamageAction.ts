import { Damage } from '../damage/Damage'
import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { DamageActionResult } from './results/DamageActionResult'

export class DamageAction implements IAction {
	constructor(private damage: Damage) {}

	public execute(performer: Entity, ...targets: Entity[]): DamageActionResult[] {
		return targets.map((target) => {
			const damageAmount = this.damage.calculateDamage()
			const targetHealth = target.getHealth()

			targetHealth.decreaseBy(damageAmount)

			return new DamageActionResult(performer, target, damageAmount)
		})
	}
}
