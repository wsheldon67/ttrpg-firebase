import type { Playbook } from '../../playbooks'
import Lure from '../../techniques/Playbook/Lure.svelte'

export const Razor:Playbook = {
  name: 'Razor',
  blurb: `was cruelly hardened into the perfect implement of 
  their masters' goals... until they broke free.`,
  motivation: `you want to fight for a path to redemption.`,
  principles: [
    {
      name: 'Control',
      text: `The desire to be in control, never weak or at someone else's mercy. They are a dangerous opponent, but have a hard time forming meaningful relationships with other people.`
    },{
      name: 'Connection',
      text: `The desire for meaningful bonds with other people, in the face of their fear of making themselves vulnerable to others. They may be happier, but on edge, aware that they might be hurt.`
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
  moment_of_balance: `You were taught to control yourself, and that to give of 
  yourself, to connect, is to lose control. But now, you see 
  that connection isn’t weakness; it is a choice, a true way of 
  controlling your self. You seize that now, choosing to embrace 
  connection to others and spring yourself to impossible 
  heights. Tell the GM how you save those you care about 
  from an outrageously dangerous threat or problem.`
}