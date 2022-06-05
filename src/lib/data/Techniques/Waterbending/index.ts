import type { Technique } from '../index'
import BloodTwisting from './BloodTwisting.svelte'
import BreathOfIce from './BreathOfIce.svelte'
import CreepingIce from './CreepingIce.svelte'
import CrushingGripOfSeas from './CrushingGripOfSeas.svelte'
import FlowAsWater from './FlowAsWater.svelte'
import FreezeBlood from './FreezeBlood.svelte'
import IceGuantlet from './IceGuantlet.svelte'
import IcePrison from './IcePrison.svelte'
import Refresh from './Refresh.svelte'
import StreamTheWater from './StreamTheWater.svelte'
import SlipOverIce from './SlipOverIce.svelte'
import WaterCloak from './WaterCloak.svelte'
import WaterWhip from './WaterWhip.svelte'


export const Waterbending:Technique[] = [{
  name: "Blood Twisting",
  component: BloodTwisting,
  tags: ["Waterbending","Advance & Attack","Blood","Rare"]
},{
  name: "Breath Of Ice",
  component: BreathOfIce,
  tags: ["Waterbending","Defend & Maneuver"]
},{
  name: "Creeping Ice",
  component: CreepingIce,
  tags: ["Waterbending","Evade & Observe"]
},{
  name: "Crushing Grip Of Seas",
  component: CrushingGripOfSeas,
  tags: ["Waterbending","Advance & Attack","Rare"]
},{
  name: "Flow As Water",
  component: FlowAsWater,
  tags: ["Waterbending","Defend & Maneuver"]
},{
  name: "Freeze Blood",
  component: FreezeBlood,
  tags: ["Waterbending","Advance & Attack","Rare","Blood"]
},{
  name: "Ice Guantlet",
  component: IceGuantlet,
  tags: ["Waterbending","Defend & Maneuver"]
},{
  name: "Ice Prison",
  component: IcePrison,
  tags: ["Waterbending","Advance & Attack","Rare"]
},{
  name: "Refresh",
  component: Refresh,
  tags: ["Waterbending","Evade & Observe","Heal"]
},{
  name: "Stream The Water",
  component: StreamTheWater,
  tags: ["Waterbending","Advance & Attack"]
},{
  name: "Slip Over Ice",
  component: SlipOverIce,
  tags: ["Waterbending","Advance & Attack"]
},{
  name: "Water Cloak",
  component: WaterCloak,
  tags: ["Waterbending","Defend & Maneuver","Rare"]
},{
  name: "Water Whip",
  component: WaterWhip,
  tags: ["Waterbending","Defend & Maneuver"]
},]

export default Waterbending