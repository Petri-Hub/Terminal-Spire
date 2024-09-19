import { Enemy } from "../Enemy";
import { IRoom } from "../interfaces/IRoom";
import { Player } from "../Player";

export class BattleRoom implements IRoom {
    constructor(
        private enemies: Enemy[]
    ){}

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
            enemy.attack(player)
        })
    }
}