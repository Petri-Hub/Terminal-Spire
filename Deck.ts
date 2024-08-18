import { Card } from "./Card";

export class Deck{
    
    private cards: readonly Card[]
    
    constructor(cards: Card[]){
        this.cards = cards
    }

    getCards(){
        return this.cards
    }

    getCardsAmount(){
        return this.cards.length
    }

    getRandomCard(){
        const cardsAmount = this.getCardsAmount()
        const randomIndex = Math.floor(Math.random() * cardsAmount)

        return this.getCards()[randomIndex]
    }

    drawCards(amount: number){
        const drawn: Card[] = []

        while(drawn.length < amount){
            drawn.push(this.getRandomCard())
        }

        return drawn
    }
}