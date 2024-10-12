import chalk from "chalk";
import { IPresenter } from "../interfaces/IPresenter";
import { Player } from "../Player";

export class PlayerStatusPresenter implements IPresenter{
   constructor(private player: Player){}

   public format(): string {
      return [
         this.getHealthInformation(),
         this.getDefenseInformation(),
         this.getEnergyInformation()
      ].join('\n')
   }

   private getHealthInformation(): string {
      const healthBar = this.player.getHealth()
      const health = healthBar.getValue()
      const maxHealth = healthBar.getMax()

      return chalk.red(`${health}/${maxHealth}❤️`)
   }

   private getDefenseInformation(): string {
      const defenseBar = this.player.getDefense()
      const defense = defenseBar.getValue()
      const maxDefense = defenseBar.getMax()

      return chalk.blue(`${defense}/${maxDefense}🛡️`)
   }

   private getEnergyInformation(): string {
      const energyBar = this.player.getEnergy()
      const energy = energyBar.getValue()
      const maxEnergy = energyBar.getMax()
      
      return chalk.yellow(`${energy}/${maxEnergy}✴️`)
   }

   public static format(player: Player): string {
      return new PlayerStatusPresenter(player).format()
   }
}