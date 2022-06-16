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
    tags: ['Basic'],
    conditions: [{name: 'Shaken', mod: 1}, {name: 'Angry', mod: -2}]
  },{
    name: 'Guide and Comfort',
    component: GuideAndComfort,
    stat: 'Harmony',
    tags: ['Basic'],
    conditions: [{name: 'Shaken', mod: -2}, {name: 'Angry', mod: -2}]
  },{
    name: 'Help',
    component: Help,
    stat: '',
    tags: ['Basic']
  },{
    name: 'Intimidate',
    component: Intimidate,
    stat: 'Passion',
    tags: ['Basic'],
    conditions: [{name: 'Frustrated', mod: 1}, {name: 'Afraid', mod: -2}]
  },{
    name: 'Plead',
    component: Plead,
    stat: 'Harmony',
    tags: ['Basic'],
    conditions: [{name: 'Jaded', mod: -2}, {name: 'Troubled', mod: -2}]
  },{
    name: 'Push Your Luck',
    component: PushYourLuck,
    stat: 'Passion',
    tags: ['Basic'],
    conditions: [{name: 'Frustrated', mod: -2}, {name: 'Guilty', mod: -2}]
  },{
    name: 'Rely on Your Skills and Training',
    component: RelyOnSkillsAndTraining,
    stat: 'Focus',
    tags: ['Basic'],
    conditions: [{name: 'Worried', mod: 1}, {name: 'Troubled', mod: -2}]
  },{
    name: 'Trick',
    component: Trick,
    stat: 'Creativity',
    tags: ['Basic'],
    conditions: [{name: 'Jaded', mod: 1}, {name: 'Insecure', mod: -2}]
  }
]