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
  tags: ["Group"]
},{
  name: "Coordination",
  component: Coordination,
  tags: ["Group"]
},{
  name: "Draw Foe",
  component: DrawFoe,
  tags: ["Group"]
},{
  name: "Engulf",
  component: Engulf,
  tags: ["Group"]
},{
  name: "Focused Fire",
  component: FocusedFire,
  tags: ["Group"]
},{
  name: "Overwhelm",
  component: Overwhelm,
  tags: ["Group"]
},{
  name: "Scatter And Regroup",
  component: ScatterAndRegroup,
  tags: ["Group"]
},{
  name: "Shield Wall",
  component: ShieldWall,
  tags: ["Group"]
},{
  name: "Spread Out",
  component: SpreadOut,
  tags: ["Group"]
},{
  name: "Surround",
  component: Surround,
  tags: ["Group"]
},{
  name: "Swarm",
  component: Swarm,
  tags: ["Group"]
},{
  name: "Test Defenses",
  component: TestDefenses,
  tags: ["Group"]
},{
  name: "Protect Objective",
  component: ProtectObjective,
  tags: ["Group"]
},]

export default Group