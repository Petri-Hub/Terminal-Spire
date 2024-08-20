import { DamageAction } from '../actions/DamageAction'
import { LoopBehavior } from '../behaviors/LoopBehavior'
import { RandomDamage } from '../damage/RandomDamage'
import { StaticDamage } from '../damage/StaticDamage'
import { NumberBar } from '../NumberBar'
import { IEnemyProps } from '../types/IEnemyProps'

export const enemies: IEnemyProps[] = [
    {
        name: "Goblin",
        id: crypto.randomUUID(),
        defense: new NumberBar(0, 5),
        health: new NumberBar(5, 5),
        behavior: new LoopBehavior([
            new DamageAction(new RandomDamage(1, 3)),
            new DamageAction(new RandomDamage(1, 3)),
            new DamageAction(new StaticDamage(3))
        ])
    }
]