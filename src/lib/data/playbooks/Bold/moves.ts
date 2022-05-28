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
    stat: 'Creativity'
  },{
    name: "Here's The Plan",
    component: HeresThePlan,
    stat: ''
  },{
    name: 'Not Done Yet!',
    component: NotDoneYet,
    stat: ''
  },{
    name: 'You Missed Something',
    component: YouMissedSomething,
    stat: 'Focus'
  },{
    name: 'Straight Shooter',
    component: StraightShooter,
    stat: 'Focus'
  }
]
export default moves