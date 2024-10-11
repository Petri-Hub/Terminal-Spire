import { Defense } from '../defense/Defense'
import { Entity } from '../Entity'
import { CardProps } from '../types/ICardProps'
import { Card } from './Card'

type DefenseCardProps = {
	defense: Defense
} & CardProps

export class DefenseCard extends Card {
	private defense: Defense

	constructor({ defense, ...props }: DefenseCardProps) {
		super(props)

		this.defense = defense
	}

	play(targets: Entity[]) {
		targets.forEach((target) => {
			const defenseAmount = this.defense.calculateDefense()
			const targetDefense = target.getDefense()

			targetDefense.increaseBy(defenseAmount)
		})
	}
}
