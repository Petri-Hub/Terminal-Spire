import { DamageCard } from "./cards/DamageCard"
import { StaticCost } from "./cost/StaticCost"
import { StaticDamage } from "./damage/StaticDamage"
import DrawPile from "./DrawPile"

describe('DrawPile module', () => {
    test('should return no cards when the draw pile is empty', () => {
        const drawPile = new DrawPile([])
        const drawn = drawPile.draw(200)

        expect(drawn.length).toBe(0)
    })

    test('should return remaining cards when draw amount is bigger than available amount', () => {
        const CARDS_IN_DRAW_PILE = 3
        const CARDS_DRAW_AMOUNT = 5
        
        const cards = Array(CARDS_IN_DRAW_PILE).map(() => new DamageCard({
            cost: new StaticCost(1),
            damage: new StaticDamage(1),
            description: '',
            id: crypto.randomUUID(),
            name: 'Test card'
        }))
        
        const drawPile = new DrawPile(cards)
        const drawn = drawPile.draw(CARDS_DRAW_AMOUNT)        

        expect(drawn.length).toBe(CARDS_IN_DRAW_PILE)
    })
})