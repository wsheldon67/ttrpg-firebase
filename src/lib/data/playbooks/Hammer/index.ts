import type { Playbook } from '../../playbooks'
import Overwhelm from './Overwhelm.svelte'

export const Hammer:Playbook = {
  name: 'Hammer',
  blurb: `is strong, tough, and looking for a deserving face to 
  punch.`,
  motivation: `you want to grapple with what force 
  can and can't solve.`,
  principles: [
    {
      name: 'Force',
      text: `The desire to smash their way through problems and foes. The use of force has an unfortunate tendency to leave things broken and shattered.`
    },{
      name: 'Care',
      text: `The belief that the world is worth saving, protecting, and serving... and their desire to pull their punches so they don't smash all of it.`
    }
  ],
  stats: [1,-1,0,1],
  history: [
    `What injustice has driven you to use your strength for good?`,
    `Who represents the kind of positive strength and force you want to embody?`,
    `Who tried their best to teach you restraint, calm, and thoughtfulness?`,
    `What fragile trinket or heirloom do you keep and protect?`,
  ],
  technique: {name: 'Overwhelm', tags: [], component: Overwhelm},
  demeanors: ['Playful', 'Blunt', 'Quiet', 'Loud', 'Excessive', 'Determined'],
  connections: [
    ['',`has a way to solve problems with words instead of firsts - it's really impressive!`],
    ['I worry',`won't be able to hold their own when things get tough. I'm going to toughen them up!`],
  ],
  growth_question: `Did you make progress towards your goal against your adversary?`,
  moment_of_balance: `Put yourself directly in the path of an inescapable threat 
  to completely protect someone or something from harm.`
}