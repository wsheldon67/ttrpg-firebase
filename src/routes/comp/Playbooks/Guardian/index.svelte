<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte';
import { Guardian } from '$lib/data/playbooks/Guardian';
  import Tip from '../../_Tip.svelte'
import Playbook from '../_Playbook.svelte';
import BadgeOfAuthority from './BadgeOfAuthority.svelte';
import CatchALiar from './CatchALiar.svelte';
import FurrowedBrow from './FurrowedBrow.svelte';
import MartyrComplex from './MartyrComplex.svelte';
  import SuspiciousMind from './SuspiciousMind.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Guardian}>
  <Header h={2} {start} title='Moves' hide>
    <SuspiciousMind start={start+2} hide/>
    <BadgeOfAuthority start={start+2} hide/>
    <CatchALiar start={start+2} hide/>
    <FurrowedBrow start={start+2} hide/>
    <MartyrComplex start={start+2} hide/>
  </Header>
</Playbook>