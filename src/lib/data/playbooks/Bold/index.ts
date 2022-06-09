import type { Playbook } from "../../playbooks"
import TagTeam from "../../techniques/Playbook/TagTeam.svelte"

export const Bold:Playbook = {
  name: 'Bold',
  blurb: `fights to live up to their self-image and earn others' trust 
  and confidence.`,
  motivation: `you want to build your reputation 
  and leadership skills`,
  principles: [
    {
      name: 'Loyalty',
      text: `Committed to others, and in turn, subordinate to others, putting the needs of their friends and companions far ahead of their own goals and feelings.`
    },{
      name: 'Confidence',
      text: `Belief in themselves, their own abilities, and their own status. Takes action decisively, demands the respect due them, and makes their own decisions independently of others.`
    }
  ],
  stats: [1,1,0,-1],
  history_questions: [
    `Why do you feel the need to prove yourself so badly?`,
    `Who epitomizes the kind of big, bold figure you hope to be?`,
    `Whose approval do you think you will never attain?`,
    `What token or symbol do you wear to prove you are serious?`,
  ],
  history: [
    `I feel the need to prove myself because `, `. `,
    ` epitomizes the kind of big, bold figure I hope to be. I think I will never attain `,
    `'s approval. I wear `, `to prove I am serious.`
  ],
  technique: {name: 'Tag Team', tags: [], component: TagTeam},
  demeanors: ['Impatient', 'Sensitive', 'Affable', 'Enthusiatic', 'Talkative', 'Impetuous'],
  connections: [
    ['', `scoffs at me and my plans; one day I'll show them what I can do.`],
    ['', `has a pretty good head on their shoulders; they're a great sounding board for my ideas.`]
  ],
  growth_question: `Did you express vulnerability by admitting you were wrong or 
  that you should have listened to someone you ignored?`,
  moment_of_balance: `The greatest heroes of your age may have overwhelming 
  confidence, but balance isn’t about pursuing greatness for 
  the sake of greatness. You find a way to stand with your 
  companions like no one else ever could. Tell the GM how you 
  strike down an impossibly strong enemy or obstacle to protect 
  your friends from harm as the best version of yourself.`
}