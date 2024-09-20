import { IRoom } from "../interfaces/IRoom";
import chalk from "chalk";
import { ChoiceRoomProps } from "../types/rooms/ChoiceRoomProps";
import readline from 'readline-sync'
import { Player } from "../Player";

export class ChoiceRoom implements IRoom {

    private title
    private message
    private choices

    constructor({ title, message, choices = [] }: ChoiceRoomProps) {
        this.title = title
        this.message = message
        this.choices = choices
    }

    public enter(player: Player): void {
        console.clear()

        this.printDialog()

        const index = this.promptChoice() 
        const choice = this.choices[index]
        
        choice.consequence(player)
    }

    private printDialog(): void {
        console.log(chalk.bold.inverse(`-= ${this.title} =-`))
        console.log()
        console.log(chalk.dim.white(this.message))    
    }

    private promptChoice(): number {
        return readline.keyInSelect(this.getChoicesAsText(), '', {
            cancel: false,
            guide: false
        })
    }

    private getChoicesAsText(): string[] {
        return this.choices.map(choice => {
            return choice.text
        })
    }
}