import { Entity } from "../Entity"
import { AnyCost } from "../types/AnyCost"
import { CardProps } from "../types/CardProps"

export abstract class Card{

    protected id: string
    protected name: string
    protected description: string
    protected cost: AnyCost

    constructor({ id, name, description, cost }: CardProps){
        this.id = id
        this.name = name
        this.description = description
        this.cost = cost
    }

    abstract play(targets: Entity[]): void

    getId(): string {
        return this.id
    }

    getName(){
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    getCost(): number {
        return this.cost.calculateCost()
    }

    toString(): string {
        return `${this.name} | ${this.cost.getRepresentation()} energy`
    }
}