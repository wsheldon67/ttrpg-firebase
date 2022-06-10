<script lang='ts'>
  import Playbook from '../_Playbook.svelte'
  import { Adamant } from '$lib/data/playbooks/Adamant'
  import { onMount } from 'svelte';
  let moves

  onMount(async () => {
    const module = await import('$lib/data/playbooks/Adamant/moves')
    moves = module.default
  })

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Adamant} {moves}>

</Playbook>