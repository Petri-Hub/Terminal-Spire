import { Player } from '../Player'
import { FloorsGenerationOptions } from '../types/FloorsGenerationOptions'
import { Dungeon } from './Dungeon'
import { FloorsGenerator } from './FloorsGenerator'

type DungeonGenerationOptions = {
	floors: FloorsGenerationOptions
	player: Player
}

export class DungeonGenerator {
	private floorsGenerator: FloorsGenerator
	private player: Player

	constructor({ floors, player }: DungeonGenerationOptions) {
		this.player = player
		this.floorsGenerator = new FloorsGenerator(floors)
	}

	generate(): Dungeon {
		return new Dungeon(this.player, this.floorsGenerator.generate())
	}
}
