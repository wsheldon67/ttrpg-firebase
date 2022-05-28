import { Adamant } from './playbooks/Adamant'
import { Bold } from './playbooks/Bold'
import { Guardian } from './playbooks/Guardian'
import { Hammer } from './playbooks/Hammer'
import { Icon } from './playbooks/Icon'
import { Idealist } from './playbooks/Idealist'
import { Pillar } from './playbooks/Pillar'
import { Prodigy } from './playbooks/Prodigy'
import { Rogue } from './playbooks/Rogue'
import { Successor } from './playbooks/Successor'
import { Destined } from './playbooks/Destined'
import { Elder } from './playbooks/Elder'
import { Foundling } from './playbooks/Foundling'
import { Razor } from './playbooks/Razor'


type Creativity = number
type Focus = number
type Harmony = number
type Passion = number

interface Principle {
  name: string, text: string
}

export interface Playbook {
  name: string
  blurb: string
  motivation: string
  demeanors: string[]
  principles: [Principle, Principle]
  stats: [Creativity, Focus, Harmony, Passion]
  history: [string, string, string, string]
  technique: {name:string, url:string}
  connections: [[string,string], [string,string]]
  moment_of_balance: string
  growth_question: string
}

interface Playbooks {
  [Playbook: string]: Playbook
}

export const playbook:Playbooks = {
  Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
  Destined, Elder, Foundling, Razor
}
export const playbooks:Playbook[] = [
  Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
  Destined, Elder, Foundling, Razor
]