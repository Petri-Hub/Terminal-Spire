import { Card } from "../cards/Card";
import { ITerminalPrompt } from "../interfaces/ITerminalPrompt";

export class CardSelectionPrompt implements ITerminalPrompt<Card[], void>{
    constructor(
        private title: string = 'Choose a void:'
    ){}

    show(cards: Card[]): void {
        console.log(this.title)
        console.log('\n')
        console.log('\n')
        cards.forEach((card, index) => {
            console.log(`${index} - ${card.toString()}`)
        })

    }
}