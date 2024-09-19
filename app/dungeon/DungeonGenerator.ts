import { Player } from "../Player"
import { Dungeon } from "./Dungeon"
import { FloorsGenerator } from "./FloorsGenerator"
import { DungeonGenerationOptions } from '../types/DungeonGenerationOptions'

export class DungeonGenerator{

    private floorsGenerator: FloorsGenerator
    private player: Player

    constructor({ floors, player }: DungeonGenerationOptions){
        this.player = player
        this.floorsGenerator = new FloorsGenerator(floors)
    }

    generate(): Dungeon {
        return new Dungeon(this.player, this.floorsGenerator.generate())
    }
}