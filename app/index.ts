import { DamageAction } from "./actions/DamageAction"
import { DefenseAction } from "./actions/DefenseAction"
import { LoopBehavior } from "./behaviors/LoopBehavior"
import { StaticDamage } from "./damage/StaticDamage"
import { StaticDefense } from "./defense/StaticDefense"
import { Enemy } from "./Enemy"
import { NumberBar } from "./NumberBar"
import { Player } from "./Player"
import { BattleRoom } from "./rooms/BattleRoom"

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
	behavior: new LoopBehavior([
		new DefenseAction(new StaticDefense(3))
	])
})

const player = new Player({
	id: crypto.randomUUID(),
	defense: new NumberBar(0, 20),
	health: new NumberBar(10, 10),
	name: 'Player'
})

const room = new BattleRoom({
   enemies: [enemyA, enemyB]
})

room.enter(player)