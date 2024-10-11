import { IRoom } from '../interfaces/IRoom'
import { Player } from '../Player'

export class Dungeon {
	constructor(
		private player: Player,
		private floors: IRoom[][]
	) {}
}
