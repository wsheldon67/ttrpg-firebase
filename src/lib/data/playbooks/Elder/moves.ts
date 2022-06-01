import type { Move } from "../moves";
import AsLongAsImBreathing from './AsLongAsImBreathing.svelte'
import LifesTrueDelights from './LifesTrueDelights.svelte'
import AroundHereSomewhere from './AroundHereSomewhere.svelte'
import CuttheGarbage from './CuttheGarbage.svelte'
import AnOpenHeart from './AnOpenHeart.svelte'


const moves:Move[] = [
  {
  name: `As Long As I'm Breathing`,
  component: AsLongAsImBreathing,
  stat: '',
  tags: ['Elder']
},{
  name: `Life's True Delights`,
  component: LifesTrueDelights,
  stat: '',
  tags: ['Elder']
},{
  name: `Around Here Somewhere`,
  component: AroundHereSomewhere,
  stat: '',
  tags: ['Elder']
},{
  name: `Cut the Garbage`,
  component: CuttheGarbage,
  stat: '',
  tags: ['Elder']
},{
  name: `An Open Heart`,
  component: AnOpenHeart,
  stat: '',
  tags: ['Elder']
},
]
export default moves