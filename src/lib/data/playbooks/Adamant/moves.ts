import type { Move } from "../moves"
import ThisWasAVictory from './ThisWasAVictory.svelte'
import TakesOneToKnowOne from './TakesOneToKnowOne.svelte'
import NoTimeForFeelings from './NoTimeForFeelings.svelte'
import IDontHateYou from './IDontHateYou.svelte'
import DrivenByJustice from './DrivenByJustice.svelte'

export const moves:Move[] = [
  {
    name: 'This Was a Victory',
    component: ThisWasAVictory,
    stat: 'Passion'
  },{
    name: 'Takes One to Know One',
    component: TakesOneToKnowOne,
    stat: 'Focus'
  },{
    name: 'No Time For Feelings',
    component: NoTimeForFeelings,
    stat: ''
  },{
    name: "I Don't Hate You",
    component: IDontHateYou,
    stat: 'Passion'
  },{
    name: 'Driven By Justice',
    component: DrivenByJustice,
    stat: 'Passion'
  }
]
export default moves