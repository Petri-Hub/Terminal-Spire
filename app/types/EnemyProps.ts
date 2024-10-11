import { IBehavior } from '../interfaces/IBehavior'
import { EntityProps } from './EntityProps'

export type EnemyProps = EntityProps & {
	behavior: IBehavior
}
