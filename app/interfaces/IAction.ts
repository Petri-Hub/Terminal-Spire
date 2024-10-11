import { Entity } from '../Entity'
import { IActionResult } from './IActionResult'

export interface IAction<T extends IActionResult> {
	execute(performer: Entity, ...targets: Entity[]): T[]
}
