import type { Technique } from '../index'
import PinpointAim from './PinpointAim.svelte'
import TagTeam from './TagTeam.svelte'
import Divert from './Divert.svelte'
import Overwhelm from './Overwhelm.svelte'
import WallofPerfection from './WallOfPerfection.svelte'
import Disorient from './Disorient.svelte'
import SlideAroundtheBlow from './SlideAroundTheBlow.svelte'
import SteadyStance from './SteadyStance.svelte'
import SweepTheLeg from './SweepTheLeg.svelte'
import Break from './Break.svelte'
import Anticipate from './Anticipate.svelte'
import Patience from './Patience.svelte'
import FeelTheFlow from './FeelTheFlow.svelte'
import Lure from './Lure.svelte'


export const Playbook:Technique[] = [
  {
    name: "Pinpoint Aim",
    component: PinpointAim,
    tags: ["Playbook", "Defend & Maneuver"]
  },{
    name: "Tag Team",
    component: TagTeam,
    tags: ["Playbook", "Defend & Maneuver"]
  },{
    name: "Divert",
    component: Divert,
    tags: ["Playbook", "Defend & Maneuver"]
  },{
    name: "Overwhelm",
    component: Overwhelm,
    tags: ["Playbook", "Advance & Attack"]
  },{
    name: "Wall of Perfection",
    component: WallofPerfection,
    tags: ["Playbook", "Defend & Maneuver"]
  },{
    name: "Disorient",
    component: Disorient,
    tags: ["Playbook", "Advance & Attack"]
  },{
    name: "Slide Around the Blow",
    component: SlideAroundtheBlow,
    tags: ["Playbook", "Evade & Observe"]
  },{
    name: "Steady Stance",
    component: SteadyStance,
    tags: ["Playbook", "Defend & Maneuver"]
  },{
    name: "Sweep The Leg",
    component: SweepTheLeg,
    tags: ["Playbook", "Advance & Attack"]
  },{
    name: "Break",
    component: Break,
    tags: ["Playbook", "Evade & Observe"]
  },{
    name: "Anticipate",
    component: Anticipate,
    tags: ["Playbook", "Evade & Observe"]
  },{
    name: "Patience",
    component: Patience,
    tags: ["Playbook", "Evade & Observe"]
  },{
    name: "Feel The Flow",
    component: FeelTheFlow,
    tags: ["Playbook", "Evade & Observe"]
  },{
    name: "Lure",
    component: Lure,
    tags: ["Playbook", "Defend & Maneuver"]
  }
]

export default Playbook