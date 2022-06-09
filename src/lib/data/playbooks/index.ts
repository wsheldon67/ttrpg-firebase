import { Adamant } from './Adamant'
import { Bold } from './Bold'
import { Guardian } from './Guardian'
import { Hammer } from './Hammer'
import { Icon } from './Icon'
import { Idealist } from './Idealist'
import { Pillar } from './Pillar'
import { Prodigy } from './Prodigy'
import { Rogue } from './Rogue'
import { Successor } from './Successor'
import { Destined } from './Destined'
import { Elder } from './Elder'
import { Foundling } from './Foundling'
import { Razor } from './Razor'


type Creativity = number
type Focus = number
type Harmony = number
type Passion = number

interface Principle {
  name: string, text: string
}
export type Stats = [Creativity, Focus, Harmony, Passion]
export interface Playbook {
  name: string
  blurb: string
  motivation: string
  demeanors: string[]
  principles: [Principle, Principle]
  stats: Stats
  history_questions: string[]
  history: string[]
  technique: {name:string, tags:string[], component:any}
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