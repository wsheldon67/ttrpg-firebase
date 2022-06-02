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
    stat: 'Passion',
    tags: ['Adamant']
  },{
    name: 'Takes One to Know One',
    component: TakesOneToKnowOne,
    stat: 'Focus',
    tags: ['Adamant']
  },{
    name: 'No Time For Feelings',
    component: NoTimeForFeelings,
    stat: '',
    tags: ['Adamant']
  },{
    name: "I Don't Hate You",
    component: IDontHateYou,
    stat: 'Passion',
    tags: ['Adamant']
  },{
    name: 'Driven By Justice',
    component: DrivenByJustice,
    stat: 'Passion',
    tags: ['Adamant', '+Passion']
  }
]
export default moves