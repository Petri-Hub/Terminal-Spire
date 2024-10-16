import chalk from "chalk";
import { Card } from "../cards/Card";
import { IPresenter } from "../interfaces/IPresenter";

export class CardPresenter implements IPresenter {
    constructor(private card: Card) { }

    public format(): string {
        const costInfo = this.getCardCostInformation()
        const name = chalk.bold(this.card.getName())
        const description = chalk.dim(this.card.getDescription())

        return `${costInfo}  | ${name} | ${description}`
    }

    private getCardCostInformation(): string {
        return chalk.yellow.bold(`${this.card.getCost()}✴️`)
    }

    public static format(card: Card) {
        return new CardPresenter(card).format()
    }
}