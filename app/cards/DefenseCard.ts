import { Entity } from '../Entity'
import { AnyDefense } from '../types/AnyDefense'
import { CardProps } from '../types/ICardProps'
import { Card } from './Card'

type DefenseCardProps = {
	defense: AnyDefense
} & CardProps

export class DefenseCard extends Card {
	private defense: AnyDefense

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
