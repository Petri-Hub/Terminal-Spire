import { AnyCost } from "../types/AnyCost"

type CardProps = {
    id: string,
    name: string,
    description: string,
    cost: AnyCost
}

export abstract class Card{

    private id: string
    private name: string
    private description: string
    private cost: AnyCost

    constructor({ id, name, description, cost }: CardProps){
        this.id = id
        this.name = name
        this.description = description
        this.cost = cost
    }

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
        return this.cost.getCost()
    }

    toString(): string {
        return `${this.name} | ${this.cost.getRepresentation()} energy`
    }
}