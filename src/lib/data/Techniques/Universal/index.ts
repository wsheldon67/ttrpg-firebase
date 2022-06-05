import type { Technique } from '../index'
import AttackWeakness from './AttackWeakness.svelte'
import Charge from './Charge.svelte'
import DuckAndTwist from './DuckAndTwist.svelte'
import ForcefulBlow from './ForcefulBlow.svelte'
import FuriousAssault from './FuriousAssault.svelte'
import Pounce from './Pounce.svelte'
import Protect from './Protect.svelte'
import RapidAssessment from './RapidAssessment.svelte'
import SeekVulnerabilities from './SeekVulnerabilities.svelte'
import SenseEnvironment from './SenseEnvironment.svelte'
import StandStrong from './StandStrong.svelte'
import SuckItUp from './SuckItUp.svelte'
import TakeCover from './TakeCover.svelte'


export const Universal:Technique[] = [{
  name: "Attack Weakness",
  component: AttackWeakness,
  tags: ["Universal","Advance & Attack"]
},{
  name: "Charge",
  component: Charge,
  tags: ["Universal","Advance & Attack"]
},{
  name: "Duck And Twist",
  component: DuckAndTwist,
  tags: ["Universal","Evade & Observe"]
},{
  name: "Forceful Blow",
  component: ForcefulBlow,
  tags: ["Universal","Advance & Attack"]
},{
  name: "Furious Assault",
  component: FuriousAssault,
  tags: ["Universal","Advance & Attack","Rare"]
},{
  name: "Pounce",
  component: Pounce,
  tags: ["Universal","Advance & Attack","Rare"]
},{
  name: "Protect",
  component: Protect,
  tags: ["Universal","Defend & Maneuver"]
},{
  name: "Rapid Assessment",
  component: RapidAssessment,
  tags: ["Universal","Evade & Observe"]
},{
  name: "Seek Vulnerabilities",
  component: SeekVulnerabilities,
  tags: ["Universal","Evade & Observe"]
},{
  name: "Sense Environment",
  component: SenseEnvironment,
  tags: ["Universal","Evade & Observe"]
},{
  name: "Stand Strong",
  component: StandStrong,
  tags: ["Universal","Defend & Maneuver"]
},{
  name: "Suck It Up",
  component: SuckItUp,
  tags: ["Universal","Defend & Maneuver"]
},{
  name: "Take Cover",
  component: TakeCover,
  tags: ["Universal","Defend & Maneuver"]
},]

export default Universal