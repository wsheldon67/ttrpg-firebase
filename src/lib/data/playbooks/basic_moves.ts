import type { Move } from "./moves";
import AssessSituation from '../../../routes/comp/Moves/AssessSituation.svelte'
import GuideAndComfort from '../../../routes/comp/Moves/GuideAndComfort.svelte'
import Help from '../../../routes/comp/Moves/Help.svelte'
import Intimidate from '../../../routes/comp/Moves/Intimidate.svelte'
import Plead from '../../../routes/comp/Moves/Plead.svelte'
import PushYourLuck from '../../../routes/comp/Moves/PushYourLuck.svelte'
import RelyOnSkillsAndTraining from '../../../routes/comp/Moves/RelyOnSkillsAndTraining.svelte'
import Trick from '../../../routes/comp/Moves/Trick.svelte'

export const Basic:Move[] = [
  {
    name: 'Assess a Situation',
    component: AssessSituation,
    stat: 'Creativity'
  },{
    name: 'Guide and Comfort',
    component: GuideAndComfort,
    stat: 'Harmony'
  },{
    name: 'Help',
    component: Help,
    stat: ''
  },{
    name: 'Intimidate',
    component: Intimidate,
    stat: 'Passion'
  },{
    name: 'Plead',
    component: Plead,
    stat: 'Harmony'
  },{
    name: 'Push Your Luck',
    component: PushYourLuck,
    stat: 'Passion'
  },{
    name: 'Rely on Your Skills and Training',
    component: RelyOnSkillsAndTraining,
    stat: 'Focus'
  },{
    name: 'Trick',
    component: Trick,
    stat: 'Creativity'
  }
]