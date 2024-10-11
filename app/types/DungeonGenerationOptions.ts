import { Player } from '../Player'
import { FloorsGenerationOptions } from './FloorsGenerationOptions'

export type DungeonGenerationOptions = {
	floors: FloorsGenerationOptions
	player: Player
}
