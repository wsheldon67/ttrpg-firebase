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
  tags: ["Technology"]
},{
  name: "Blinded By Science",
  component: BlindedByScience,
  tags: ["Technology"]
},{
  name: "Collect Material",
  component: CollectMaterial,
  tags: ["Technology"]
},{
  name: "Entangler",
  component: Entangler,
  tags: ["Technology"]
},{
  name: "Full Power Attack",
  component: FullPowerAttack,
  tags: ["Technology"]
},{
  name: "Jolt",
  component: Jolt,
  tags: ["Technology"]
},{
  name: "Jury Rig",
  component: JuryRig,
  tags: ["Technology"]
},{
  name: "Pinpoint Flaws",
  component: PinpointFlaws,
  tags: ["Technology"]
},{
  name: "Plant Trap",
  component: PlantTrap,
  tags: ["Technology"]
},{
  name: "Rebuild",
  component: Rebuild,
  tags: ["Technology"]
},{
  name: "Smoke Bomb",
  component: SmokeBomb,
  tags: ["Technology"]
},{
  name: "Wind Up",
  component: WindUp,
  tags: ["Technology"]
},]

export default Technology