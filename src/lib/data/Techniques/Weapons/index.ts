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
  tags: ["Weapons"]
},{
  name: "Chi Blocking Jabs",
  component: ChiBlockingJabs,
  tags: ["Weapons"]
},{
  name: "Chart A Course",
  component: ChartACourse,
  tags: ["Weapons"]
},{
  name: "Counterstrike",
  component: Counterstrike,
  tags: ["Weapons"]
},{
  name: "Disarm",
  component: Disarm,
  tags: ["Weapons"]
},{
  name: "Feint",
  component: Feint,
  tags: ["Weapons"]
},{
  name: "Parry",
  component: Parry,
  tags: ["Weapons"]
},{
  name: "Pin A Fly To A Tree",
  component: PinAFlyToATree,
  tags: ["Weapons"]
},{
  name: "Pinpoint Thrust",
  component: PinpointThrust,
  tags: ["Weapons"]
},{
  name: "Switch It Up",
  component: SwitchItUp,
  tags: ["Weapons"]
},{
  name: "Take The High Ground",
  component: TakeTheHighGround,
  tags: ["Weapons"]
},{
  name: "Turn The Tables",
  component: TurnTheTables,
  tags: ["Weapons"]
},]

export default Weapons