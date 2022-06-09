import type { Playbook } from '../../playbooks'
import SteadyStance from '../../techniques/Playbook/SteadyStance.svelte'

export const Prodigy:Playbook = {
  name: 'Prodigy',
  blurb: `not only excels at their training, but has taken it even 
  beyond their masters' teachings.`,
  motivation: `you want to 
  stretch the limits of your training and abilities.`,
  principles: [
    {
      name: 'Excellence',
      text: `They believe in themselves and their own abilities. They are determined to both be the best... and to be seen as the best.`
    },{
      name: 'Community',
      text: `A desire for connection with others - a community. They are more concerned with forming meaningful bonds than beating everyone.`
    }
  ],
  stats: [-1,2,0,0],
  demeanors: ['Curious', 'Proud', 'Defensive', 'Resolute', 'Direct', 'Stubborn'],
  history: [
    `When did you first accomplish something your teachers thought would be impossible for you? `,
    `Who gave you the lessons and support you needed to discover your incredible abilities?`,
    `Who cares for you greatly but doesn't understand your talent?`,
    `What strange talisman or detail of your clothing plays a role in your talents?`,
  ],
  technique: {name: 'Steady Stance', tags: [], component: SteadyStance},
  connections: [
    [``, `could use training from someone who knows what they're doing; I suppose I am up to the task.`],
    [`I'm not sure if the overtures of friendship from`, `make me happy, mad, or both.`]
  ],
  growth_question: `Did you express gratitude to a companion for their presence, 
  support, or teaching?`,
  moment_of_balance: `You’ve always struggled to rely on other people—it feels 
  like it makes you weak. But in this moment, connection to 
  others is the very source of your strength. You call upon your 
  commitment to the group to push yourself beyond your limits 
  and do the impossible. Tell the GM how you accomplish a 
  feat no one ever has before to help or save your friends.`
}