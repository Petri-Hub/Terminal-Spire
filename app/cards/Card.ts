import { Cost } from '../cost/Cost'
import { Entity } from '../Entity'
import { IActionResult } from '../interfaces/IActionResult'
import { CardProps } from '../types/CardProps'

export abstract class Card {
	protected id: string
	protected name: string
	protected description: string
	protected cost: Cost

	constructor({ id, name, description, cost }: CardProps) {
		this.id = id
		this.name = name
		this.description = description
		this.cost = cost
	}

	abstract play(performer: Entity, ...targets: Entity[]): IActionResult[]

	public getId(): string {
		return this.id
	}

	public getName(): string {
		return this.name
	}

	public getDescription(): string {
		return this.description
	}

	public getCost(): number {
		return this.cost.calculateCost()
	}
}
