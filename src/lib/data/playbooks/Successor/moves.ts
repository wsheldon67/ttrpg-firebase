import type { Move } from "../moves";
import WayoftheFuture from './WayoftheFuture.svelte'
import BlackKoalaSheep from './BlackKoalaSheep.svelte'
import WalkThisWay from './WalkThisWay.svelte'
import WorldlyKnowledge from './WorldlyKnowledge.svelte'
import ALifeofRegret from "./ALifeofRegret.svelte";


const moves:Move[] = [
  {
  name: `Way of the Future`,
  component: WayoftheFuture,
  stat: 'Creativity',
  tags: ['Successor']
},{
  name: `Black Koala-Sheep`,
  component: BlackKoalaSheep,
  stat: 'Creativity',
  tags: ['Successor']
},{
  name: `A Life of Regret`,
  component: ALifeofRegret,
  stat: 'Focus',
  tags: ['Successor']
},{
  name: `Walk This Way`,
  component: WalkThisWay,
  stat: 'Creativity',
  tags: ['Successor']
},{
  name: `Worldly Knowledge`,
  component: WorldlyKnowledge,
  stat: '',
  tags: ['Successor']
},
]
export default moves