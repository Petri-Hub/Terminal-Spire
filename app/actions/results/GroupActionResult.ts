import { IActionResult } from '../../interfaces/IActionResult'

export class GroupActionResult implements IActionResult {
	constructor(private results: IActionResult[]) {}

	public toString(): string {
		const messages = this.results.map((result) => result.toString())
		const joinedMessags = messages.join('\n')

		return joinedMessags
	}
}
