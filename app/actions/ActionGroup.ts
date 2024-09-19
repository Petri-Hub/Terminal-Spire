import { Entity } from "../Entity";
import { IAction } from "../interfaces/IAction";
import { AnyAction } from "../types/AnyAction";
import { GroupActionResult } from "./results/GroupActionResult";

export class ActionGroup implements IAction<GroupActionResult> {
    constructor(
        private actions: AnyAction[]
    ) { }

    execute(performer: Entity, ...targets: Entity[]) {
        return targets
            .map(target => this.actions.map(action => action.execute(performer, target)))
            .map(results => new GroupActionResult(results))
    }
}