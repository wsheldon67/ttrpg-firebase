import type { Technique } from '../index'
import PinpointAim from './PinpointAim.svelte'
import TagTeam from './TagTeam.svelte'
import Divert from './Divert.svelte'
import Overwhelm from './Overwhelm.svelte'
import WallofPerfection from './WallofPerfection.svelte'
import Disorient from './Disorient.svelte'
import SlideAroundtheBlow from './SlideAroundtheBlow.svelte'
import SteadyStance from './SteadyStance.svelte'
import SweepTheLeg from './SweepTheLeg.svelte'
import Break from './Break.svelte'
import Anticipate from './Anticipate.svelte'
import Patience from './Patience.svelte'
import FeelTheFlow from './FeelTheFlow.svelte'
import Lure from './Lure.svelte'


export const Playbook:Technique[] = [{
  name: "Pinpoint Aim",
  component: PinpointAim,
  tags: ["Playbook"]
},{
  name: "Tag Team",
  component: TagTeam,
  tags: ["Playbook"]
},{
  name: "Divert",
  component: Divert,
  tags: ["Playbook"]
},{
  name: "Overwhelm",
  component: Overwhelm,
  tags: ["Playbook"]
},{
  name: "Wall of Perfection",
  component: WallofPerfection,
  tags: ["Playbook"]
},{
  name: "Disorient",
  component: Disorient,
  tags: ["Playbook"]
},{
  name: "Slide Around the Blow",
  component: SlideAroundtheBlow,
  tags: ["Playbook"]
},{
  name: "Steady Stance",
  component: SteadyStance,
  tags: ["Playbook"]
},{
  name: "Sweep The Leg",
  component: SweepTheLeg,
  tags: ["Playbook"]
},{
  name: "Break",
  component: Break,
  tags: ["Playbook"]
},{
  name: "Anticipate",
  component: Anticipate,
  tags: ["Playbook"]
},{
  name: "Patience",
  component: Patience,
  tags: ["Playbook"]
},{
  name: "Feel The Flow",
  component: FeelTheFlow,
  tags: ["Playbook"]
},{
  name: "Lure",
  component: Lure,
  tags: ["Playbook"]
},]

export default Playbook