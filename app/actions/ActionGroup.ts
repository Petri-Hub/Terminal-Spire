import { Entity } from "../Entity";
import { IAction } from "../interfaces/IAction";

export class ActionGroup implements IAction {
    constructor(
        private actions: IAction[]
    ){}

    execute(targets: Entity[]): void {
        this.actions.forEach((action) => {
            action.execute(targets)
        })
    }
}