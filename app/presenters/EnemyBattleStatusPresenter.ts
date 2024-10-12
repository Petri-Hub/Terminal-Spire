import chalk from 'chalk'
import { Enemy } from '../Enemy'
import { IPresenter } from '../interfaces/IPresenter'
import { EnemyIntentPresenter } from './EnemyIntentPresenter'

export class EnemyBattleStatusPresenter implements IPresenter {
	constructor(private enemy: Enemy) {}

	public format(): string {
      const about = this.getAboutInformation()
      const healthStatus = this.getHealthStatus() 
      const defenseStatus = this.getDefenseStatus()
      const intentStatus = this.getIntentStatus()

		return `${about} | ${healthStatus}  | ${defenseStatus} | ${intentStatus}`
	}

   private getAboutInformation(): string {
      return chalk.bold.yellow(this.enemy.getName())
   }

   private getHealthStatus(): string {
      const health = this.enemy.getHealth().getValue()
		const maxHealth = this.enemy.getHealth().getMax()

      return chalk.red(`${health}/${maxHealth}❤️`)
   }

   private getDefenseStatus(): string {
      const defense = this.enemy.getDefense().getValue()

      return chalk.blue(`${defense}🛡️`)
   }

   private getIntentStatus(): string {
      const intent = this.enemy.getNextAction()
      const presenter = new EnemyIntentPresenter(intent)

      return presenter.format()
   }

   public static format(enemy: Enemy): string {
      return new EnemyBattleStatusPresenter(enemy).format()
   }
}
