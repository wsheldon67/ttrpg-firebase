import type { Playbook } from '../../playbooks'
import Break from '../../Techniques/Playbook/Break.svelte'

export const Successor:Playbook = {
  name: 'Successor',
  blurb: `comes from a powerful, tarnished lineage.`,
  motivation: `you want to struggle against your lineage as it 
  threatens to draw you in.`,
  principles: [
    {
      name: 'Tradition',
      text: `A commitment to the heritage, practices, and power of their lineage. They see the value and power of the lineage and seek to respect and honor their forbears.`
    },{
      name: 'Progress',
      text: `A desire to find new ways, different from the ways of their lineage. They want to make amends for the worst excesses of their lineage.`
    }
  ],
  stats: [1,1,-1,0],
  demeanors: ['Perky', 'Intense', 'By-the-book', 'Casual', 'Arrogant', 'Oblivious'],
  history: [
    `Who is the current head of your lineage? How do you love and frustrate each other?`,
    `What close member of your lineage wants to revolutionize it?`,
    `What do you carry that reminds you of the place most associated with your lineage?`,
    `What part of your lineage's identity is most important and valuable to you as a person?`,
  ],
  technique: {name: 'Break', tags: [], component: Break},
  connections: [
    [``, `has major concerns, fears, or grievances with my lineage — and with me, by proxy.`],
    [``,`seems free of their past in a way I wish I could let go of mine; hearing them talk about the future feels amazing!`]
  ],
  growth_question: `Did you learn something meaningful or important about your 
  lineage, its members, or its effects on the world and others?`,
  moment_of_balance: `You knock down obstacles that seem impossible to overcome and save the day.`
}