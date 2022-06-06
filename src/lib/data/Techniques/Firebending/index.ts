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
  tags: ["Firebending", "Evade & Observe"]
},{
  name: "Arc Lightning",
  component: ArcLightning,
  tags: ["Firebending", "Evade & Observe", "Lightning", "Rare"]
},{
  name: "Breath Of Fire",
  component: BreathOfFire,
  tags: ["Firebending", "Advance & Attack"]
},{
  name: "Explosive Blast",
  component: ExplosiveBlast,
  tags: ["Firebending", "Advance & Attack", "Combustion", "Rare"]
},{
  name: "Fire Blade",
  component: FireBlade,
  tags: ["Firebending", "Advance & Attack"]
},{
  name: "Fire Pinwheel",
  component: FirePinwheel,
  tags: ["Firebending", "Advance & Attack", "Rare"]
},{
  name: "Fire Stream",
  component: FireStream,
  tags: ["Firebending", "Defend & Maneuver"]
},{
  name: "Fire Whip",
  component: FireWhip,
  tags: ["Firebending", "Defend & Maneuver"]
},{
  name: "Flame Knives",
  component: FlameKnives,
  tags: ["Firebending", "Advance & Attack"]
},{
  name: "Jet Stepping",
  component: JetStepping,
  tags: ["Firebending", "Evade & Observe"]
},{
  name: "Lightning Blast",
  component: LightningBlast,
  tags: ["Firebending", "Advance & Attack", "Lightning", "Rare"]
},{
  name: "Spiral Flare Kick",
  component: SpiralFlareKick,
  tags: ["Firebending", "Advance & Attack", "Rare"]
},{
  name: "Wall Of Fiery Breath",
  component: WallOfFieryBreath,
  tags: ["Firebending", "Defend & Maneuver"]
},]

export default Firebending