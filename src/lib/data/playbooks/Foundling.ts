import type { Playbook } from '../playbooks'

export const Foundling:Playbook = {
  name: 'Foundling',
  blurb: ``,
  motivation: ``,
  principles: [
    {
      name: 'Unity',
      text: ``
    },{
      name: 'Heritage',
      text: ``
    }
  ],
  stats: [1, -1, 1, 0],
  demeanors: ['Caring', 'Dedicated', 'Friendly', 'Modest', 'Respectful', 'Shy'],
  history: [
    `How and when did you learn about your second heritage?`,
    `Who in your family insists you focus on upholding 
    the family heritage?`,
    `Who helped you understand that your two trainings can 
    complement each other?`,
    `What detail of your clothing or visible trinket reveals you belong 
    to two cultures?`,
  ],
  technique: {name: 'Feel the Flow', url: 'Playbooks/Foundling/FeelTheFlow'},
  connections: [
    [``, `seems to think one of my heritages should be valued more; there's something persuasive in their words.`],
    [``, `is so awesome, with skills and heritage I've never seen! I want to learn all I can about them and their background`]
  ],
  growth_question: `Did you resolve an issue or conflict relying on 
  something other than your trainings?`,
  moment_of_balance: `Your new understanding 
  lets you use both your trainings to accomplish an incredible 
  feat or vanquish an enemy that seems unstoppable.`
}