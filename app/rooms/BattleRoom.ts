import { Card } from "../cards/Card";
import { RandomCost } from "../cost/RandomCost";
import { StaticDamage } from "../damage/StaticDamage";
import { StaticDefense } from "../defense/StaticDefense";
import { Enemy } from "../Enemy";
import { IRoom } from "../interfaces/IRoom";
import { Player } from "../Player";
import { CardSelectionPrompt } from "../prompts/CardSelectionPrompt";

export class BattleRoom implements IRoom {
    constructor(
        private enemies: Enemy[]
    ){}

    enter(player: Player): void {
        do {

            this.handlePlayerTurn()
            // this.handleEnemiesTurns()

        } while(player.isAlive() && this.isSomeEnemyAlive())
    }

    private isSomeEnemyAlive(): boolean{
        return this.enemies.some(enemy => enemy.isAlive())
    }

    private handlePlayerTurn(){
    }
}