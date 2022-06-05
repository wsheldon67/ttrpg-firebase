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
  tags: ["Airbending"]
},{
  name: "Air Scooter",
  component: AirScooter,
  tags: ["Airbending"]
},{
  name: "Air Swipe",
  component: AirSwipe,
  tags: ["Airbending"]
},{
  name: "Breath Of Wind",
  component: BreathOfWind,
  tags: ["Airbending"]
},{
  name: "Cannonball",
  component: Cannonball,
  tags: ["Airbending"]
},{
  name: "Cushion The Forceful Fist",
  component: CushionTheForcefulFist,
  tags: ["Airbending"]
},{
  name: "Directed Funnel",
  component: DirectedFunnel,
  tags: ["Airbending"]
},{
  name: "Reed In The Wind",
  component: ReedInTheWind,
  tags: ["Airbending"]
},{
  name: "Shockwave",
  component: Shockwave,
  tags: ["Airbending"]
},{
  name: "Small Vortex",
  component: SmallVortex,
  tags: ["Airbending"]
},{
  name: "Suction",
  component: Suction,
  tags: ["Airbending"]
},{
  name: "Twisting Wind",
  component: TwistingWind,
  tags: ["Airbending"]
},{
  name: "Wind Run",
  component: WindRun,
  tags: ["Airbending"]
},]

export default Airbending