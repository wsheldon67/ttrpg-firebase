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
    stat: 'Creativity',
    tags: ['Basic', 'Angry']
  },{
    name: 'Guide and Comfort',
    component: GuideAndComfort,
    stat: 'Harmony',
    tags: ['Basic', 'Angry']
  },{
    name: 'Help',
    component: Help,
    stat: '',
    tags: ['Basic']
  },{
    name: 'Intimidate',
    component: Intimidate,
    stat: 'Passion',
    tags: ['Basic', 'Afraid']
  },{
    name: 'Plead',
    component: Plead,
    stat: 'Harmony',
    tags: ['Basic', 'Troubled']
  },{
    name: 'Push Your Luck',
    component: PushYourLuck,
    stat: 'Passion',
    tags: ['Basic', 'Guilty']
  },{
    name: 'Rely on Your Skills and Training',
    component: RelyOnSkillsAndTraining,
    stat: 'Focus',
    tags: ['Basic', 'Troubled']
  },{
    name: 'Trick',
    component: Trick,
    stat: 'Creativity',
    tags: ['Basic', 'Insecure']
  }
]