<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import Tip from '../../_Tip.svelte'
  import StartingStats from '../_StartingStats.svelte'
  import Blurb from './Blurb.svelte'
import ComprehendYourFoe from './ComprehendYourFoe.svelte'
import FueledByAnger from './FueledByAnger.svelte'
import PunchWhereItMatters from './PunchWhereItMatters.svelte'
import StandAndFight from './StandAndFight.svelte'
import WallsCantHoldMe from './WallsCantHoldMe.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Header h={1} {start} {hide} title=''>
  <Blurb />
  <Header h={2} {start} title='Principles'>
    <Tooltip tip='The desire to smash their way through problems and foes. The use of force has an unfortunate tendency to leave things broken and shattered.'>Force</Tooltip>
      vs
    <Tooltip tip="The belief that the world is worth saving, protecting, and serving... and their desire to pull their punches so they don't smash all of it.">Care</Tooltip>
  </Header>
  <StartingStats {start} stats={[1,-1,0,1]}/>
  <Header h={2} {start} title='Demeanor Options'>
    <ul class='list'>
      <li>Playful</li><li>Blunt</li><li>Quiet</li>
      <li>Loud</li><li>Excessive</li><li>Determined</li>
    </ul>
  </Header>
  <Header h={2} {start} title='Moves'>
    <FueledByAnger start={start+2} />
    <WallsCantHoldMe start={start+2} />
    <PunchWhereItMatters start={start+2} />
    <ComprehendYourFoe start={start+2} />
    <StandAndFight start={start+2} />
  </Header>
</Header>