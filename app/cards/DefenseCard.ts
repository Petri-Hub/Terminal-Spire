import { DefenseAction } from '../actions/DefenseAction'
import { DefenseActionResult } from '../actions/results/DefenseActionResult'
import { Defense } from '../defense/Defense'
import { Entity } from '../Entity'
import { CardProps } from '../types/CardProps'
import { Card } from './Card'

type DefenseCardProps = CardProps & {
	defense: Defense
}

export class DefenseCard extends Card {
	private defense: Defense

	constructor({ defense, ...props }: DefenseCardProps) {
		super(props)

		this.defense = defense
	}

	public play(performer: Entity, ...targets: Entity[]): DefenseActionResult[] {
		return targets.map((target) => {
         const action = new DefenseAction(this.defense)
         const result = action.execute(performer, target)
			
         return result[0]
		})
	}
}
