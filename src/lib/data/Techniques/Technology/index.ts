import type { Technique } from '../index'
import BetterFasterStronger from './BetterFasterStronger.svelte'
import BlindedByScience from './BlindedByScience.svelte'
import CollectMaterial from './CollectMaterial.svelte'
import Entangler from './Entangler.svelte'
import FullPowerAttack from './FullPowerAttack.svelte'
import Jolt from './Jolt.svelte'
import JuryRig from './JuryRig.svelte'
import PinpointFlaws from './PinpointFlaws.svelte'
import PlantTrap from './PlantTrap.svelte'
import Rebuild from './Rebuild.svelte'
import SmokeBomb from './SmokeBomb.svelte'
import WindUp from './WindUp.svelte'


export const Technology:Technique[] = [{
  name: "Better Faster Stronger",
  component: BetterFasterStronger,
  tags: ["Technology", "Defend & Maneuver"]
},{
  name: "Blinded By Science",
  component: BlindedByScience,
  tags: ["Technology", "Advance & Attack"]
},{
  name: "Collect Material",
  component: CollectMaterial,
  tags: ["Technology", "Evade & Observe"]
},{
  name: "Entangler",
  component: Entangler,
  tags: ["Technology", "Advance & Attack"]
},{
  name: "Full Power Attack",
  component: FullPowerAttack,
  tags: ["Technology", "Advance & Attack", "Rare"]
},{
  name: "Jolt",
  component: Jolt,
  tags: ["Technology", "Advance & Attack"]
},{
  name: "Jury Rig",
  component: JuryRig,
  tags: ["Technology", "Advance & Attack", "Rare"]
},{
  name: "Pinpoint Flaws",
  component: PinpointFlaws,
  tags: ["Technology", "Evade & Observe"]
},{
  name: "Plant Trap",
  component: PlantTrap,
  tags: ["Technology", "Evade & Observe"]
},{
  name: "Rebuild",
  component: Rebuild,
  tags: ["Technology", "Defend & Maneuver"]
},{
  name: "Smoke Bomb",
  component: SmokeBomb,
  tags: ["Technology", "Defend & Maneuver"]
},{
  name: "Wind Up",
  component: WindUp,
  tags: ["Technology", "Defend & Maneuver", "Rare"]
},]

export default Technology