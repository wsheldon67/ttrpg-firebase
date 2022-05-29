import type { Playbook } from '../../playbooks'
import WallOfPerfection from './WallOfPerfection.svelte'

export const Icon:Playbook = {
  name: 'Icon',
  blurb: `comes from an ancient tradition and inherits some 
  serious standards to live up to.`,
  motivation: `you want to be torn 
  between your heart and your duty.`,
  principles: [
    {
      name: 'Role',
      text: `A commitment to and belief in all the duties and meaning of their role. They see the world through the eyes of someone fulfilling a duty first and foremost, long before they think of their own needs.`
    },{
      name: 'Freedom',
      text: `A desire to be free and make their own choices. They avoid their role and its duties, often with significant consequences.`
    }
  ],
  stats: [0,1,1,-1],
  history : [
    `What tradition do you represent as its icon? Why can't you set down the role?`,
    `Who was your chief mentor, teaching you the nature of your burden and its value?`,
    `Who showed you that even with the weight of your burden, you could still find ways to play?`,
    `What token of your burden and tradition do you always carry?`,
  ],
  technique: {name: 'Wall of Perfection', tags: [], component: WallOfPerfection},
  demeanors: ['Naive', 'Playful', 'Needy', 'Sad', 'Haughty', 'Grave'],
  connections: [
    [``, `seems to not fully understand what it means that I'm the icon of my tradition… and I kind of like feeling free around them.`],
    [``, `makes me feel better about my responsibilities and my burden with a smile and a few kind words.`]
  ],
  growth_question: `Did you accomplish a feat worthy of your burden and tradition?`,
  moment_of_balance: `Your new understanding of your burdens forges a new way 
  forward for everyone.`
}