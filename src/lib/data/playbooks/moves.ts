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


export interface Move {
  name: string,
  component: any,
  stat: string
}
interface Moves {
  [Playbook: string]: Move[]
}

export const moves:Moves = {
  Adamant, Bold, Guardian, Hammer, Icon, Idealist, Pillar, Prodigy, Rogue, Successor,
  Destined, Elder, Foundling, Razor
}

