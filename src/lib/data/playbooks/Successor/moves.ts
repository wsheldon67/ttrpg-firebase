import type { Move } from "../moves";
import WayoftheFuture from './WayoftheFuture.svelte'
import BlackKoalaSheep from './BlackKoalaSheep.svelte'
import WalkThisWay from './WalkThisWay.svelte'
import WorldlyKnowledge from './WorldlyKnowledge.svelte'


const moves:Move[] = [
  {
  name: `Way of the Future`,
  component: WayoftheFuture,
  stat: '',
  tags: ['Successor']
},{
  name: `Black Koala-Sheep`,
  component: BlackKoalaSheep,
  stat: '',
  tags: ['Successor']
},{
  name: `Walk This Way`,
  component: WalkThisWay,
  stat: '',
  tags: ['Successor']
},{
  name: `Worldly Knowledge`,
  component: WorldlyKnowledge,
  stat: '',
  tags: ['Successor']
},
]
export default moves