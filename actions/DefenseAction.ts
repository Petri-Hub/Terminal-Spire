import { IDefense } from "../interfaces/IDefense";
import { Action } from "./Action";
import { Entity } from "../Entity";

export class DefenseAction extends Action{

    private defense: IDefense

    constructor(targets: Entity[], defense: IDefense){
        super(targets)

        this.defense = defense
    }

    execute(): void {
        this.targets.forEach(target => {
            const defenseAmount = this.defense.calculateDefense()
            const targetDefense = target.getDefense()

            targetDefense.increaseBy(defenseAmount)
        })
    }
}