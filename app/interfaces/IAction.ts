import { Entity } from '../Entity'

export interface IAction{
    execute(targets: Entity[]): void
}