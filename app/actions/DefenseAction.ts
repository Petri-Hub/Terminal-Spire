import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { AnyDefense } from '../types/AnyDefense'
import { DefenseActionResult } from './results/DefenseActionResult'

export class DefenseAction implements IAction<DefenseActionResult> {
	constructor(private defense: AnyDefense) {}

	execute(performer: Entity, ...targets: Entity[]) {
		return targets.map((target) => {
			const targetDefense = target.getDefense()
			const defenseAmount = this.defense.calculateDefense()

			return new DefenseActionResult(performer, target, defenseAmount)
		})
	}
}
