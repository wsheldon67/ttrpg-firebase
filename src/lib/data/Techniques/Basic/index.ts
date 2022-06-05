import type { Technique } from '../index'
import Ready from './Ready.svelte'
import Retaliate from './Retaliate.svelte'
import SeizeAPosition from './SeizeAPosition.svelte'
import Strike from './Strike.svelte'
import Pressure from './Pressure.svelte'
import Smash from './Smash.svelte'
import TestBalance from './TestBalance.svelte'
import BolsterOrHinder from './BolsterOrHinder.svelte'
import Commit from './Commit.svelte'


export const Basic:Technique[] = [{
  name: "Ready",
  component: Ready,
  tags: ["Basic","Defend & Maneuver"]
},{
  name: "Retaliate",
  component: Retaliate,
  tags: ["Basic","Defend & Maneuver"]
},{
  name: "Seize A Position",
  component: SeizeAPosition,
  tags: ["Basic","Defend & Maneuver"]
},{
  name: "Strike",
  component: Strike,
  tags: ["Basic","Advance & Attack"]
},{
  name: "Pressure",
  component: Pressure,
  tags: ["Basic","Advance & Attack"]
},{
  name: "Smash",
  component: Smash,
  tags: ["Basic","Advance & Attack"]
},{
  name: "Test Balance",
  component: TestBalance,
  tags: ["Basic","Evade & Observe"]
},{
  name: "Bolster Or Hinder",
  component: BolsterOrHinder,
  tags: ["Basic","Evade & Observe"]
},{
  name: "Commit",
  component: Commit,
  tags: ["Basic","Evade & Observe"]
},]

export default Basic