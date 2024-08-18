import { Card } from "./Card";
import PlayableCard from "./PlayableCard";

export abstract class PlayerTerminalIO {
    static promptHandSelection(hand: Card[]): Card {
        console.log('Escolha uma carta para jogar (N):')

        hand.forEach((card, index) => {
            console.log(`${index} - ${card.getName()}`)
        })

        const input = prompt('Número da carta:')
        const index = Number(String(input ?? "-1"))
        const card = hand[index]

        if(!card){
            console.clear()
            console.log('Número de carta inválida! Selecione novamente')
            
            return PlayerTerminalIO.promptHandSelection(hand)
        }

        return card
    }
}