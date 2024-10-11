import { IBehavior } from '../interfaces/IBehavior'
import { AnyAction } from '../types/AnyAction'

export class LoopBehavior implements IBehavior {
	private actions: AnyAction[]
	private current: number

	constructor(actions: AnyAction[]) {
		this.actions = actions
		this.current = -1
	}

	getNextAction(): AnyAction {
		this.current = (this.current + 1) % this.actions.length

		const action = this.actions[this.current]

		return action
	}
}
