import { NumberBar } from "./NumberBar"
import { IEntityProps } from "./types/IEntityProps"

export abstract class Entity {

    protected id: string
    protected name: string
    protected health: NumberBar
    protected defense: NumberBar

    constructor({ id, name, health, defense }: IEntityProps) {
        this.id = id
        this.name = name
        this.health = health
        this.defense = defense
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }
    
    public getHealth(): NumberBar {
        return this.health
    }

    public getDefense(): NumberBar {
        return this.defense
    }

    public isAlive(): boolean {
        return this.health.getValue() > 0
    }

    public static isSameEntities(...entities: Entity[]){
        const entityIds = entities.map(entity => entity.getId())
        const uniqueIds = new Set(entityIds)
        const isSameEntities = uniqueIds.size === 1

        return isSameEntities
    }
}