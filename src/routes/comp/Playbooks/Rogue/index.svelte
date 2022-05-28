<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { Rogue } from '$lib/data/playbooks/Rogue';
  import moves from '$lib/data/playbooks/Rogue/moves'
  import Playbook from '../_Playbook.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Rogue} {moves}>

</Playbook>