import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { AnyDefense } from '../types/AnyDefense'
import { DefenseActionResult } from './results/DefenseActionResult'

export class DefenseAction implements IAction {
	constructor(private defense: AnyDefense) {}

	public execute(performer: Entity, ...targets: Entity[]): DefenseActionResult[] {
		return targets.map((target) => {
			const targetDefense = target.getDefense()
			const defenseAmount = this.defense.calculateDefense()

         targetDefense.increaseBy(defenseAmount)

			return new DefenseActionResult(performer, target, defenseAmount)
		})
	}
}
