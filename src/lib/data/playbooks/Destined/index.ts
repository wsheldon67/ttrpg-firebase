import type { Playbook } from '../../playbooks'
import Anticipate from '../../techniques/Playbook/Anticipate.svelte'

export const Destined:Playbook = {
  name: 'Destined',
  blurb: `has a grand fate in store, something spiritual or otherwordly.`,
  motivation: `you want to shape your destiny and decide what becomes of you.`,
  principles: [
    {
      name: 'Patience',
      text: `Thoughtful and introspective, they wait for the right moment. They see their destiny as coming to them.`
    },{
      name: 'Determination',
      text: `Acting openly, agressivley, and often, seeking what they want and finding their destiny instead of waiting for it to come to them.`
    }
  ],
  stats: [0,-1,2,0],
  demeanors: ['Eager', 'Solemn', 'Haunted', 'Uncertain', 'Jocular', 'Watchful'],
  history_questions: [
    `When did you realize you were marked by supernatural forces?`,
    `Who envies your destiny and seeks to seize it from you? Why can't you let that happen?`,
    `Who do you turn to for guidance when you feel overwhelmed by your destiny?`,
    `What token or symbol do you carry that proves to any observer that you are chosen by fate?`,
  ],
  history: [
    `I realized I was marked by supernatural forces when `, `.`,
    ` envies my destiny and seeks to seize it from me. I can't let that happen because `,
    `. I turn to `, `when I feel overwhelmed by my destiny. I carry `,
    `to prove to any observer that I am chosen by fate.`
  ],
  technique: {name: 'Anticipate', component: Anticipate, tags: []},
  connections: [
    [`I believe`, `will play a crucial role in my fulfillment of my destiny, for good or ill.`],
    [`Being around`, `helps me put my destiny out of my mind, for a time. Why?`]
  ],
  growth_question: `Did you spend meaningful time with someone else focused on 
  their concerns and troubles?`,
  moment_of_balance: `You’ve held true to a core of conviction even while getting 
  your hands dirty to do what you deemed necessary. But 
  balance means appreciating that other people are just as 
  complex as you are, not merely obstacles or pawns. Tell the 
  GM how you solve an intractable problem or calm a terrible 
  conflict by relating to dangerous people on a human level.`
}