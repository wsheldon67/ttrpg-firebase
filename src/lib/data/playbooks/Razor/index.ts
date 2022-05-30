import type { Playbook } from '../../playbooks'
import Lure from '../../../../routes/comp/Techniques/Playbook/Lure.svelte'

export const Razor:Playbook = {
  name: 'Razor',
  blurb: ``,
  motivation: ``,
  principles: [
    {
      name: 'Control',
      text: ``
    },{
      name: 'Connection',
      text: ``
    }
  ],
  stats: [0, 2, -1, 0],
  demeanors: ['Childish', 'Fierce', 'Imperious', 'Overbearing', 'Proper', 'Strange'],
  history: [
    `Why were you chosen to be honed, perfected, and used by your masters?`,
    `Who was the former master you were closest to?`,
    `Who helped give you the will you needed to break with your 
    masters and be something more?`,
    `What totem of your masters can you not bring yourself to throw away?`,
  ],
  technique: {name: 'Lure', tags: [], component: Lure},
  connections: [
    [``, `seems to be able to connect to other people openly, freely, and easily. I wish they would show me how.`],
    [`I see`, `as lacking control. Maybe I can help hone them, at least a little bit.`]
  ],
  growth_question: `Did you try to make amends for past mistakes, or prove you're 
  a different person now?`,
  moment_of_balance: `You save those you care about from an outrageously 
  dangerous threat or problem.`
}