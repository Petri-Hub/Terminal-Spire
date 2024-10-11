import { IAction } from './IAction'

export interface IBehavior {
	getNextAction(): IAction
   changeToNextAction(): void
}
