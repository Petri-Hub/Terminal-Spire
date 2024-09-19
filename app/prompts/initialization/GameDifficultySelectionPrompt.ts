import chalk from "chalk";
import { ITerminalPrompt } from "../../interfaces/ITerminalPrompt";
import readline from 'readline-sync'

export class GameDifficultyPrompt implements ITerminalPrompt<void, string>{
    show(): string {
        console.clear()
        console.log(chalk.bold.white('Select your preffered difficulty:\n'))
        
        const index = readline.keyInSelect([
            chalk.green('Easy'),
            chalk.yellow('Normal'),
            chalk.red('Hard')
        ])

        return ''
    }
}