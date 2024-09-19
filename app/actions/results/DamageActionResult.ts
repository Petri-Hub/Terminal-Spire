import { Entity } from "../../Entity";
import { IActionResult } from "../../interfaces/IActionResult";

export class DamageActionResult implements IActionResult {
    constructor(
        private performer: Entity,
        private target: Entity,
        private value: number
    ) { }

    toString(): string {
        const performerName = this.performer.getName()
        const targetName = this.target.getName()
        const isPerfomerTheTarget = Entity.isSameEntities(this.performer, this.target)

        if (isPerfomerTheTarget) {
            return `${performerName} ataccked himself and dealt ${this.value} damage`
        }

        return `${performerName} attacked ${targetName} and dealt ${this.value} damage.`
    }
}