import chalk from 'chalk'
import { IRoom } from '../interfaces/IRoom'
import { Player } from '../Player'
import { BattleRoomProps } from '../types/rooms/BattleRoomProps'
import { wait } from '../helpers/wait'
import { EnemyStatusPresenter } from '../presenters/EnemyStatusPresenter'

export class BattleRoom implements IRoom {
	private enemies

	constructor({ enemies }: BattleRoomProps) {
		this.enemies = enemies
	}

	public async enter(player: Player): Promise<void> {
		do {
			await this.handlePlayerTurn(player)
			await this.handleEnemiesTurns(player)
		} while (player.isAlive() && this.isSomeEnemyAlive())
	}

	private isSomeEnemyAlive(): boolean {
		return this.enemies.some((enemy) => enemy.isAlive())
	}

	public async handlePlayerTurn(player: Player): Promise<void> {
		console.log(chalk.inverse.bold('-= Player turn =-\n\n'))
      console.log(chalk.inverse.bold.red('-= Enemies:\n'))

      this.enemies.forEach((enemy, index) => {
         const presenter = new EnemyStatusPresenter(enemy)
         const presentation = presenter.present()

         console.log(`#${index + 1} | ${presentation}`) 
      })
      
      await wait(300000)
	}

	private async handleEnemiesTurns(player: Player): Promise<void> {
		this.enemies.forEach((enemy) => {
			console.log(`${enemy.getName().toUpperCase()} turn\n`)

			const actionResults = enemy.act(player)
			const actionMessages = actionResults.map((result) => result.toString())

			actionMessages.forEach((message) => {
				console.log(message + '\n')
			})
		})
	}
}
