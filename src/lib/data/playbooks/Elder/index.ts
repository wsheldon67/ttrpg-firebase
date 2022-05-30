import type { Playbook } from '../../playbooks'
import Patience from '../../../../routes/comp/Techniques/Playbook/Patience.svelte'

export const Elder:Playbook = {
  name: 'Elder',
  blurb: ``,
  motivation: ``,
  principles: [
    {
      name: 'Experience',
      text: ``
    },{
      name: 'Humility',
      text: ``
    }
  ],
  stats: [0,0,2,-1],
  demeanors: ['Diligent', 'Kindly', 'Bemused', 'Dour', 'Distant', 'Irascible'],
  history: [
    `What great legacy did you inherit decades ago and recently relinquish?`,
    `Who has never forgiven you for decisions you made years ago?`,
    `Who is still your ally and confidante, despite the tense history you've shared?`,
    `What outfit or uniform do you wear to remind yourself of your former duties?`,
  ],
  technique: {name: 'Patience', tags: [], component: Patience},
  connections: [
    [`I care about`, `more than they know...even though they are probably my most frustrating student.`],
    [``, `is not to be underestimated. In fact, they may have something to teach me!`]
  ],
  growth_question: `You earn growth advancements as you aid chosen protégés to 
  achieve their full potential and move towards their own principles.`,
  moment_of_balance: `You wipe away whatever conceals the truth so no 
  one can see things as they once thought they were.`
}