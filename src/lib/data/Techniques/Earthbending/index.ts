import type { Technique } from '../index'
import DetectTheHeavyStep from './DetectTheHeavyStep.svelte'
import DustStepping from './DustStepping.svelte'
import EarthArmor from './EarthArmor.svelte'
import EarthGuantlet from './EarthGuantlet.svelte'
import EarthLaunch from './EarthLaunch.svelte'
import EarthSinking from './EarthSinking.svelte'
import EatDirt from './EatDirt.svelte'
import GroundShift from './GroundShift.svelte'
import LavaStar from './LavaStar.svelte'
import MetalBindings from './MetalBindings.svelte'
import RockColumn from './RockColumn.svelte'
import StoneShield from './StoneShield.svelte'
import ThickMud from './ThickMud.svelte'


export const Earthbending:Technique[] = [{
  name: "Detect The Heavy Step",
  component: DetectTheHeavyStep,
  tags: ["Earthbending", "Defend & Maneuver", "Seismic Sense", "Rare"]
},{
  name: "Dust Stepping",
  component: DustStepping,
  tags: ["Earthbending", "Defend & Maneuver"]
},{
  name: "Earth Armor",
  component: EarthArmor,
  tags: ["Earthbending", "Defend & Maneuver"]
},{
  name: "Earth Guantlet",
  component: EarthGuantlet,
  tags: ["Earthbending", "Advance & Attack"]
},{
  name: "Earth Launch",
  component: EarthLaunch,
  tags: ["Earthbending", "Defend & Maneuver"]
},{
  name: "Earth Sinking",
  component: EarthSinking,
  tags: ["Earthbending", "Advance & Attack", "Rare"]
},{
  name: "Eat Dirt",
  component: EatDirt,
  tags: ["Earthbending", "Evade & Observe"]
},{
  name: "Ground Shift",
  component: GroundShift,
  tags: ["Earthbending", "Evade & Observe"]
},{
  name: "Lava Star",
  component: LavaStar,
  tags: ["Earthbending", "Defend & Maneuver", "Lava", "Rare"]
},{
  name: "Metal Bindings",
  component: MetalBindings,
  tags: ["Earthbending", "Evade & Observe", "Metal", "Rare"]
},{
  name: "Rock Column",
  component: RockColumn,
  tags: ["Earthbending", "Advance & Attack"]
},{
  name: "Stone Shield",
  component: StoneShield,
  tags: ["Earthbending", "Defend & Maneuver", "Rare"]
},{
  name: "Thick Mud",
  component: ThickMud,
  tags: ["Earthbending", "Evade & Observe"]
},]

export default Earthbending