import { IAction } from '../interfaces/IAction'
import { IBehavior } from '../interfaces/IBehavior'

export class LoopBehavior implements IBehavior {
	private actions: [IAction, ...IAction[]]
	private current: number

	constructor(actions: [IAction, ...IAction[]]) {
		this.actions = actions
		this.current = 0
	}

	public getNextAction(): IAction {
		const action = this.actions[this.current]

		return action
	}

   public changeToNextAction(): void {
		this.current = (this.current + 1) % this.actions.length
   }
}
