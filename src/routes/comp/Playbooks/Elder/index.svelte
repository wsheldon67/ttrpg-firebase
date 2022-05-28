<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { Elder } from '$lib/data/playbooks/Elder';
  import moves from '$lib/data/playbooks/Elder/moves'
  import Playbook from '../_Playbook.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Elder} {moves}>

</Playbook>