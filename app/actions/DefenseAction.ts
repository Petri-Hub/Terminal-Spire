import { Defense } from '../defense/Defense'
import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { DefenseActionResult } from './results/DefenseActionResult'

export class DefenseAction implements IAction {
	constructor(private defense: Defense) {}

	public execute(performer: Entity, ...targets: Entity[]): DefenseActionResult[] {
		return targets.map((target) => {
			const targetDefense = target.getDefense()
			const defenseAmount = this.defense.calculateDefense()

         targetDefense.increaseBy(defenseAmount)

			return new DefenseActionResult(performer, target, defenseAmount)
		})
	}

   public getDefenseRepresentation(): string {
      return this.defense.getRepresentation()
   }
}
