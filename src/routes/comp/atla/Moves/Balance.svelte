<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tip from '../_Tip.svelte'
import CallSomeoneOut from './CallSomeoneOut.svelte'
import DenyACallout from './DenyACallout.svelte'
import LiveUpToYourPrinciple from './LiveUpToYourPrinciple.svelte'
import LoseYourBalance from './LoseYourBalance.svelte'
import ResistShiftingYourBalance from './ResistShiftingYourBalance.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='Balance Moves'>
  <LiveUpToYourPrinciple start={start+1} hide/>
  <CallSomeoneOut start={start+1} hide/>
  <DenyACallout start={start+1} hide/>
  <ResistShiftingYourBalance start={start+1} hide/>
  <LoseYourBalance start={start+1} />
</Header>