import type { Technique } from '../index'
import AttendToCommands from './AttendToCommands.svelte'
import Coordination from './Coordination.svelte'
import DrawFoe from './DrawFoe.svelte'
import Engulf from './Engulf.svelte'
import FocusedFire from './FocusedFire.svelte'
import Overwhelm from './Overwhelm.svelte'
import ScatterAndRegroup from './ScatterAndRegroup.svelte'
import ShieldWall from './ShieldWall.svelte'
import SpreadOut from './SpreadOut.svelte'
import Surround from './Surround.svelte'
import Swarm from './Swarm.svelte'
import TestDefenses from './TestDefenses.svelte'
import ProtectObjective from './ProtectObjective.svelte'


export const Group:Technique[] = [{
  name: "Attend To Commands",
  component: AttendToCommands,
  tags: ["Group", "Evade & Observe"]
},{
  name: "Coordination",
  component: Coordination,
  tags: ["Group", "Evade & Observe"]
},{
  name: "Draw Foe",
  component: DrawFoe,
  tags: ["Group", "Evade & Observe"]
},{
  name: "Engulf",
  component: Engulf,
  tags: ["Group", "Defend & Maneuver"]
},{
  name: "Focused Fire",
  component: FocusedFire,
  tags: ["Group", "Advance & Attack"]
},{
  name: "Overwhelm (group)",
  component: Overwhelm,
  tags: ["Group", "Advance & Attack"]
},{
  name: "Scatter And Regroup",
  component: ScatterAndRegroup,
  tags: ["Group", "Evade & Observe"]
},{
  name: "Shield Wall",
  component: ShieldWall,
  tags: ["Group", "Defend & Maneuver"]
},{
  name: "Spread Out",
  component: SpreadOut,
  tags: ["Group", "Defend & Maneuver"]
},{
  name: "Surround",
  component: Surround,
  tags: ["Group", "Advance & Attack"]
},{
  name: "Swarm",
  component: Swarm,
  tags: ["Group", "Advance & Attack"]
},{
  name: "Test Defenses",
  component: TestDefenses,
  tags: ["Group", "Evade & Observe"]
},{
  name: "Protect Objective",
  component: ProtectObjective,
  tags: ["Group", "Defend & Maneuver"]
},]

export default Group