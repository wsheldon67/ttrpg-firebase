import type { Playbook } from '../../playbooks'
import SweepTheLeg from '../../../../routes/comp/Techniques/Playbook/SweepTheLeg.svelte'

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
  history: [
    `How did you come to feel that the only way to survive was to break the rules?`,
    `Who kept trying to reach a kind hand out towards you, only to be rebuffed?`,
    `Who was ready to do anything to break you of your bad habits?`,
    `What is your favorite possession that you stole, swiped, or otherwise acquired illegitimately?`,
  ],
  technique: {name: 'Sweep the Leg', tags: [], component: SweepTheLeg},
  connections: [
    [``, `is waaaaay too uptight, too trapped in themselves; they need to break some rules!`],
    [``, `is amazing and I hope they like me; maybe they're worth playing it straight?`]
  ],
  growth_question: `Did you get a friend to join in or approve of 
  one of your bad habits?`,
  moment_of_balance: `You lead your companions to break all the rules and accomplish an 
  incredible feat.`
}