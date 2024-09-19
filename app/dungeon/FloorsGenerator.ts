import { RandomCalculation } from "../calculations/RandomCalculation";
import { IRoom } from "../interfaces/IRoom";
import { FloorsGenerationOptions } from "../types/FloorsGenerationOptions";

export class FloorsGenerator {

    private amount: number
    private choices: number
    private rooms: [IRoom, ...IRoom[]]

    constructor({ amount, choices, rooms }: FloorsGenerationOptions) {
        this.amount = amount
        this.choices = choices
        this.rooms = rooms
    }

    public generate(): IRoom[][] {
        const floors: IRoom[][] = []

        for (let i = 0; i < this.amount; i++) {
            floors[i] = []

            for (let j = 0; j < this.choices; j++) {
                floors[i][j] = this.pickRandomRoom()
            }
        }

        return floors
    }

    private pickRandomRoom(): IRoom {
        if (this.rooms.length === 1) {
            return this.rooms[0]
        }

        const randomIndex = new RandomCalculation(0, this.amount - 1).calculate()
        const randomRoom = this.rooms[randomIndex]

        return randomRoom
    }
}