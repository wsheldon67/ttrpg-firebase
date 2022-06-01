import type { Move } from "../moves";
import AirCuttingEdge from './AirCuttingEdge.svelte'
import MindofSteel from './MindofSteel.svelte'
import ImaPeoplePerson from './ImaPeoplePerson.svelte'
import ComeandGetIt from './ComeandGetIt.svelte'
import WinningisEverything from './WinningisEverything.svelte'


const moves:Move[] = [
  {
  name: `Air-Cutting Edge`,
  component: AirCuttingEdge,
  stat: '',
  tags: ['Razor']
},{
  name: `Mind of Steel`,
  component: MindofSteel,
  stat: '',
  tags: ['Razor']
},{
  name: `I'm a People Person`,
  component: ImaPeoplePerson,
  stat: '',
  tags: ['Razor']
},{
  name: `Come and Get It`,
  component: ComeandGetIt,
  stat: '',
  tags: ['Razor']
},{
  name: `Winning is Everything`,
  component: WinningisEverything,
  stat: '',
  tags: ['Razor']
},
]
export default moves