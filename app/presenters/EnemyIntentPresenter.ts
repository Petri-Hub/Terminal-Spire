import { DamageAction } from '../actions/DamageAction'
import { DefenseAction } from '../actions/DefenseAction'
import { IAction } from '../interfaces/IAction'
import { IPresenter } from '../interfaces/IPresenter'

export class EnemyIntentPresenter implements IPresenter {
	constructor(private action: IAction) {}

	public format(): string {
      if(this.action instanceof DamageAction){
         return `🗡️  Will attack next turn`
      }
      if(this.action instanceof DefenseAction){
         return `🛡️  Will defend next turn`
      }

      return `❓ Unknown action` 
   }
}
