import { DamageAction } from '../actions/DamageAction'
import { DefenseAction } from '../actions/DefenseAction'
import { IAction } from '../interfaces/IAction'
import { IPresenter } from '../interfaces/IPresenter'

export class EnemyIntentPresenter implements IPresenter {
	constructor(private action: IAction) {}

	public format(): string {
		if (this.action instanceof DamageAction) {
			return `🗡️  Will attack for ${this.action.getDamageRepresentation()} next turn`
		}
		if (this.action instanceof DefenseAction) {
			return `🛡️  Will defend next turn`
		}

		return `❓ Unknown action`
	}

	public static format(action: IAction): string {
		return new EnemyIntentPresenter(action).format()
	}
}
