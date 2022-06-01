import type { Move } from "../moves";
import CasingTheJoint from "./CasingTheJoint.svelte";
import IsThatTheBestYouGot from "./IsThatTheBestYouGot.svelte";
import RoguishCharm from "./RoguishCharm.svelte";
import SlipperyEelHound from "./SlipperyEelHound.svelte";
import YoureNotMyMaster from "./YoureNotMyMaster.svelte";

const moves:Move[] = [
  {
    name: `Roguish Charm`,
    component: RoguishCharm,
    stat: 'Creativity',
    tags: ['Rogue']
  },{
    name: `Slippery Eel-Hound`,
    component: SlipperyEelHound,
    stat: '',
    tags: ['Rogue']
  },{
    name: `You're Not My Master!`,
    component: YoureNotMyMaster,
    stat: '',
    tags: ['Rogue']
  },{
    name: `Casing the Joint`,
    component: CasingTheJoint,
    stat: '',
    tags: ['Rogue']
  },{
    name: `Is That the Best You Got?`,
    component: IsThatTheBestYouGot,
    stat: 'Passion',
    tags: ['Rogue']
  },
]
export default moves