import { Entity } from './Entity'
import { IBehavior } from './interfaces/IBehavior'
import { Player } from './Player'
import { EnemyProps } from './types/EnemyProps'

export class Enemy extends Entity {
	private behavior: IBehavior

	constructor({ behavior, ...props }: EnemyProps) {
		super(props)

		this.behavior = behavior
	}

	act(player: Player) {
		const action = this.behavior.getNextAction()
		const result = action.execute(this, player)

		return result
	}
}
