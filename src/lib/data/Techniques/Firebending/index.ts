import type { Technique } from '../index'
import ASingleSpark from './ASingleSpark.svelte'
import ArcLightning from './ArcLightning.svelte'
import BreathOfFire from './BreathOfFire.svelte'
import ExplosiveBlast from './ExplosiveBlast.svelte'
import FireBlade from './FireBlade.svelte'
import FirePinwheel from './FirePinwheel.svelte'
import FireStream from './FireStream.svelte'
import FireWhip from './FireWhip.svelte'
import FlameKnives from './FlameKnives.svelte'
import JetStepping from './JetStepping.svelte'
import LightningBlast from './LightningBlast.svelte'
import SpiralFlareKick from './SpiralFlareKick.svelte'
import WallOfFieryBreath from './WallOfFieryBreath.svelte'


export const Firebending:Technique[] = [{
  name: "A Single Spark",
  component: ASingleSpark,
  tags: ["Firebending"]
},{
  name: "Arc Lightning",
  component: ArcLightning,
  tags: ["Firebending"]
},{
  name: "Breath Of Fire",
  component: BreathOfFire,
  tags: ["Firebending"]
},{
  name: "Explosive Blast",
  component: ExplosiveBlast,
  tags: ["Firebending"]
},{
  name: "Fire Blade",
  component: FireBlade,
  tags: ["Firebending"]
},{
  name: "Fire Pinwheel",
  component: FirePinwheel,
  tags: ["Firebending"]
},{
  name: "Fire Stream",
  component: FireStream,
  tags: ["Firebending"]
},{
  name: "Fire Whip",
  component: FireWhip,
  tags: ["Firebending"]
},{
  name: "Flame Knives",
  component: FlameKnives,
  tags: ["Firebending"]
},{
  name: "Jet Stepping",
  component: JetStepping,
  tags: ["Firebending"]
},{
  name: "Lightning Blast",
  component: LightningBlast,
  tags: ["Firebending"]
},{
  name: "Spiral Flare Kick",
  component: SpiralFlareKick,
  tags: ["Firebending"]
},{
  name: "Wall Of Fiery Breath",
  component: WallOfFieryBreath,
  tags: ["Firebending"]
},]

export default Firebending