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
    stat: 'Passion'
  },{
    name: "Walls Can't Hold Me",
    component: WallsCantHoldMe,
    stat: 'Passion'
  },{
    name: 'Punch Where It Matters',
    component: PunchWhereItMatters,
    stat: 'Creativity'
  },{
    name: 'Comprehend Your Foe',
    component: ComprehendYourFoe,
    stat: 'Creativity'
  },{
    name: 'Stand and Fight!',
    component: StandAndFight,
    stat: 'Passion'
  }
]
export default moves