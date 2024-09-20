import chalk from "chalk";
import { ITerminalPrompt } from "../../interfaces/ITerminalPrompt";
import readline from 'readline-sync'
import { difficulties } from "../../resources/difficulties";

export class GameDifficultyPrompt implements ITerminalPrompt<void, string>{
    show(): string {

        console.clear()
        console.log(chalk.bold.white('Select your preffered difficulty:\n'))
        
        const options = difficulties.map(option => {
            return option.chalk(option.title)
        })

        const index = readline.keyInSelect([
            ...options
        ])        

        return 
    }
}