import type { Playbook } from '../../playbooks'
import FeelTheFlow from '../../techniques/Playbook/FeelTheFlow.svelte'

export const Foundling:Playbook = {
  name: 'Foundling',
  blurb: `is the child of two cultures, belonging to both but 
  not at home in either.`,
  motivation: `you want to synthesize 
  the lessons and traditions of your heritage.`,
  principles: [
    {
      name: 'Unity',
      text: `The desire to combine their heritages and find connections that bring their two home cultures into one identity. They are coming to see themselves as something new, a truly innovative combination of two ways of being.`
    },{
      name: 'Heritage',
      text: `An interest and devotion to their heritage, embracing the unique and specific aspects of one of their cultures, sometimes at the expense of their identity with the other.`
    }
  ],
  stats: [1, -1, 1, 0],
  demeanors: ['Caring', 'Dedicated', 'Friendly', 'Modest', 'Respectful', 'Shy'],
  history_questions: [
    `How and when did you learn about your second heritage?`,
    `Who in your family insists you focus on upholding 
    the family heritage?`,
    `Who helped you understand that your two trainings can 
    complement each other?`,
    `What detail of your clothing or visible trinket reveals you belong 
    to two cultures?`,
  ],
  history: [
    `I learned about my second heritage when `, `. `,
    ` insists I focus on upholding the family heritage. `,
    ` helped me understand that my two trainings can complement each other. `,
    ` reveals I belong to two cultures.`
  ],
  technique: {name: 'Feel the Flow', tags: [], component: FeelTheFlow},
  connections: [
    [``, `seems to think one of my heritages should be valued more; there's something persuasive in their words.`],
    [``, `is so awesome, with skills and heritage I've never seen! I want to learn all I can about them and their background`]
  ],
  growth_question: `Did you resolve an issue or conflict relying on 
  something other than your trainings?`,
  moment_of_balance: `You have always struggled to find unity between your two 
  halves while trying to honor their traditions. But true balance 
  is about knowing that everything is part of a greater whole. 
  One heritage cannot exist without the other...especially 
  within you. Tell the GM how your new understanding lets 
  you use both your trainings to accomplish an incredible 
  feat or vanquish an enemy that seems unstoppable.`
}