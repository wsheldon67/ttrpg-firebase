import type { Playbook } from '../../playbooks'
import Anticipate from '../../../../routes/comp/Techniques/Playbook/Anticipate.svelte'

export const Destined:Playbook = {
  name: 'Destined',
  blurb: ``,
  motivation: ``,
  principles: [
    {
      name: 'Patience',
      text: ``
    },{
      name: 'Determination',
      text: ``
    }
  ],
  stats: [0,-1,2,0],
  demeanors: ['Eager', 'Solemn', 'Haunted', 'Uncertain', 'Jocular', 'Watchful'],
  history: [
    `When did you realize you were marked by supernatural forces?`,
    `Who envies your destiny and seeks to seize it from you? Why can't you let that happen?`,
    `Who do you turn to for guidance when you feel overwhelmed by your destiny?`,
    `What token or symbol do you carry that proves to any observer that you are chosen by fate?`,
  ],
  technique: {name: 'Anticipate', component: Anticipate, tags: []},
  connections: [
    [`I believe`, `will play a crucial role in my fulfillment of my destiny, for good or ill.`],
    [`Being around`, `helps me put my destiny out of my mind, for a time. Why?`]
  ],
  growth_question: `Did you spend meaningful time with someone else focused on 
  their concerns and troubles?`,
  moment_of_balance: `Your serenity and resolve together win the day and inspire all 
  those around you.`
}