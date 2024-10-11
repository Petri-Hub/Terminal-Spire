import { Player } from '../../Player'

export type ChoiceRoomChoice = {
	text: string
	consequence: (player: Player) => void
}
