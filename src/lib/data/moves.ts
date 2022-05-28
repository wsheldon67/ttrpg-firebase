import ThisWasAVictory from '../../routes/comp/Playbooks/Adamant/ThisWasAVictory.svelte'
import TakesOneToKnowOne from '../../routes/comp/Playbooks/Adamant/TakesOneToKnowOne.svelte'
import NoTimeForFeelings from '../../routes/comp/Playbooks/Adamant/NoTimeForFeelings.svelte'
import IDontHateYou from '../../routes/comp/Playbooks/Adamant/IDontHateYou.svelte'
import DrivenByJustice from '../../routes/comp/Playbooks/Adamant/DrivenByJustice.svelte'
import BestFriend from '../../routes/comp/Playbooks/Bold/BestFriend.svelte'
import HeresThePlan from '../../routes/comp/Playbooks/Bold/HeresThePlan.svelte'
import NotDoneYet from '../../routes/comp/Playbooks/Bold/NotDoneYet.svelte'
import YouMissedSomething from '../../routes/comp/Playbooks/Bold/YouMissedSomething.svelte'
import StraightShooter from '../../routes/comp/Playbooks/Bold/StraightShooter.svelte'
import SuspiciousMind from '../../routes/comp/Playbooks/Guardian/SuspiciousMind.svelte'
import BadgeOfAuthority from '../../routes/comp/Playbooks/Guardian/BadgeOfAuthority.svelte'
import CatchALiar from '../../routes/comp/Playbooks/Guardian/CatchALiar.svelte'
import FurrowedBrow from '../../routes/comp/Playbooks/Guardian/FurrowedBrow.svelte'
import MartyrComplex from '../../routes/comp/Playbooks/Guardian/MartyrComplex.svelte'
import FueledByAnger from '../../routes/comp/Playbooks/Hammer/FueledByAnger.svelte'
import WallsCantHoldMe from '../../routes/comp/Playbooks/Hammer/WallsCantHoldMe.svelte'
import PunchWhereItMatters from '../../routes/comp/Playbooks/Hammer/PunchWhereItMatters.svelte'
import ComprehendYourFoe from '../../routes/comp/Playbooks/Hammer/ComprehendYourFoe.svelte'
import StandAndFight from '../../routes/comp/Playbooks/Hammer/StandAndFight.svelte'

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

