import { StaticCalculation } from '../calculations/StaticCalculation'
import { Defense } from './Defense'

export class StaticDefense extends Defense {
	constructor(value: number) {
		super(new StaticCalculation(value))
	}

   public getRepresentation(): string {
      return this.calculateDefense().toString()
   }
}
