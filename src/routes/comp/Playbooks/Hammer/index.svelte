<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
import { Hammer } from '$lib/data/playbooks/Hammer';
  import Tip from '../../_Tip.svelte'
import Playbook from '../_Playbook.svelte'
import ComprehendYourFoe from './ComprehendYourFoe.svelte'
import FueledByAnger from './FueledByAnger.svelte'
import PunchWhereItMatters from './PunchWhereItMatters.svelte'
import StandAndFight from './StandAndFight.svelte'
import WallsCantHoldMe from './WallsCantHoldMe.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Hammer}>
  <Header h={2} {start} title='Moves'>
    <FueledByAnger start={start+2} />
    <WallsCantHoldMe start={start+2} />
    <PunchWhereItMatters start={start+2} />
    <ComprehendYourFoe start={start+2} />
    <StandAndFight start={start+2} />
  </Header>
</Playbook>