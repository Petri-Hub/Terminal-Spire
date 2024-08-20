import { IBehavior } from "../interfaces/IBehavior"
import { IEntityProps } from "./IEntityProps"

export type IEnemyProps = {
    behavior: IBehavior
} & IEntityProps