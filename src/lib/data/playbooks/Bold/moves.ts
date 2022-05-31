import type { Move } from "../moves";
import BestFriend from './BestFriend.svelte'
import HeresThePlan from './HeresThePlan.svelte'
import NotDoneYet from './NotDoneYet.svelte'
import YouMissedSomething from './YouMissedSomething.svelte'
import StraightShooter from './StraightShooter.svelte'

export const moves:Move[] = [
  {
    name: 'Best Friend',
    component: BestFriend,
    stat: 'Creativity',
    tags: ['Bold']
  },{
    name: "Here's The Plan",
    component: HeresThePlan,
    stat: '',
    tags: ['Bold']
  },{
    name: 'Not Done Yet!',
    component: NotDoneYet,
    stat: '',
    tags: ['Bold']
  },{
    name: 'You Missed Something',
    component: YouMissedSomething,
    stat: 'Focus',
    tags: ['Bold']
  },{
    name: 'Straight Shooter',
    component: StraightShooter,
    stat: 'Focus',
    tags: ['Bold']
  }
]
export default moves