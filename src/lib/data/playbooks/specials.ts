import TheLodestar from "./Adamant/TheLodestar.svelte"
import LegacyOfExcellence from "./Bold/LegacyOfExcellence.svelte"
import MarkedByFate from "./Destined/MarkedByFate.svelte"
import WisdomOfTheAges from "./Elder/WisdomOfTheAges.svelte"
import DoubleHeritage from "./Foundling/DoubleHeritage.svelte"
import ProtectorsBurden from "./Guardian/ProtectorsBurden.svelte"
import BringingThemDown from "./Hammer/BringingThemDown.svelte"
import BurdenAndTradition from "./Icon/BurdenAndTradition.svelte"
import NeverTurnMyBack from "./Idealist/NeverTurnMyBack.svelte"
import SquadLeader from "./Pillar/SquadLeader.svelte"
import ExtraordinarySkill from "./Prodigy/ExtraordinarySkill.svelte"
import MakingAmends from "./Razor/MakingAmends.svelte"
import BadHabits from "./Rogue/BadHabits.svelte"
import ATaintedPast from "./Successor/ATaintedPast.svelte"

export interface Special {
  name: string
  component: any
}

export const specials:{[playbook: string]: Special} = {
  Adamant: {name: 'The Lodestar', component: TheLodestar},
  Bold: {name: 'Legacy of Excellence', component: LegacyOfExcellence},
  Destined: {name: 'Marked by Fate', component: MarkedByFate},
  Elder: {name: 'Wisdom of the Ages', component: WisdomOfTheAges},
  Foundling: {name: 'Double Heritage', component: DoubleHeritage},
  Guardian: {name: "Protector's Burden", component: ProtectorsBurden},
  Hammer: {name: 'Bringing Them Down', component: BringingThemDown},
  Icon: {name: 'Burden & Tradition', component: BurdenAndTradition},
  Idealist: {name: 'Never Turn My Back', component: NeverTurnMyBack},
  Pillar: {name: 'Squad Leader', component: SquadLeader},
  Prodigy: {name: 'Extraordinary Skill', component: ExtraordinarySkill},
  Razor: {name: 'Making Amends', component: MakingAmends},
  Rogue: {name: 'Bad Habits', component: BadHabits},
  Successor: {name: 'A Tainted Past', component: ATaintedPast}
}