import type { Playbook } from '../../playbooks'
import Disorient from '../../techniques/Playbook/Disorient.svelte'

export const Idealist:Playbook = {
  name: 'Idealist',
  blurb: `has a past, full of suffering and tragedy, that 
  strengthened their beliefs.`,
  motivation: `you want to awaken 
  the hope in everyone around you.`,
  principles: [
    {
      name: 'Forgiveness',
      text: `The desire and ability to forgive through empathy, understanding, and emotional catharsis. They are committed to resolving and moving on from past pain and injury.`
    },{
      name: 'Action',
      text: `A drive to action, doing things and changing the world directly. It is sometimes expressed as vengence, other times as a drive to directly act and make things better.`
    }
  ],
  stats: [0,-1,1,1],
  history: [
    `What tragedy befell you at a young age?`,
    `Who do you hold most responsible for the tragedy? Why?`,
    `Who helped you through your grief? What did they teach you?`,
    `What symbol, heirloom, or mark do you carry to remind you of what you lost?`,
  ],
  technique: {name: 'Disorient', tags: [], component: Disorient},
  demeanors: ['Lonely', 'Compassionate', 'Joyful', 'Grieving', 'Earnest', 'Resolute'],
  connections: [
    [`I recognize some of the pain I have felt inside of`, `; I'm going to try to help them.`],
    [``, `frustrates me so much when they act without thinking about the consequences!`]
  ],
  growth_question: `Did you improve the lives of a community of average citizens or 
  help an ordinary person with their problems?`,
  moment_of_balance: `The pain of the world can be overwhelming, but balance brings 
  peace. You bring everything around you to a stop—villains, 
  arguments, disaster—and set the world right. Tell the GM how 
  your compassionate actions end a conflict utterly and completely.`
}