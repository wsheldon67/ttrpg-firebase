import type { Move } from "../moves";
import CantKnockMeDown from "./CantKnockMeDown.svelte";
import ItDoesntBelongToYou from "./ItDoesntBelongToYou.svelte";
import TheStrengthOfYourHeart from "./TheStrengthOfYourHeart.svelte";
import WhateverICan from "./WhateverICan.svelte";
import YourRulesStink from "./YourRulesStink.svelte";

const moves:Move[] = [
  {
    name: 'The Strength of Your Heart',
    component: TheStrengthOfYourHeart,
    stat: '',
    tags: ['Idealist']
  },{
    name: 'Whatever I Can',
    component: WhateverICan,
    stat: 'Harmony',
    tags: ['Idealist']
  },{
    name: 'Your Rules Stink',
    component: YourRulesStink,
    stat: 'Passion',
    tags: ['Idealist']
  },{
    name: `It Doesn't Belong to You!`,
    component: ItDoesntBelongToYou,
    stat: 'Harmony',
    tags: ['Idealist']
  },{
    name: `Can't Knock Me Down`,
    component: CantKnockMeDown,
    stat: 'Harmony',
    tags: ['Idealist']
  },
]
export default moves