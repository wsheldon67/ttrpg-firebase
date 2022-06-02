<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { Hammer } from '$lib/data/playbooks/Hammer';
  import Playbook from '../_Playbook.svelte'
  import { onMount } from 'svelte';
  let moves

  onMount(async () => {
    const module = await import('$lib/data/playbooks/Hammer/moves')
    moves = module.default
  })

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Hammer} {moves}>

</Playbook>