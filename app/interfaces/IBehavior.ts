import { AnyAction } from "../types/AnyAction";

export interface IBehavior{
    getNextAction(): AnyAction
}
