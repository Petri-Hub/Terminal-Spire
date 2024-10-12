import { DamageAction } from './actions/DamageAction'
import { DefenseAction } from './actions/DefenseAction'
import { LoopBehavior } from './behaviors/LoopBehavior'
import { DamageCard } from './cards/DamageCard'
import { DefenseCard } from './cards/DefenseCard'
import { StaticCost } from './cost/StaticCost'
import { StaticDamage } from './damage/StaticDamage'
import { StaticDefense } from './defense/StaticDefense'
import { Enemy } from './Enemy'
import { NumberBar } from './NumberBar'
import { Player } from './Player'
import { BattleRoom } from './rooms/BattleRoom'

const enemyA = new Enemy({
	id: crypto.randomUUID(),
	defense: new NumberBar(0, 20),
	health: new NumberBar(10, 10),
	name: 'Globin',
	behavior: new LoopBehavior([
		new DamageAction(new StaticDamage(1)),
		new DefenseAction(new StaticDefense(2))
	])
})

const enemyB = new Enemy({
	id: crypto.randomUUID(),
	defense: new NumberBar(0, 20),
	health: new NumberBar(20, 20),
	name: 'Golem',
	behavior: new LoopBehavior([new DefenseAction(new StaticDefense(3))])
})

const attackCard = new DamageCard({
	id: crypto.randomUUID(),
	name: 'Slash',
	description: 'Deal 1 damage',
	cost: new StaticCost(1),
	damage: new StaticDamage(1)
})

const defenseCard = new DefenseCard({
	id: crypto.randomUUID(),
	name: 'Slash',
	description: 'Deal 1 damage',
	cost: new StaticCost(1),
	defense: new StaticDefense(1)
})

const player = new Player({
	id: crypto.randomUUID(),
	energy: new NumberBar(3, 3),
	defense: new NumberBar(0, 20),
	health: new NumberBar(10, 10),
	name: 'Jorge'
})

const room = new BattleRoom({
	enemies: [enemyA, enemyB]
})

room.enter(player)
