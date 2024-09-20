import { Enemy } from "../Enemy";
import { IRoom } from "../interfaces/IRoom";
import { Player } from "../Player";
import { BattleRoomProps } from "../types/rooms/BattleRoomProps";

export class BattleRoom implements IRoom {

    private enemies

    constructor({ enemies }: BattleRoomProps){
        this.enemies = enemies
    }

    enter(player: Player): void {
        do {

            this.handleEnemiesTurns(player)

        } while(player.isAlive() && this.isSomeEnemyAlive())
    }

    private isSomeEnemyAlive(): boolean{        
        return this.enemies.some(enemy => enemy.isAlive())
    }

    private handleEnemiesTurns(player: Player){
        this.enemies.forEach(enemy => {
            console.log(`${enemy.getName().toUpperCase()} turn\n`)

            const actionResults = enemy.act(player)
            const actionMessages = actionResults.map(result => result.toString())

            actionMessages.forEach(message => {
                console.log(message + '\n')
            })
        })
    }
}