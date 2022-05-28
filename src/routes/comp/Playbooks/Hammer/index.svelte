<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { Hammer } from '$lib/data/playbooks/Hammer';
  import moves from '$lib/data/playbooks/Hammer/moves'
  import Playbook from '../_Playbook.svelte'

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Hammer} {moves}>

</Playbook>