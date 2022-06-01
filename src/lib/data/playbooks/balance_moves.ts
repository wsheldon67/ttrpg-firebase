import type { Move } from "./moves"
import CallSomeoneOut from '../../../routes/comp/Moves/CallSomeoneOut.svelte'
import DenyACallout from '../../../routes/comp/Moves/DenyACallout.svelte'
import LiveUpToYourPrinciple from '../../../routes/comp/Moves/LiveUpToYourPrinciple.svelte'
import LoseYourBalance from '../../../routes/comp/Moves/LoseYourBalance.svelte'
import ResistShiftingYourBalance from '../../../routes/comp/Moves/ResistShiftingYourBalance.svelte'

export const Balance:Move[] = [
  {
    name: 'Live Up to Your Principle',
    component: LiveUpToYourPrinciple,
    stat: 'Principle',
    tags: ['Balance']
  },{
    name: 'Call Someone Out',
    component: CallSomeoneOut,
    stat: 'Their Principle',
    tags: ['Balance', 'Afraid']
  },{
    name: 'Deny a Callout',
    component: DenyACallout,
    stat: 'Principle',
    tags: ['Balance', '-Guilty']
  },{
    name: 'Resist Shifting Your Balance',
    component: ResistShiftingYourBalance,
    stat: 'No Stat',
    tags: ['Balance', 'Insecure']
  },{
    name: 'Lose Your Balance',
    component: LoseYourBalance,
    stat: '',
    tags: ['Balance']
  }
]