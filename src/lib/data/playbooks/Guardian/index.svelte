<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import { Guardian } from '$lib/data/playbooks/Guardian';
  import Playbook from '../_Playbook.svelte';
  import { onMount } from 'svelte';
  let moves

  onMount(async () => {
    const module = await import('$lib/data/playbooks/Guardian/moves')
    moves = module.default
  })

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Guardian} {moves}>

</Playbook>