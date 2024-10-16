import { GameDifficultyPrompt } from './prompts/initialization/GameDifficultySelectionPrompt'
import { InitialGameScreenPrompt } from './prompts/initialization/InitialGameScreenPrompt'

export class Game {
	public start(): void {
		new InitialGameScreenPrompt().show()
		new GameDifficultyPrompt().show()
	}
}
