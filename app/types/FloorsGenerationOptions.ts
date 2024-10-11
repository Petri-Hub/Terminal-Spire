import { IRoom } from '../interfaces/IRoom'

export type FloorsGenerationOptions = {
	rooms: [IRoom, ...IRoom[]]
	choices: number
	amount: number
}
