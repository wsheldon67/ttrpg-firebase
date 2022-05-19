<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte';
  import Tip from '../../_Tip.svelte'
  import StartingStats from '../_StartingStats.svelte'
import BadgeOfAuthority from './BadgeOfAuthority.svelte';
  import Blurb from './Blurb.svelte'
import CatchALiar from './CatchALiar.svelte';
import FurrowedBrow from './FurrowedBrow.svelte';
import MartyrComplex from './MartyrComplex.svelte';
  import SuspiciousMind from './SuspiciousMind.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title='The Guardian'>
  <Blurb />
  <Header h={2} {start} title='Principles'>
    <Tooltip tip='They mistrust others and the world. They can handle problems on their own, and are capable and confident.'>Self-Reliance</Tooltip>
      vs
    <Tooltip tip='They put faith in others and believe in a strong connection to others, sometimes trusting to the point of complacency.'>Trust</Tooltip>
  </Header>
  <StartingStats {start} stats={[-1,1,0,1]}/>
  <Header h={2} {start} title='Demeanor Options' hide>
    <ul class='list'>
      <li>Harsh</li><li>Serious</li><li>Polite</li>
      <li>Quiet</li><li>Suspicious</li><li>Cautious</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves' hide>
    <SuspiciousMind start={start+2} hide/>
    <BadgeOfAuthority start={start+2} hide/>
    <CatchALiar start={start+2} hide/>
    <FurrowedBrow start={start+2} hide/>
    <MartyrComplex start={start+2} hide/>
  </Header>
</Header>