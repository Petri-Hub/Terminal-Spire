import chalk from 'chalk'
import { IRoom } from '../interfaces/IRoom'

export default class ShopRoom implements IRoom {
	public enter(): void {
		console.log(chalk.bold.white('You entered the shop room!'))
	}
}
