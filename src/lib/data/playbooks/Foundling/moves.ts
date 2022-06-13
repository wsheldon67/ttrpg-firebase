import type { Move } from "../moves";
import EmptyYourMind from './EmptyYourMind.svelte'
import BuildingBridges from './BuildingBridges.svelte'
import MartialSensitive from './MartialSensitive.svelte'
import TrustyTalisman from './TrustyTalisman.svelte'
import ThingsInCommon from './ThingsInCommon.svelte'


const moves:Move[] = [
  {
  name: `Empty Your Mind`,
  component: EmptyYourMind,
  stat: '',
  tags: ['Foundling']
},{
  name: `Building Bridges`,
  component: BuildingBridges,
  stat: '',
  tags: ['Foundling']
},{
  name: `Martial Sensitive`,
  component: MartialSensitive,
  stat: 'Harmony',
  tags: ['Foundling']
},{
  name: `Trusty Talisman`,
  component: TrustyTalisman,
  stat: '',
  tags: ['Foundling']
},{
  name: `Things In Common`,
  component: ThingsInCommon,
  stat: '',
  tags: ['Foundling']
},
]
export default moves