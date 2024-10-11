import { Entity } from './Entity'
import { IBehavior } from './interfaces/IBehavior'
import { Player } from './Player'
import { AnyAction } from './types/AnyAction'
import { IEnemyProps } from './types/IEnemyProps'

export class Enemy extends Entity {
	private behavior: IBehavior

	constructor({ behavior, ...props }: IEnemyProps) {
		super(props)

		this.behavior = behavior
	}

	act(player: Player) {
		const action = this.behavior.getNextAction()
		const result = action.execute(this, player)

		return result
	}
}
