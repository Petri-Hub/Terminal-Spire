import { StaticDamage } from '../attack/StaticDamage'
import { StaticDefense } from '../defense/StaticDefense'

export const enemies = [
    {
        behavior: [
            new StaticDamage(5),
            new StaticDamage(5),
            new StaticDefense(5)
        ]
    }
]