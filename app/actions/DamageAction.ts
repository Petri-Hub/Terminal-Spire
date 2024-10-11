import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { AnyDamage } from '../types/AnyDamage'
import { DamageActionResult } from './results/DamageActionResult'

export class DamageAction implements IAction<DamageActionResult> {
	constructor(private damage: AnyDamage) {}

	execute(performer: Entity, ...targets: Entity[]) {
		return targets.map((target) => {
			const damageAmount = this.damage.calculateDamage()
			const targetHealth = target.getHealth()

			targetHealth.decreaseBy(damageAmount)

			return new DamageActionResult(performer, target, damageAmount)
		})
	}
}
