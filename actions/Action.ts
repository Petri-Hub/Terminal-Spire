import { Player } from '../Player'
import { Enemy } from '../Enemy'
import { Entity } from '../Entity'

export abstract class Action{
    protected targets: Entity[]

    constructor(targets: Entity[]){
        this.targets = targets
    }

    abstract execute(): void
}