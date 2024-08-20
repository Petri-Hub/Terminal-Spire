import { IAction } from "../interfaces/IAction";
import { Entity } from "../Entity";
import { AnyDefense } from "../types/AnyDefense";

export class DefenseAction implements IAction{
    constructor(
        private defense: AnyDefense
    ){}

    execute(targets: Entity[]): void {
        targets.forEach(entity => {
            const defenseAmount = this.defense.getDefense()
            const targetDefense = entity.getDefense()

            targetDefense.increaseBy(defenseAmount)
        })
    }
}