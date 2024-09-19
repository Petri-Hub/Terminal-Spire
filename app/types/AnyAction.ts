import { ActionGroup } from "../actions/ActionGroup";
import { DamageAction } from "../actions/DamageAction";
import { DefenseAction } from "../actions/DefenseAction";

export type AnyAction = 
    ActionGroup |
    DamageAction |
    DefenseAction