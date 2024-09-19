import { Entity } from "../Entity";
import { IAction } from "../interfaces/IAction";
import { AnyAction } from "../types/AnyAction";
import { GroupActionResult } from "./results/GroupActionResult";

export class ActionGroup implements IAction<GroupActionResult> {
    constructor(
        private actions: AnyAction[]
    ) { }

    execute(performer: Entity, ...targets: Entity[]): GroupActionResult[] {
        return targets.map(target => {
            const results = this.actions.map(action => {
                return action.execute(performer, target)
            })

            return new GroupActionResult(results)
        })
    }
}