import { Entity } from '../../Entity'
import { IActionResult } from '../../interfaces/IActionResult'

export class IdleActionResult implements IActionResult {
	constructor(
		private performer: Entity,
		private target: Entity
	) {}

	public toString(): string {
		return `${this.performer.getName()} did nothing to ${this.target.getName()}`
	}
}
