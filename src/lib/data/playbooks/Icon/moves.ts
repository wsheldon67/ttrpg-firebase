import type { Move } from "../moves";
import BonzuPippinpaddleopsicopolisTheThird from "./BonzuPippinpaddleopsicopolisTheThird.svelte";
import Concentration from "./Concentration.svelte";
import OtterPenguinsUnagiAndHotSprings from "./OtterPenguinsUnagiAndHotSprings.svelte";
import UseTheirMomentum from "./UseTheirMomentum.svelte";
import YipYip from "./YipYip.svelte";

const moves:Move[] = [
  {
    name: 'Use Their Momentum',
    component: UseTheirMomentum,
    stat: 'Focus',
    tags: ['Icon']
  },{
    name: 'Bonzu Pippinpaddleopsicopolis... The Third',
    component: BonzuPippinpaddleopsicopolisTheThird,
    stat: '',
    tags: ['Icon']
  },{
    name: 'Concentration',
    component: Concentration,
    stat: 'Focus',
    tags: ['Icon', '+Focus']
  },{
    name: 'Otter-Penguins, Unagi, and Hot Springs',
    component: OtterPenguinsUnagiAndHotSprings,
    stat: 'Harmony',
    tags: ['Icon']
  },{
    name: 'Yip Yip!',
    component: YipYip,
    stat: '',
    tags: ['Icon']
  },
]
export default moves