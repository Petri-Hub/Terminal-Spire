import { Player } from '../Player'

export interface IRoom {
	enter(player: Player): void
}
