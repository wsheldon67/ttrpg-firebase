import type { Technique } from '../index'
import AirCushion from './AirCushion.svelte'
import AirScooter from './AirScooter.svelte'
import AirSwipe from './AirSwipe.svelte'
import BreathOfWind from './BreathOfWind.svelte'
import Cannonball from './Cannonball.svelte'
import CushionTheForcefulFist from './CushionTheForcefulFist.svelte'
import DirectedFunnel from './DirectedFunnel.svelte'
import ReedInTheWind from './ReedInTheWind.svelte'
import Shockwave from './Shockwave.svelte'
import SmallVortex from './SmallVortex.svelte'
import Suction from './Suction.svelte'
import TwistingWind from './TwistingWind.svelte'
import WindRun from './WindRun.svelte'


export const Airbending:Technique[] = [{
  name: "Air Cushion",
  component: AirCushion,
  tags: ["Airbending", "Evade & Observe"]
},{
  name: "Air Scooter",
  component: AirScooter,
  tags: ["Airbending", "Evade & Observe"]
},{
  name: "Air Swipe",
  component: AirSwipe,
  tags: ["Airbending", "Defend & Maneuver"]
},{
  name: "Breath Of Wind",
  component: BreathOfWind,
  tags: ["Airbending", "Advance & Attack", "Rare"]
},{
  name: "Cannonball",
  component: Cannonball,
  tags: ["Airbending", "Advance & Attack"]
},{
  name: "Cushion The Forceful Fist",
  component: CushionTheForcefulFist,
  tags: ["Airbending", "Evade & Observe", "Rare"]
},{
  name: "Directed Funnel",
  component: DirectedFunnel,
  tags: ["Airbending", "Advance & Attack"]
},{
  name: "Reed In The Wind",
  component: ReedInTheWind,
  tags: ["Airbending", "Evade & Observe", "Rare"]
},{
  name: "Shockwave",
  component: Shockwave,
  tags: ["Airbending", "Evade & Observe", "Rare"]
},{
  name: "Small Vortex",
  component: SmallVortex,
  tags: ["Airbending", "Evade & Observe"]
},{
  name: "Suction",
  component: Suction,
  tags: ["Airbending", "Evade & Observe"]
},{
  name: "Twisting Wind",
  component: TwistingWind,
  tags: ["Airbending", "Defend & Maneuver"]
},{
  name: "Wind Run",
  component: WindRun,
  tags: ["Airbending", "Defend & Maneuver"]
},]

export default Airbending