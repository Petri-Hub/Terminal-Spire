import { Player } from "./Player";
import { PlayerTerminalIO } from "./PlayerTerminalIO";
import { Enemy } from './Enemy'

export class Game{
    constructor(
        private player: Player,
        private enemies: Enemy[],
    ){}

    loop(){
      
        if(this.isSomePlayerDead()){
            this.showGameFinishMessage()
            return
        }

        this.handlePlayerTurn()
        this.handleEnemiesTurn()
        
    }

    handlePlayerTurn(){
        const hand = this.player.getDeck().drawCards(5)
        const card = PlayerTerminalIO.promptHandSelection(hand)
        

    }

    handleEnemiesTurn(){
        
    }

    isSomePlayerDead(){
        return this.player.isDead() || this.opponent.isDead()
    }

    showGameFinishMessage(){
        const isPlayerWinner = this.opponent.isDead()

        if(isPlayerWinner){
            console.log('Você ganhou!')
        } else {
            console.log('Você perdeu!')
        }
    }
}