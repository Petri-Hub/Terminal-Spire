import { Entity } from '../Entity'
import { IActionResult } from './IActionResult'

export interface IAction {
	execute(performer: Entity, ...targets: Entity[]): IActionResult[]
}
