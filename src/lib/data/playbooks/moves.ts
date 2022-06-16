import Adamant from './Adamant/moves'
import Bold from './Bold/moves'
import Guardian from './Guardian/moves'
import Hammer from './Hammer/moves'
import Icon from './Icon/moves'
import Idealist from './Idealist/moves'
import Pillar from './Pillar/moves'
import Prodigy from './Prodigy/moves'
import Rogue from './Rogue/moves'
import Successor from './Successor/moves'
import Destined from './Destined/moves'
import Elder from './Elder/moves'
import Foundling from './Foundling/moves'
import Razor from './Razor/moves'
import type { Condition } from '../character'


export interface Move {
  name: string,
  component: any,
  stat: string,
  tags: string[],
  conditions?: {name:Condition, mod:number}[]
}
interface Moves {
  [Playbook: string]: Move[]
}

export const moves:Moves = {
  Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
  Destined, Elder, Foundling, Razor
}

export const all_moves:Move[] = [
  ...Adamant, ...Bold, ...Guardian, ...Hammer, ...Icon, ...Idealist, ...Pillar, ...Prodigy, ...Rogue, ...Successor,
  ...Destined, ...Elder, ...Foundling, ...Razor
]