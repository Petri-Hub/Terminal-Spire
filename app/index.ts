import { ActionGroup } from "./actions/ActionGroup";
import { DamageAction } from "./actions/DamageAction";
import { DefenseAction } from "./actions/DefenseAction";
import { LoopBehavior } from "./behaviors/LoopBehavior";
import { StaticDamage } from "./damage/StaticDamage";
import { StaticDefense } from "./defense/StaticDefense";
import { Enemy } from "./Enemy";
import { NumberBar } from "./NumberBar";
import { Player } from "./Player";
import { BattleRoom } from "./rooms/BattleRoom";

const enemy = new Enemy({
    id: crypto.randomUUID(),
    defense: new NumberBar(0, 20),
    health: new NumberBar(100, 100),
    name: "Globin",
    behavior: new LoopBehavior([
        new DamageAction(new StaticDamage(1)),
        new DefenseAction(new StaticDefense(2))
    ])
})

const player = new Player({
    id: crypto.randomUUID(),
    defense: new NumberBar(0, 20),
    health: new NumberBar(10, 10),
    name: "Player"
})

const room = new BattleRoom([enemy])

room.enter(player)
