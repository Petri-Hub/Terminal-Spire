import chalk, { ChalkInstance } from 'chalk'
import { Difficulty } from '../types/Difficulty'

export const difficulties: (Difficulty & { chalk: ChalkInstance })[] = [
	{
		value: 1,
		name: 'Easy',
		chalk: chalk.green
	},
	{
		value: 2,
		name: 'Regular',
		chalk: chalk.yellow
	},
	{
		value: 3,
		name: 'Hard',
		chalk: chalk.red
	}
]
