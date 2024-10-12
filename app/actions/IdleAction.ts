import { Entity } from '../Entity'
import { IAction } from '../interfaces/IAction'
import { IActionResult } from '../interfaces/IActionResult'
import { IdleActionResult } from './results/IdleActionResult'

export class IdleAction implements IAction {
	execute(performer: Entity, ...targets: Entity[]): IActionResult[] {
      return targets.map(target => {
         return new IdleActionResult(performer, target)
      })
   }
}
