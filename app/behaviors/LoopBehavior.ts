import { IAction } from "../interfaces/IAction";
import { IBehavior } from "../interfaces/IBehavior";

export class LoopBehavior implements IBehavior{
    
    private actions: IAction[]
    private current: number

    constructor(actions: IAction[]){
        this.actions = actions
        this.current = -1
    }

    getNextAction(): IAction {
        this.current = (this.current + 1) % this.actions.length

        const action = this.actions[this.current]

        return action
    }
}