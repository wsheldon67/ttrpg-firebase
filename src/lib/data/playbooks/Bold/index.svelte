<script lang='ts'>
  import Playbook from '../_Playbook.svelte'
  import { Bold } from '$lib/data/playbooks/Bold'
  import { onMount } from 'svelte';
  let moves

  onMount(async () => {
    const module = await import('$lib/data/playbooks/Bold/moves')
    moves = module.default
  })

  export let start: number = 1
  export let hide: boolean = false
</script>
<Playbook {start} {hide} playbook={Bold} {moves}>

</Playbook>