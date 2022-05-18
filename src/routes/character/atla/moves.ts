import ThisWasAVictory from '../../comp/atla/Playbooks/Adamant/ThisWasAVictory.svelte'
import TakesOneToKnowOne from '../../comp/atla/Playbooks/Adamant/TakesOneToKnowOne.svelte'

interface Moves {
  [playbook: string]: {
    name: string,
    component: any,
    stat: string
  }[]
}

export const moves:Moves = {
  Adamant: [
    {
      name: 'This Was a Victory',
      component: ThisWasAVictory,
      stat: 'Passion'
    },{
      name: 'Takes One to Know One',
      component: TakesOneToKnowOne,
      stat: 'Focus'
    }
  ]
}

