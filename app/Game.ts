import { Player } from "./Player";
import { PlayerTerminalIO } from "./PlayerTerminalIO";
import { Enemy } from './Enemy'

export class Game{
    constructor(
        private player: Player,
        private enemies: Enemy[],
    ){}

    loop(){
        this.handlePlayerTurn()        
    }

    handlePlayerTurn(){
        const hand = this.player.getDeck().drawCards(5)
        const card = PlayerTerminalIO.promptHandSelection(hand)
        
        console.log(card)

    }
}