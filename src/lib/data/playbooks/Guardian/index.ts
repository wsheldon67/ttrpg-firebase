import type { Playbook } from "../../playbooks";
import Divert from "../../Techniques/Playbook/Divert.svelte";

export const Guardian:Playbook = {
  name: 'Guardian',
  blurb: `defends someone close to them, steadfast and 
  watchful.`,
  motivation: `you want to be the first to see 
  danger coming and the last line of defense.`,
  principles: [
    {
      name: 'Self-Reliance',
      text: `They mistrust others and the world. They can handle problems on their own, and are capable and confident.`
    },{
      name: 'Trust',
      text: `They put faith in others and believe in a strong connection to others, sometimes trusting to the point of complacency.`
    }
  ],
  stats: [-1,1,0,1],
  history: [
    `What pushed you to assume responsibility for the people you care about?`,
    `Whom have you protected for so long… but maybe doesn't need you anymore?`,
    `Who used to be in your circle of trust before they betrayed you?`,
    `What tattered garment or adornment reminds you of those you protect… or failed to protect?`,
  ],
  technique: {name: 'Divert', tags: [], component: Divert},
  demeanors: ['Harsh', 'Serious', 'Polite', 'Quiet', 'Suspicious', 'Cautious'],
  connections: [
    ['',`is my ward - they need me to have their back, end of story.`],
    ['',`looks like they're more than capable without my help; I'm glad some of us can take care of ourselves.`]
  ],
  growth_question: `Did you pursue a desire or goal of your own, outside of 
  protecting others?`,
  moment_of_balance: `Put your own life on the line to defeat a 
  villain or danger that seems unstoppable.`
}