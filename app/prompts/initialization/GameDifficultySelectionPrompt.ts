import chalk from 'chalk'
import { ITerminalPrompt } from '../../interfaces/ITerminalPrompt'
import readline from 'readline-sync'
import { difficulties } from '../../resources/difficulties'
import { Difficulty } from '../../types/Difficulty'

export class GameDifficultyPrompt implements ITerminalPrompt<void, Difficulty> {
	public show(): Difficulty {
		console.clear()
		console.log(chalk.bold.white('Select your preffered difficulty:\n'))

		const options = difficulties.map((option) => {
			return option.chalk(option.name)
		})

		const index = readline.keyInSelect([...options])

		return difficulties[index]
	}
}
