import type { Move } from "../moves";
import CallFromAfar from './CallFromAfar.svelte'
import EyesoftheSoul from './EyesoftheSoul.svelte'
import Peacemaker from './Peacemaker.svelte'
import MoreThanFatesPlaythings from './MoreThanFatesPlaythings.svelte'
import EchoesofLegend from './EchoesofLegend.svelte'


const moves:Move[] = [
  {
  name: `Call From Afar`,
  component: CallFromAfar,
  stat: 'Harmony',
  tags: ['Destined']
},{
  name: `Eyes of the Soul`,
  component: EyesoftheSoul,
  stat: 'Creativity',
  tags: ['Destined', 'Angry']
},{
  name: `Peacemaker`,
  component: Peacemaker,
  stat: 'Harmony',
  tags: ['Destined', 'Troubled']
},{
  name: `More Than Fate's Playthings`,
  component: MoreThanFatesPlaythings,
  stat: '',
  tags: ['Destined', 'Afraid']
},{
  name: `Echoes of Legend`,
  component: EchoesofLegend,
  stat: '',
  tags: ['Destined']
},
]
export default moves