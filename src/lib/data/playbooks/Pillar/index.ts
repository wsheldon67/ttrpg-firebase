import type { Playbook } from '../playbooks'

export const Pillar:Playbook = {
  name: 'Pillar',
  blurb: `is an experienced team player and leader of a famous 
  group of warriors.`,
  motivation: `you want to be a savvy 
  tactician who binds the team together`,
  principles: [
    {
      name: 'Support',
      text: `Intentionally moving into a supportive position, helping others in a quiet, subtle way. They figure out how to help others on their own path, with their own choices.`
    },{
      name: 'Leadership',
      text: `Directly and openly guiding others to the best versions of themselves. They try to directly shape their companions for the better.`
    }
  ],
  stats: [1,0,1,-1],
  demeanors: ['Confident', 'Lighthearted', 'Critical', 'Stern', 'Gentle', 'Warm'],
  history: [
    `How did you rise to lead a renowned squad or group?`,
    `Who was your closest friend and confidant in the squad?`,
    `Who never thought you deserved to lead the group?`,
    `What uniform, heirloom, or symbol do you carry as a talisman of the group?`,
  ],
  technique: {name: 'Slide Around the Blow', url: 'Playbooks/Pillar/SlideAroundTheBlow'},
  connections: [
    [``,`doesn't really respect my accomplishments; they probably need a lesson or two.`],
    [``, `seems like they would've been a good candidate to be a part of my squad; I'll look after them.`]
  ],
  growth_question: `Did you help a companion find a significant success with their 
  issues, or lead the group in finding a significant collective success?`,
  moment_of_balance: `Say something to each of 
  your companions so that in this moment, you overcome an 
  indomitable challenge, together.`
}