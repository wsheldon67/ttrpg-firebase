<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { Successor } from '$lib/data/playbooks/Successor';
  import moves from '$lib/data/playbooks/Successor/moves'
  import Playbook from '../_Playbook.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Successor} {moves}>

</Playbook>