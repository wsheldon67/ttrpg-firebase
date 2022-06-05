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
  tags: ["Earthbending"]
},{
  name: "Dust Stepping",
  component: DustStepping,
  tags: ["Earthbending"]
},{
  name: "Earth Armor",
  component: EarthArmor,
  tags: ["Earthbending"]
},{
  name: "Earth Guantlet",
  component: EarthGuantlet,
  tags: ["Earthbending"]
},{
  name: "Earth Launch",
  component: EarthLaunch,
  tags: ["Earthbending"]
},{
  name: "Earth Sinking",
  component: EarthSinking,
  tags: ["Earthbending"]
},{
  name: "Eat Dirt",
  component: EatDirt,
  tags: ["Earthbending"]
},{
  name: "Ground Shift",
  component: GroundShift,
  tags: ["Earthbending"]
},{
  name: "Lava Star",
  component: LavaStar,
  tags: ["Earthbending"]
},{
  name: "Metal Bindings",
  component: MetalBindings,
  tags: ["Earthbending"]
},{
  name: "Rock Column",
  component: RockColumn,
  tags: ["Earthbending"]
},{
  name: "Stone Shield",
  component: StoneShield,
  tags: ["Earthbending"]
},{
  name: "Thick Mud",
  component: ThickMud,
  tags: ["Earthbending"]
},]

export default Earthbending