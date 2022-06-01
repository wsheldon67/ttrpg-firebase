import type { Move } from "../moves";
import AnOpenMind from "./AnOpenMind.svelte";
import Challenge from "./Challenge.svelte";
import JudgingARival from "./JudgingARival.svelte";
import SurprisingEntrance from "./SurprisingEntrance.svelte";
import WaitAndListen from "./WaitAndListen.svelte";

const moves:Move[] = [
  {
    name: `Juding a Rival`,
    component: JudgingARival,
    stat: 'Focus',
    tags: ['Prodigy']
  },{
    name: `An Open Mind`,
    component: AnOpenMind,
    stat: '',
    tags: ['Prodigy']
  },{
    name: `Wait and Listen`,
    component: WaitAndListen,
    stat: 'Focus',
    tags: ['Prodigy']
  },{
    name: `Challenge`,
    component: Challenge,
    stat: 'Passion',
    tags: ['Prodigy']
  },{
    name: `Surprising Entrance`,
    component: SurprisingEntrance,
    stat: 'Focus',
    tags: ['Prodigy']
  },
]
export default moves