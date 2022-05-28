import type { Playbook } from "../playbooks"

export const Adamant:Playbook = {
  name: 'Adamant',
  blurb: `will fix the world, even if it means breaking all the rules.`,
  motivation: `you want to contend with what "doing right" means in a complicated world.`,
  principles: [
    {
      name: 'Restraint',
      text: `The desire to hold back and be careful, to think and comprehend and plan instead of bulling ahead.`
    },{
      name: 'Results',
      text: `The drive to change things for the better and have it stick. Cares more about getting results than what it might cost.`
    }
  ],
  stats: [0,1,-1,1],
  history: [
    `What experience of being decieved or manipulated convinced you to steel yourself against being swayed by other people?`,
    `Who was your first lodestar, and why were they an exception? Why aren't they your lodestar anymore?`,
    `Who earned your grudging respect by teaching you pragmatism?`,
    `What heirloom or piece of craftsmanship do you carry to remind you to stay true to yourself?`,
  ],
  technique: {name: 'Pinpoint Aim', url: 'Playbooks/Adamant/PinpointAim'},
  demeanors: ['Above-it-all', 'Perfectionist', 'Chilly', 'Rebellious', 'Flippant', 'Standoffish'],
  connections: [
    [``, `takes issue with my methods - perhaps they have a point, but I certainly can't admit that to them!`],
    [``, `is my lodestar; something about them makes them the one person I let my guard down around.`]
  ],
  growth_question: `Did you seek support or guidance from others?`,
  moment_of_balance: `Solve an intractable problem or calm a terrible conflict by relating to dangerous people on a human level.`
}