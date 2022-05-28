import ThisWasAVictory from '../../comp/atla/Playbooks/Adamant/ThisWasAVictory.svelte'
import TakesOneToKnowOne from '../../comp/atla/Playbooks/Adamant/TakesOneToKnowOne.svelte'
import NoTimeForFeelings from '../../comp/atla/Playbooks/Adamant/NoTimeForFeelings.svelte'
import IDontHateYou from '../../comp/atla/Playbooks/Adamant/IDontHateYou.svelte'
import DrivenByJustice from '../../comp/atla/Playbooks/Adamant/DrivenByJustice.svelte'
import BestFriend from '../../comp/atla/Playbooks/Bold/BestFriend.svelte'
import HeresThePlan from '../../comp/atla/Playbooks/Bold/HeresThePlan.svelte'
import NotDoneYet from '../../comp/atla/Playbooks/Bold/NotDoneYet.svelte'
import YouMissedSomething from '../../comp/atla/Playbooks/Bold/YouMissedSomething.svelte'
import StraightShooter from '../../comp/atla/Playbooks/Bold/StraightShooter.svelte'
import SuspiciousMind from '../../comp/atla/Playbooks/Guardian/SuspiciousMind.svelte'
import BadgeOfAuthority from '../../comp/atla/Playbooks/Guardian/BadgeOfAuthority.svelte'
import CatchALiar from '../../comp/atla/Playbooks/Guardian/CatchALiar.svelte'
import FurrowedBrow from '../../comp/atla/Playbooks/Guardian/FurrowedBrow.svelte'
import MartyrComplex from '../../comp/atla/Playbooks/Guardian/MartyrComplex.svelte'
import FueledByAnger from '../../comp/atla/Playbooks/Hammer/FueledByAnger.svelte'
import WallsCantHoldMe from '../../comp/atla/Playbooks/Hammer/WallsCantHoldMe.svelte'
import PunchWhereItMatters from '../../comp/atla/Playbooks/Hammer/PunchWhereItMatters.svelte'
import ComprehendYourFoe from '../../comp/atla/Playbooks/Hammer/ComprehendYourFoe.svelte'
import StandAndFight from '../../comp/atla/Playbooks/Hammer/StandAndFight.svelte'

interface Moves {
  [playbook: string]: {
    name: string,
    component: any,
    stat: string
  }[]
}

export const moves:Moves = {
  Adamant: [
    {
      name: 'This Was a Victory',
      component: ThisWasAVictory,
      stat: 'Passion'
    },{
      name: 'Takes One to Know One',
      component: TakesOneToKnowOne,
      stat: 'Focus'
    },{
      name: 'No Time For Feelings',
      component: NoTimeForFeelings,
      stat: ''
    },{
      name: "I Don't Hate You",
      component: IDontHateYou,
      stat: 'Passion'
    },{
      name: 'Driven By Justice',
      component: DrivenByJustice,
      stat: 'Passion'
    }
  ],
  Bold: [
    {
      name: 'Best Friend',
      component: BestFriend,
      stat: 'Creativity'
    },{
      name: "Here's The Plan",
      component: HeresThePlan,
      stat: ''
    },{
      name: 'Not Done Yet!',
      component: NotDoneYet,
      stat: ''
    },{
      name: 'You Missed Something',
      component: YouMissedSomething,
      stat: 'Focus'
    },{
      name: 'Straight Shooter',
      component: StraightShooter,
      stat: 'Focus'
    }
  ],
  Guardian: [
    {
      name: 'Suspicious Mind',
      component: SuspiciousMind,
      stat: 'Focus'
    },{
      name: 'Badge Of Authority',
      component: BadgeOfAuthority,
      stat: 'Passion'
    },{
      name: 'Catch a Liar',
      component: CatchALiar,
      stat: 'Passion'
    },{
      name: 'Furrowed Brow',
      component: FurrowedBrow,
      stat: 'Focus'
    },{
      name: 'Martyr Complex',
      component: MartyrComplex,
      stat: ''
    }
  ],
  Hammer: [
    {
      name: 'Fueled by Anger',
      component: FueledByAnger,
      stat: 'Passion'
    },{
      name: "Walls Can't Hold Me",
      component: WallsCantHoldMe,
      stat: 'Passion'
    },{
      name: 'Punch Where It Matters',
      component: PunchWhereItMatters,
      stat: 'Creativity'
    },{
      name: 'Comprehend Your Foe',
      component: ComprehendYourFoe,
      stat: 'Creativity'
    },{
      name: 'Stand and Fight!',
      component: StandAndFight,
      stat: 'Passion'
    }
  ]
}

