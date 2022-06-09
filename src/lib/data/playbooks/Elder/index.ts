import type { Playbook } from '../../playbooks'
import Patience from '../../techniques/Playbook/Patience.svelte'

export const Elder:Playbook = {
  name: 'Elder',
  blurb: `has spent many years living and learning, making 
  mistakes and growing from them.`,
  motivation: `you want to 
  teach (and be taught by) your companions.`,
  principles: [
    {
      name: 'Experience',
      text: `Adherance to what they have learned during their time shaping the world. They provide new insight and guidance to their companions, and may even discount their companions and see things ridigly through a lens of past experience.`
    },{
      name: 'Humility',
      text: `Understanding that for all they have done and learned, they don't know everything and have plenty left to learn. The time to change who they are is never truly over. They can discount the wealth of their experience and fail to intervene when they see a friend making a mistake.`
    }
  ],
  stats: [0,0,2,-1],
  demeanors: ['Diligent', 'Kindly', 'Bemused', 'Dour', 'Distant', 'Irascible'],
  history_questions: [
    `What great legacy did you inherit decades ago and recently relinquish?`,
    `Who has never forgiven you for decisions you made years ago?`,
    `Who is still your ally and confidante, despite the tense history you've shared?`,
    `What outfit or uniform do you wear to remind yourself of your former duties?`,
  ],
  history: [
    `I recenctly relinquished `, ` a legacy I inherited decades ago. `,
    ` has never forgiven me for decisions I made years ago. `,
    ` is still my ally and confidante, despite the tense history we've shared. I wear `,
    ` to remind myself of my former duties.`
  ],
  technique: {name: 'Patience', tags: [], component: Patience},
  connections: [
    [`I care about`, `more than they know...even though they are probably my most frustrating student.`],
    [``, `is not to be underestimated. In fact, they may have something to teach me!`]
  ],
  growth_question: `You earn growth advancements as you aid chosen protégés to 
  achieve their full potential and move towards their own principles.`,
  moment_of_balance: `You will always be anchored to the past—unable to escape 
  the painful lessons you have learned—but now you can hold 
  the weight of that experience with the humility true wisdom 
  brings. You look upon the current situation with unbiased 
  eyes to see the truths roiling beneath the surface. Tell the 
  GM how you wipe away whatever conceals the truth so 
  no one can see things as they once thought they were.`
}