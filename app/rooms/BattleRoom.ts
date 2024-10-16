import chalk from 'chalk'
import { IRoom } from '../interfaces/IRoom'
import { Player } from '../Player'
import { BattleRoomProps } from '../types/rooms/BattleRoomProps'
import { EnemyBattleStatusPresenter } from '../presenters/EnemyBattleStatusPresenter'
import { PlayerStatusPresenter } from '../presenters/PlayerStatusPresenter'
import { Enemy } from '../Enemy'
import DrawPile from '../piles/DrawPile'
import { UsedPile } from '../piles/UsedPile'
import { CardPresenter } from '../presenters/CardPresenter'

export class BattleRoom implements IRoom {
	private enemies: Enemy[]
	private drawPile: DrawPile
	private usedPile: UsedPile

	constructor({ enemies }: BattleRoomProps) {
		this.enemies = enemies
		this.drawPile = new DrawPile([])
		this.usedPile = new UsedPile([])
	}

	public async enter(player: Player): Promise<void> {
		do {

			this.handleCombatPreparations(player)

			await this.handlePlayerTurn(player)
			await this.handleEnemiesTurns(player)

		} while (player.isAlive() && this.isSomeEnemyAlive())
	}

	private handleCombatPreparations(player: Player): void {
		const deck = player.getDeck()
		const cards = deck.getCards()

		this.drawPile.unshift(...cards)
		this.drawPile.shuffle()
	}

	private isSomeEnemyAlive(): boolean {
		return this.enemies.some((enemy) => enemy.isAlive())
	}

	public async handlePlayerTurn(player: Player): Promise<void> {
		this.presentPlayerStatus(player)
		this.presentEnemiesStatuses()
		this.presentCardSelection()
	}

	private presentPlayerStatus(player: Player): void {
		console.log(chalk.inverse.bold(' = Your turn = \n'))
		console.log(PlayerStatusPresenter.format(player) + '\n')
	}

	private presentEnemiesStatuses(): void {
		const statusesPresentation = this.enemies.map((enemy, index) => {
			return `#${index + 1} | ${EnemyBattleStatusPresenter.format(enemy)}`
		})

		console.log(chalk.inverse.bold(' = Enemies = \n'))
		console.log(statusesPresentation.join('\n'))
	}

	private presentCardSelection(): void {
		const drawnCards = this.drawPile.draw(1)
		const cardsPresentation = drawnCards.map((card, index) => {
			return `#${index + 1} | ${CardPresenter.format(card)}`
		})
		
		console.log(chalk.inverse.bold('\n = Cards = \n'))
		console.log(cardsPresentation.join('\n'))
		
	}

	private async handleEnemiesTurns(player: Player): Promise<void> {
		this.enemies
			.filter((enemy) => enemy.isAlive())
			.forEach((enemy) => this.handleEachEnemyTurn(enemy, player))
	}

	private async handleEachEnemyTurn(enemy: Enemy, player: Player): Promise<void> {
		console.log(`${enemy.getName().toUpperCase()} turn\n`)

		const actionResults = enemy.act(player)
		const actionMessages = actionResults.map((result) =>
			result.toString()
		)

		actionMessages.forEach((message) => {
			console.log(message + '\n')
		})
	}
}
