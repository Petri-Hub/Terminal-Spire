import { RandomCost } from '../cost/RandomCost'
import { StaticCost } from '../cost/StaticCost'

export type AnyCost = StaticCost | RandomCost
