import chalk from "chalk";
import { ITerminalPrompt } from "../../interfaces/ITerminalPrompt";
import { gameTitleASCII } from "../../art/gameTitleASCII";
import readline from 'readline-sync'

export class InitialGameScreenPrompt implements ITerminalPrompt<void, void> {
    async show() {
        console.clear()
        console.log(chalk.bold.magenta(gameTitleASCII))
        readline.keyIn('\t\t\tPress any key to start', {
            hideEchoBack: true,
            mask: "",
            prompt: ""
        })
    }
}