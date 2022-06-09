import type { Playbook } from '../../playbooks'
import SweepTheLeg from '../../techniques/Playbook/SweepTheLeg.svelte'

export const Rogue:Playbook = {
  name: 'Rogue',
  blurb: `is a rule-breaker, a joker, a delinquent—a figure on 
  the fringes who snipes at the people in charge.`,
  motivation: `you like the idea of being a troublemaker.`,
  principles: [
    {
      name: 'Friendship',
      text: `The desire to form bonds over their desire to simply survive. They are willing to turn their hard-won survival skills to the task of helping their friends.`
    },{
      name: 'Survival',
      text: `The drive and need to selfishly make it through difficulties alive. They often leave others out in the cold, and tend not to produce constructive results.`
    }
  ],
  stats: [1, 0, -1, 1],
  demeanors: ['Acerbic', 'Joking', 'Cynical', 'Sly', 'Extreme', 'Wild'],
  history_questions: [
    `How did you come to feel that the only way to survive was to break the rules?`,
    `Who kept trying to reach a kind hand out towards you, only to be rebuffed?`,
    `Who was ready to do anything to break you of your bad habits?`,
    `What is your favorite possession that you stole, swiped, or otherwise acquired illegitimately?`,
  ],
  history: [
    ``, `, which is how I cam to feel that the only way to survive was to break the rules. `,
    `. `, ` kept trying to reach a kind hand out towards me, but I rebuffed them.`,
    ` was ready to do anything to break me of my bad habits. My favorite posession that I acquired illegitimately was `,
    ``
  ],
  technique: {name: 'Sweep the Leg', tags: [], component: SweepTheLeg},
  connections: [
    [``, `is waaaaay too uptight, too trapped in themselves; they need to break some rules!`],
    [``, `is amazing and I hope they like me; maybe they're worth playing it straight?`]
  ],
  growth_question: `Did you get a friend to join in or approve of 
  one of your bad habits?`,
  moment_of_balance: `You learned early on that you had to do what you needed to 
  survive, and that sometimes that meant you lost friends. Now, 
  you find a new balance: rule-breaking isn’t something that just 
  drives people away—it’s something you can use constructively, 
  with your friends! Tell the GM how you lead your companions 
  to break all the rules and accomplish an incredible feat.`
}