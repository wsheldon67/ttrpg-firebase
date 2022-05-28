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
    stat: 'Focus'
  },{
    name: 'Badge Of Authority',
    component: BadgeOfAuthority,
    stat: 'Passion'
  },{
    name: 'Catch a Liar',
    component: CatchALiar,
    stat: 'Passion'
  },{
    name: 'Furrowed Brow',
    component: FurrowedBrow,
    stat: 'Focus'
  },{
    name: 'Martyr Complex',
    component: MartyrComplex,
    stat: ''
  }
]
export default moves