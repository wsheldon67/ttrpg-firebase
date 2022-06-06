import type { Technique } from '../index'
import Boom from './Boom.svelte'
import ChiBlockingJabs from './ChiBlockingJabs.svelte'
import ChartACourse from './ChartACourse.svelte'
import Counterstrike from './Counterstrike.svelte'
import Disarm from './Disarm.svelte'
import Feint from './Feint.svelte'
import Parry from './Parry.svelte'
import PinAFlyToATree from './PinAFlyToATree.svelte'
import PinpointThrust from './PinpointThrust.svelte'
import SwitchItUp from './SwitchItUp.svelte'
import TakeTheHighGround from './TakeTheHighGround.svelte'
import TurnTheTables from './TurnTheTables.svelte'


export const Weapons:Technique[] = [{
  name: "Boom",
  component: Boom,
  tags: ["Weapons", "Advance & Attack", "Rare"]
},{
  name: "Chi Blocking Jabs",
  component: ChiBlockingJabs,
  tags: ["Weapons", "Advance & Attack", "Rare"]
},{
  name: "Chart A Course",
  component: ChartACourse,
  tags: ["Weapons", "Evade & Observe", "Rare"]
},{
  name: "Counterstrike",
  component: Counterstrike,
  tags: ["Weapons", "Defend & Maneuver"]
},{
  name: "Disarm",
  component: Disarm,
  tags: ["Weapons", "Defend & Maneuver"]
},{
  name: "Feint",
  component: Feint,
  tags: ["Weapons", "Evade & Observe"]
},{
  name: "Parry",
  component: Parry,
  tags: ["Weapons", "Defend & Maneuver"]
},{
  name: "Pin A Fly To A Tree",
  component: PinAFlyToATree,
  tags: ["Weapons", "Advance & Attack", "Rare"]
},{
  name: "Pinpoint Thrust",
  component: PinpointThrust,
  tags: ["Weapons", "Advance & Attack"]
},{
  name: "Switch It Up",
  component: SwitchItUp,
  tags: ["Weapons", "Evade & Observe"]
},{
  name: "Take The High Ground",
  component: TakeTheHighGround,
  tags: ["Weapons", "Defend & Maneuver"]
},{
  name: "Turn The Tables",
  component: TurnTheTables,
  tags: ["Weapons", "Advance & Attack", "Rare"]
},]

export default Weapons