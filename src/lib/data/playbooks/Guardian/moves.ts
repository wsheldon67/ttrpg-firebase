import type { Move } from "../moves"
import SuspiciousMind from './SuspiciousMind.svelte'
import BadgeOfAuthority from './BadgeOfAuthority.svelte'
import CatchALiar from './CatchALiar.svelte'
import FurrowedBrow from './FurrowedBrow.svelte'
import MartyrComplex from './MartyrComplex.svelte'

const moves:Move[] = [
  {
    name: 'Suspicious Mind',
    component: SuspiciousMind,
    stat: 'Focus',
    tags: ['Bold']
  },{
    name: 'Badge Of Authority',
    component: BadgeOfAuthority,
    stat: 'Passion',
    tags: ['Bold']
  },{
    name: 'Catch a Liar',
    component: CatchALiar,
    stat: 'Passion',
    tags: ['Bold']
  },{
    name: 'Furrowed Brow',
    component: FurrowedBrow,
    stat: 'Focus',
    tags: ['Bold']
  },{
    name: 'Martyr Complex',
    component: MartyrComplex,
    stat: '',
    tags: ['Bold']
  }
]
export default moves