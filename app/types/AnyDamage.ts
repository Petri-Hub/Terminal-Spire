import { StaticDamage } from '../damage/StaticDamage'
import { RandomDamage } from '../damage/RandomDamage'

export type AnyDamage = 
    StaticDamage |
    RandomDamage