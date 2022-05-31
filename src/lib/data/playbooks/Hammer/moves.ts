import type { Move } from "../moves";
import FueledByAnger from './FueledByAnger.svelte'
import WallsCantHoldMe from './WallsCantHoldMe.svelte'
import PunchWhereItMatters from './PunchWhereItMatters.svelte'
import ComprehendYourFoe from './ComprehendYourFoe.svelte'
import StandAndFight from './StandAndFight.svelte'

const moves:Move[] = [
  {
    name: 'Fueled by Anger',
    component: FueledByAnger,
    stat: 'Passion',
    tags: ['Bold']
  },{
    name: "Walls Can't Hold Me",
    component: WallsCantHoldMe,
    stat: 'Passion',
    tags: ['Bold']
  },{
    name: 'Punch Where It Matters',
    component: PunchWhereItMatters,
    stat: 'Creativity',
    tags: ['Bold']
  },{
    name: 'Comprehend Your Foe',
    component: ComprehendYourFoe,
    stat: 'Creativity',
    tags: ['Bold']
  },{
    name: 'Stand and Fight!',
    component: StandAndFight,
    stat: 'Passion',
    tags: ['Bold']
  }
]
export default moves