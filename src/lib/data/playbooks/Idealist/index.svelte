<script lang='ts'>
  import Header from '$lib/c/Header.svelte'
  import Tooltip from '$lib/c/Tooltip.svelte'
  import { Idealist } from '$lib/data/playbooks/Idealist';
  import Playbook from '../_Playbook.svelte'
  import { onMount } from 'svelte';
  let moves

  onMount(async () => {
    const module = await import('$lib/data/playbooks/Idealist/moves')
    moves = module.default
  })

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Idealist} {moves}>

</Playbook>