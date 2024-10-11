import { Entity } from './Entity'
import { IActionResult } from './interfaces/IActionResult'
import { IBehavior } from './interfaces/IBehavior'
import { Player } from './Player'
import { EnemyProps } from './types/EnemyProps'

export class Enemy extends Entity {
	private behavior: IBehavior

	constructor({ behavior, ...props }: EnemyProps) {
		super(props)

		this.behavior = behavior
	}

	public act(player: Player): IActionResult {
		const action = this.behavior.getNextAction()
		const result = action.execute(this, player)

		return result
	}
}
