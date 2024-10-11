import { Entity } from '../../Entity'
import { IActionResult } from '../../interfaces/IActionResult'

export class DefenseActionResult implements IActionResult {
	constructor(
		private performer: Entity,
		private target: Entity,
		private value: number
	) {}

	toString() {
		const performerName = this.performer.getName()
		const targetName = this.target.getName()
		const isPerfomerTheTarget = Entity.isSameEntities(
			this.performer,
			this.target
		)

		if (isPerfomerTheTarget) {
			return `${performerName} defended himself with ${this.value} shield`
		} else {
			return `${performerName} defended ${targetName} with ${this.value} shield`
		}
	}
}
